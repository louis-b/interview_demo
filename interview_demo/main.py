from my_classes import Calendar2, Widget, Cart, Vendor
from flask import Flask, render_template, request
from flask import flash, redirect, session, url_for, g


#############################################################################
app = Flask(__name__)   
app.secret_key = 'W178bYGrRMQbHidSWmNtXMAr'
BR = '<br>'
P = '<p>'
RESET = 5
GREY = '#E0E0E0'
YELLOW = 'Yellow'
TITLE = 'Demo'     

################# home #######################################################
@app.route('/')
def index0():
    return render_template('index_home.html', title=TITLE, mascot=True)

################# calendar messageboard ######################################
@app.route('/1', methods=['POST', 'GET'])
def index9():
    page = 9
    NUL = ''
    #intro = '<b>Calendar/noticeboard.</b><br> '
    r1 = request.args.get('1', NUL)
    r2 = request.args.get('2', NUL)
    if request.method == 'POST':
        # some text has been posted from the form
        text = request.form['3']
        m = Calendar2(offset=int(r1)) 
        date = r2
        m.set(date, text)
        outpt = m.get_table()
        return render_template('index.html', title=TITLE, outpt=outpt)        
    elif r1 == 'rss':
        m = Calendar2()
        outpt = m.get_all()
        return render_template('index.html', title=TITLE, outpt=outpt)
    elif r1 == NUL and r2 == NUL:           
        # print table for current month
        m = Calendar2()
        outpt = m.get_table()
        print outpt
        return render_template('index.html', title=TITLE, outpt=outpt)
    elif r1 != NUL and r2 == NUL:
        # print table for previous/next month
        m = Calendar2(offset=int(r1))
        outpt =  m.get_table()
        return render_template('index.html', title=TITLE, outpt=outpt)            
    elif r1 != NUL and r2 != NUL:
        # print form & textarea
        m = Calendar2()
        outpt = m.print_form(r1, r2)
        return render_template('index.html', title=TITLE, outpt=outpt)  

@app.route('/ss')
def indexss1():
    rp = request.path 
    return render_template('index-ss.html', cart=cart)

@app.route('/product-ss', methods=['GET'])
def indexss2():
    id1 = request.args.get('id', '0')
    st = request.args.get('status', '')
    id1 = int(id1)
    msg = ''
    if st == '1':
        id1 = int(id1)
        amount = request.args.get('amount', '')
        cart.add(int(amount), id1)
        msg = 'Thank you!'
    return render_template('product-ss.html', id1=id1, cart=cart,\
    msg=msg)

@app.route('/vendor-ss', methods=['GET'])
def indexss3():
    rp = request.path
    srt = request.args.get('sort', '')
    v_name = request.args.get('vendor', '')
    if v_name not in Widget.vendors:
        return redirect('/')
    if srt != '':
        vendor[v_name].reverse()
    user = request.args.get('user', '')
    rank = request.args.get('rank', '') 
    comment = request.args.get('comment', '')
    if comment != '':
        vendor[v_name].add_comment(rank, comment, user)
    outpt = vendor[v_name]
    return render_template('vendor-ss.html', outpt=outpt)
    
@app.route('/cart-ss', methods=['GET'])
def indexss4():
    delete = request.args.get('delete', '')
    if delete != '':
        cart.delete(int(delete))
    return render_template('cart-ss.html', cart=cart)

#################### Main ####################################################
cart = Cart()
vendor = {}
for name in Widget.vendors:
    vendor[name] = Vendor(name)
app.run()
