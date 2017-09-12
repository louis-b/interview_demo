from calendar import HTMLCalendar, TextCalendar
from copy import deepcopy
from datetime import date, datetime, timedelta
from os.path import commonprefix
from random import choice, randint
from urlparse import urljoin
import math, os, pickle, random, re, requests, sqlite3, string, sys
import csv
import json
import time

from datetime import date
import random as rnd


class Database(object):
    def __init__(self, file1):
        self.file1 = file1

    def get(self):
        try: f = open(self.file1, 'r')
        except IOError: return ''
        self.list1 = f.read()
        f.close()
        return self.list1

    def keys(self):
        l = [i[0] for i in self.list1]
        return sorted(list(set(l)))

    def set(self, data, mode='a'):
        f = open(self.file1, mode)
        f.write(data)
        f.close()



class Calendar2(Database):
    # Noticeboard
    range1 = range(-1, 11)
    datefrmt = '%d-%m-%y'
    file1 = 'data/calendar2.db'
    file_csv = 'data/calendar2.csv'
    backup = 'data/calendar2b.db'
    table = 'table'
    message = 'message'
    dait = 'date'
    tags = [
    '<yellow>',
    '<orange>', 
    '<red>'        
    ] 
    #default = 'cyan'

    def __init__(self, offset=0):
        self.lt, self.gt = '&#60;', '&#62;'
        lt, gt = self.lt, self.gt
        table = Calendar2.table
        message = Calendar2.message
        dait = Calendar2.dait
        file1 = Calendar2.file1
        tags = Calendar2.tags
        if offset in Calendar2.range1:
            d = date.today()
            year = d.year
            n = offset + d.month
            if n < 1:
                year = d.year - 1
            elif n > 12:
                year = d.year + 1
            n %= 12
            if n == 0: 
                n = 12
            self.offset = offset
            self.month, self.year = n, year
        else:
            msg = 'offset is out of range'
            raise ValueError(msg)
        # check if the database exists
        db = Database(file1)
        if db.get() == '':
            db.set('x', mode='w')

        intro = 'The following colour-tags are available:<br>'
        for t in tags:
            t2 = t.strip('<>')
            tmp = '<span style=background-color:{}>{}</span>'.format(t2, lt +\
            t2 + gt)
            intro += tmp + '<br>'  
        t2 = tags[0].strip('<>')    
        intro += '<br>The default is <span style=background-color:{}>{}\
</span>.'.format(t2, lt + t2 + gt)
        self.intro = intro

    def btn(self, disable, char):
        return '<button class=large {}>{}</button>'.format(disable, char)

    def get_table(self):
        lt, gt = self.lt, self.gt
        month, year = self.month, self.year
        offset = self.offset
        datefrmt = Calendar2.datefrmt  
        tags = Calendar2.tags
        t = HTMLCalendar()
        tt = t.formatmonth(year, month)
        for day in ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']:
            tt = tt.replace(day, day[0])
        qtt = """<td class="sun">1</td></tr><tr><td class="mon">2</td><td \
        class="tue">3</td><td class="wed">4</td><td class="thu">5</td><td \
        class="fri">6</td><td class="sat">7</td><td class="sun">8</td></tr>
        <tr><td class="mon">9</td><td class="tue">10</td>"""
        d = date(year, month, 1)
        for i in range(31,0,-1):
        #for i in range(2, 4):
            try:
                dd = d.replace(day=i).toordinal()
                tag = self.get_status(dd)
                #print i, dd, tag
                tt = re.sub("<td class=.+?>", "<td>", tt)  
                tt = tt.replace('<td>{}<'.format(str(i)), '<td {}>{}<'.format\
                (tag, str(i)))
                tt = tt.replace(">{}<".format(str(i)), ">\n<a href=?1={}&2={}>\
                \n{}</a><".format(offset, str(dd), str(i), 1))
                #tt = tt.replace(">{}<".format(self.bit()), ">\n{}<".format(self.bit()))

            except ValueError:
                pass
        #n = self.month
        tt += '<br>'
        dict1 = [
        (lt, offset - 1),
        ('*', 0), 
        (gt, offset + 1)
        ]
        ans = []
        for k, v in dict1:
            tmp = v
            try:
                m = Calendar2(v)
                btn = self.btn('', k)
                if v == 0:
                    tmp = '<a href=?1={}>{}</a>'.format(v, btn)
                else:    
                    tmp = '<a href=?1={}>{}</a>'.format(v, btn) 
            except ValueError:
                btn = self.btn('disabled', k)
                tmp = '{}'.format(btn)
            ans += [tmp]
        #print ans
        #print
        #print tt
        tt = """
        <table class=calendar>
        <tr>
            <td class=calendar>
                <div class="div1">{}</div>
            </td>
            <td class=calendar>{}</td>
            <td class=calendar>
                <div class="div1">{}</div>
            </td>
        </tr>
        </table>""".format(ans[0], tt, ans[-1])    
        #ans += '<a href=?1=rss>[RSS]</a>'
        intro = ''
        intro += 'Click on a date to leave a message.<p>'
        #intro += '<span style=background-color:{0}>{0}</span> indicates a \
        #high-priority message.<br>'.format(style[0])
        #intro += '<span style=background-color:{0}>{0}</span> indicates a \
        #normal-priority message.<p><br>'.format(style[1])
        intro += self.intro
        intro += '<p><br>' + tt
        return intro

    def get_status(self, date):
        # get status of date   
        tmp = self.get(date)
        if tmp[0] != '':
            #print file1, size
            tag = 'style=background-color:{}'.format(tmp[1])
        else:
            tag = ''
        return tag

    def print_form(self, month, date):
        # '<button type=button>&#60;</button>'
        a = """Date: {}<p>       
        {}
        <form name=input method=post>
        <textarea class=ta name={} rows=5>{}</textarea><br>
        <input type=submit value=Submit>
        <a href=?1={}>
          <button type=button>Go Back</button>
        </a><br>
        </form>""".format(self.get_date(date), self.intro, '3', \
        self.get(date)[0], month)
        return a
  
    def get_date(self, date):
        #re-format date
        date = int(date)
        tmp = datetime.fromordinal(date).strftime('%A %d %B %Y')
        return tmp

    def get(self, date):
        table = Calendar2.table
        message = Calendar2.message
        dait = Calendar2.dait
        file1 = Calendar2.file1
        tags = Calendar2.tags
        with open(file1) as f:
            dic = json.load(f)
        try:
            ans = dic[str(date)]
            for t in tags[1:]:
                if t in ans:                    
                    a, b = ans, (t.strip('<>'))
                    return a, b
            else:
                a, b = ans, (tags[0].strip('<>'))
                return a, b
        except KeyError:
            return '', ''
     
    def get_all(self):
        file1 = Calendar2.file1
        backup = Calendar2.backup
        with open(file1) as f:
            dic = json.load(f)
        for k, v in sorted(dic.iteritems()):    
            tmp = datetime.fromordinal(int(k))
            if v.strip(' ') != '':
                #don't print empty entries
                print '{}/{}/{}'.format(tmp.day, tmp.month, tmp.year)
                print v
                print    

    def set(self, date, msg):
        file1 = Calendar2.file1
        backup = Calendar2.backup
        file_csv = Calendar2.file_csv

        for i in range(2, -1, -1):
            a = file1 + ''.join(['~'] * i)
            b = file1 + ''.join(['~'] * (i + 1))
            cmd = "cp {} {}".format(a, b)
            os.system(cmd)

        with open(file1) as f:
            dic = json.load(f)
        dic[date] = msg
        with open(file1, 'w') as f:
            json.dump(dic, f)



class Vendor():
    def __init__(self, id1):
        self.id = id1
        self.desc = 'A fine vendor with a good reputation.  Has been in \
        business for many years.'
        try:
            with open('database') as f:
                self.data = json.load(f)   
                self.data = [[i, int(j), k] for [i, j, k] in self.data]
                self.data.sort(key=lambda z:z[1])                        
        except Exception:
            self.data = []
        self.get_comments()

    def add_comment(self, rank, comment, user):
        comment += '<br> ---' + user
        self.data += [[self.id, int(rank), comment]]
        self.data.sort(key=lambda z:z[1])
        self.get_comments()
        for i in self.data:
            print i
        print    
        with open('database', 'w') as f:
            json.dump(self.data, f)
    
    def reverse(self):
        self.data.reverse()
        self.get_comments()

    def get_comments(self):
        self.comments = [[j, k] for [i, j, k] in self.data if i == self.id]
        try:
            self.rank = sum([i[0] for i in self.comments]) / \
            float(len(self.comments))
            self.rank = '{:.2f}'.format(self.rank)
        except ZeroDivisionError:
            self.rank = 'not ranked yet'

class Widget():
    n = 12
    names = ['Alan', 'Bob', 'Carol']        
    def __init__(self):
        self.origin = random.choice(['USA', 'Netherlands', 'France',\
        'Germany', 'UK'])
        self.price = 10
        self.desc = 'Finest quality widgets made in {}'.format(self.origin)
        self.vendor = random.choice(Widget.names)
        
class Cart():
    def __init__(self):
        self.cart0 = []
        self.items = 0

    def add(self, id1, amount):
        self.items += amount
        self.cart0 += [id1] * amount
        self.cart = []
        for i in range(Widget.n):
            count = 0
            price = 0
            for j in self.cart0:
                if j == i:
                    count += 1
                    price += widget[id1].price

            if count > 0:        
                self.cart += [[i, count, price]]
                print self.cart
                print
        self.total = sum(i[2] for i in self.cart)
            
