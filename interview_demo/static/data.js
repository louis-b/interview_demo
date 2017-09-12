function funct(n1, delt=1) {  
    var n2;
    var len = data.body[n1].length;
    n2 =  data.count[n1]
    n2 = (n2 + delt + len) % len;
    var tmp = data.intro[n1] + data.body[n1][n2];
    document.getElementById("ans" + n1).innerHTML = tmp;
    tmp = (n2 + 1)  + "/" + len;
    document.getElementById("page" + n1).innerHTML = tmp;
    data.count[n1] = n2;    
}

function home(list, mascot=false){
    var tmp;
    var len;
    var k;
    if (mascot == false){
        document.getElementById('mascot').style.display = "none";
    }
    else{
        document.getElementById('mascot').style.display = "inline";
    }
    document.getElementById('main').style.display = "none";
    document.getElementById("ans").innerHTML = '';
    //var list = [4,8,5,6];
    for(i=0; i<list.length; i++){
        data.count[list[i]] = -1;
        //tmp = "<span id=page" + i + "></span><div id=ans" + i + "></div><hr>";
        tmp = "<div id=ans" + list[i] + "></div><hr><br><br>";
        document.getElementById("ans").innerHTML += tmp;
        funct(list[i]);
    }
}

function index(){
    document.getElementById('mascot').style.display = "inline"; 
    document.getElementById("ans").innerHTML = '';
    document.getElementById('main').style.display = "inline";
}

function contact(){
    //document.getElementById('mascot').style.display = "inline"; 
    //document.getElementById("ans").innerHTML = '';
    //document.getElementById('main').style.display = "inline";
    var i = 11;
    data.count[i] = -1; 
    var tmp = "<div id=ans" + i + "></div><hr><br><br>";
    document.getElementById("ans").innerHTML = tmp;
    funct(i);
}

function test(){
    var n = 0;
    document.getElementById("ans").innerHTML = dat.body[n];
}







var data = {intro:[],body:[],count:[]};
var tmp, intro;
var X = "X";

tmp = 1;
data.intro[tmp] =
"<li class=l>Bar chart demo <span id=pageX></span><p>\
<li class=l>Click <input type=submit value=Previous onclick=funct(X,-1)> or \
<input type=submit value=Next onclick=funct(X)><p>".replace(/X/g, tmp);
data.body[tmp] = [
"<img src=../static/staff1.png>",
"<img src=../static/staff2.png>"
]

tmp = 0;
data.intro[tmp] =
"<li class=l>Notice-board <span id=pageX></span><p>".replace(/X/g, tmp);
data.body[tmp] = [
"<li class=l>Click on a date to leave a message.<p><li class=l><span style=background-color:Red>Red</span> indicates a         high-priority message.<br><span style=background-color:Cyan>Cyan</span> indicates a         normal-priority message.</li><p>\
<table border=0 cellpadding=0 cellspacing=0 class=month><tr><th colspan=7 class=month>November 2015</th></tr><tr><th class=mon>Mon</th><th class=tue>Tue</th><th class=wed>Wed</th><th class=thu>Thu</th><th class=fri>Fri</th><th class=sat>Sat</th><th class=sun>Sun</th></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td ><span class=link onclick=funct(0)>\
                1</span></td></tr><tr><td ><span class=link onclick=funct(0,1)>                2</span></td><td ><span class=link onclick=funct(0,1)>                3</span></td><td ><span class=link onclick=funct(0,1)>                4</span></td><td style=background-color:Cyan><span class=link onclick=funct(0,1)>                5</span></td><td ><span class=link onclick=funct(0,1)>                6</span></td><td ><span class=link onclick=funct(0,1)>                7</span></td><td ><span class=link onclick=funct(0,1)>                8</span></td></tr><tr><td ><span class=link onclick=funct(0,1)>                9</span></td><td style=background-color:Red><span class=link onclick=funct(0,1)>                10</span></td><td ><span class=link onclick=funct(0,1)>                11</span></td><td style=background-color:Cyan><span class=link onclick=funct(0,1)>                12</span></td><td ><span class=link onclick=funct(0,1)>                13</span></td><td ><span class=link onclick=funct(0,1)>                14</span></td><td ><span class=link onclick=funct(0,1)>                15</span></td></tr><tr><td ><span class=link onclick=funct(0,1)>                16</span></td><td style=background-color:Red><span class=link onclick=funct(0,1)>                17</span></td><td ><span class=link onclick=funct(0,1)>                18</span></td><td ><span class=link onclick=funct(0,1)>                19</span></td><td ><span class=link onclick=funct(0,1)>                20</span></td><td ><span class=link onclick=funct(0,1)>                21</span></td><td ><span class=link onclick=funct(0,1)>                22</span></td></tr><tr><td ><span class=link onclick=funct(0,1)>                23</span></td><td ><span class=link onclick=funct(0,1)>                24</span></td><td ><span class=link onclick=funct(0,1)>                25</span></td><td ><span class=link onclick=funct(0,1)>                26</span></td><td ><span class=link onclick=funct(0,1)>                27</span></td><td ><span class=link onclick=funct(0,1)>                28</span></td><td ><span class=link onclick=funct(0,1)>                29</span></td></tr><tr><td ><span class=link onclick=funct(0,1)>                30</span></td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>",
"<li class=l>Date: dd/mm/yy<p>\
<li class=l><input type=submit value='Go Back' onclick=funct(0)><p>\
<form name=input>        <textarea class=ta name=3 rows=5>This is a demo only.</textarea><br>        </form>"
]

data.intro[2] =
"<li class=l>Graphics Demo <span id=page2></span><p>\
<li class=l>Click <input type=submit value=Previous onclick=funct(2,-1)> or \
<input type=submit value=Next onclick=funct(2)><p>";
data.body[2] = [
"<img src=../static/temp1.png>",
"<img src=../static/temp2.png>",
"<img src=../static/temp3.png>",
"<img src=../static/temp4.png>"
]

tmp = 3;
data.intro[tmp] =
"<li class=l>Sorting demo <span id=pageX></span><p>\
<li class=l>Click <input type=submit value=Previous onclick=funct(X,-1)> or \
<input type=submit value=Next onclick=funct(X)><p>".replace(/X/g, tmp);
data.body[tmp] = [
"<li class=l>Sorted by customer's name</li><p><table>    <td></td>    <td><b>Email</b></td>    <td><b>Amount</b></td>    <td><b>Days</b></td>    <tr>        <td>Customer_15</td>        <td>customer15@gmail.com</td>        <td>$1300</td>        <td>7</td>        <tr>        <td>Customer_14</td>        <td>customer14@gmail.com</td>        <td>$600</td>        <td>5</td>        <tr>        <td>Customer_13</td>        <td>customer13@gmail.com</td>        <td>$900</td>        <td>4</td>        <tr>        <td>Customer_12</td>        <td>customer12@gmail.com</td>        <td>$1100</td>        <td>2</td>        <tr>        <td>Customer_11</td>        <td>customer11@gmail.com</td>        <td>$400</td>        <td>12</td>        <tr>        <td>Customer_10</td>        <td>customer10@gmail.com</td>        <td>$1500</td>        <td>1</td>        <tr>        <td>Customer_9</td>        <td>customer9@gmail.com</td>        <td>$1000</td>        <td>9</td>        <tr>        <td>Customer_8</td>        <td>customer8@gmail.com</td>        <td>$200</td>        <td>13</td>        <tr>        <td>Customer_7</td>        <td>customer7@gmail.com</td>        <td>$800</td>        <td>10</td>        <tr>        <td>Customer_6</td>        <td>customer6@gmail.com</td>        <td>$500</td>        <td>3</td>        <tr>        <td>Customer_5</td>        <td>customer5@gmail.com</td>        <td>$1200</td>        <td>14</td>        <tr>        <td>Customer_4</td>        <td>customer4@gmail.com</td>        <td>$1400</td>        <td>6</td>        <tr>        <td>Customer_3</td>        <td>customer3@gmail.com</td>        <td>$300</td>        <td>15</td>        <tr>        <td>Customer_2</td>        <td>customer2@gmail.com</td>        <td>$100</td>        <td>11</td>        <tr>        <td>Customer_1</td>        <td>customer1@gmail.com</td>        <td>$700</td>        <td>8</td>        </table>",
"<li class=l>Sorted by amount due</li><p><table>    <td></td>    <td><b>Email</b></td>    <td><b>Amount</b></td>    <td><b>Days</b></td>    <tr>        <td>Customer_6</td>        <td>customer6@gmail.com</td>        <td>$1500</td>        <td>4</td>        <tr>        <td>Customer_13</td>        <td>customer13@gmail.com</td>        <td>$1400</td>        <td>1</td>        <tr>        <td>Customer_14</td>        <td>customer14@gmail.com</td>        <td>$1300</td>        <td>11</td>        <tr>        <td>Customer_4</td>        <td>customer4@gmail.com</td>        <td>$1200</td>        <td>7</td>        <tr>        <td>Customer_3</td>        <td>customer3@gmail.com</td>        <td>$1100</td>        <td>6</td>        <tr>        <td>Customer_1</td>        <td>customer1@gmail.com</td>        <td>$1000</td>        <td>8</td>        <tr>        <td>Customer_9</td>        <td>customer9@gmail.com</td>        <td>$900</td>        <td>15</td>        <tr>        <td>Customer_12</td>        <td>customer12@gmail.com</td>        <td>$800</td>        <td>12</td>        <tr>        <td>Customer_10</td>        <td>customer10@gmail.com</td>        <td>$700</td>        <td>10</td>        <tr>        <td>Customer_7</td>        <td>customer7@gmail.com</td>        <td>$600</td>        <td>14</td>        <tr>        <td>Customer_5</td>        <td>customer5@gmail.com</td>        <td>$500</td>        <td>5</td>        <tr>        <td>Customer_8</td>        <td>customer8@gmail.com</td>        <td>$400</td>        <td>9</td>        <tr>        <td>Customer_11</td>        <td>customer11@gmail.com</td>        <td>$300</td>        <td>3</td>        <tr>        <td>Customer_2</td>        <td>customer2@gmail.com</td>        <td>$200</td>        <td>2</td>        <tr>        <td>Customer_15</td>        <td>customer15@gmail.com</td>        <td>$100</td>        <td>13</td>        </table><p>",
"<li class=l>Sorted by days overdue</li><p><table>    <td></td>    <td><b>Email</b></td>    <td><b>Amount</b></td>    <td><b>Days</b></td>    <tr>        <td>Customer_10</td>        <td>customer10@gmail.com</td>        <td>$500</td>        <td>15</td>        <tr>        <td>Customer_6</td>        <td>customer6@gmail.com</td>        <td>$900</td>        <td>14</td>        <tr>        <td>Customer_15</td>        <td>customer15@gmail.com</td>        <td>$200</td>        <td>13</td>        <tr>        <td>Customer_4</td>        <td>customer4@gmail.com</td>        <td>$600</td>        <td>12</td>        <tr>        <td>Customer_2</td>        <td>customer2@gmail.com</td>        <td>$1500</td>        <td>11</td>        <tr>        <td>Customer_8</td>        <td>customer8@gmail.com</td>        <td>$400</td>        <td>10</td>        <tr>        <td>Customer_14</td>        <td>customer14@gmail.com</td>        <td>$1200</td>        <td>9</td>        <tr>        <td>Customer_9</td>        <td>customer9@gmail.com</td>        <td>$700</td>        <td>8</td>        <tr>        <td>Customer_5</td>        <td>customer5@gmail.com</td>        <td>$800</td>        <td>7</td>        <tr>        <td>Customer_7</td>        <td>customer7@gmail.com</td>        <td>$1400</td>        <td>6</td>        <tr>        <td>Customer_11</td>        <td>customer11@gmail.com</td>        <td>$1300</td>        <td>5</td>        <tr>        <td>Customer_12</td>        <td>customer12@gmail.com</td>        <td>$100</td>        <td>4</td>        <tr>        <td>Customer_1</td>        <td>customer1@gmail.com</td>        <td>$300</td>        <td>3</td>        <tr>        <td>Customer_3</td>        <td>customer3@gmail.com</td>        <td>$1000</td>        <td>2</td>        <tr>        <td>Customer_13</td>        <td>customer13@gmail.com</td>        <td>$1100</td>        <td>1</td>        </table>                <p>"
]

tmp = 4;
data.intro[tmp] =
"<li class=l>Graphics demo <span id=pageX></span><p>\
<li class=l>Click <input type=submit value=Previous onclick=funct(X,-1)> or \
<input type=submit value=Next onclick=funct(X)></li><p>".replace(/X/g, tmp);
data.body[tmp] = [
"<li class=l>These graphs were made with data obtained from the Bureau of Meteorology.<p>\
<img class=small src=../static/temp1.png>\
<img class=small src=../static/temp2.png>",
"<li class=l>Approximating pi by two infinite series<p>\
<img class=small src=../static/pi.gif>\
<img class=small src=../static/pi2.gif>",
"<li class=l>Decaying sine wave<p><img src=../static/decay.gif>",
"<li class=l>Conway's Game of Life (Gosper glider gun, discovered in 1970)<p><img src=../static/gol.gif>"
]

tmp = 41;
data.intro[tmp] = 
"<li class=l>Graphics Demo<p>\
<li class=l>Decaying sine wave<p>\
<li class=l>Press F5 to restart<p>";
data.body[tmp] = [
"<img src=../static/decay.gif>"
]

tmp = '4b';
data.intro[tmp] = 
"<li class=l>Software-assistant to automate repetitive tasks on Pinterest<p>\
<li class=l>Press F5 to restart<p>";
data.body[tmp] = [
"<img class=large src=../static/pinterest2.gif>"
]

tmp = 5;
data.intro[tmp] =
"<li class=l>Sudoku <span id=pageX></span><p>\
<li class=l>Click <input type=submit value=Previous onclick=funct(X,-1)> or \
<input type=submit value=Next onclick=funct(X)><p>\
<li class=l>To solve these puzzles, I used a brute-force algorithm</li><p>".replace(/X/g, tmp);
data.body[tmp] = [
"<div class=float>\
<b>Input:</b><br>\
    <table class=sudoku>\
    <td style=background-color:>6</td>\
    <td style=background-color:>3</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td></tr><tr><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>5</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>8</td></tr><tr><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>5</td><td style=background-color:#E0E0E0>6</td><td style=background-color:#E0E0E0>7</td><td style=background-color:#E0E0E0>4</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td></tr><tr><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:>_</td><td style=background-color:>2</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td></tr><tr><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>3</td><td style=background-color:>4</td><td style=background-color:>_</td><td style=background-color:>1</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>2</td><td style=background-color:#E0E0E0>_</td></tr><tr><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>3</td><td style=background-color:#E0E0E0>4</td><td style=background-color:#E0E0E0>5</td></tr><tr><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>7</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>4</td></tr><tr><td style=background-color:>_</td><td style=background-color:>8</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>3</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:>9</td><td style=background-color:>_</td><td style=background-color:>2</td></tr><tr><td style=background-color:>9</td><td style=background-color:>4</td><td style=background-color:>7</td><td style=background-color:#E0E0E0>1</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:>_</td><td style=background-color:>8</td><td style=background-color:>_</td></tr></table>\
</div>\
<div>\
<b>Output:</b><br>\
    <table class=sudoku><tr><td style=background-color:>6</td><td style=background-color:>3</td><td style=background-color:>9</td><td style=background-color:#E0E0E0>2</td><td style=background-color:#E0E0E0>1</td><td style=background-color:#E0E0E0>8</td><td style=background-color:>4</td><td style=background-color:>5</td><td style=background-color:>7</td></tr><tr><td style=background-color:>4</td><td style=background-color:>7</td><td style=background-color:>1</td><td style=background-color:#E0E0E0>5</td><td style=background-color:#E0E0E0>3</td><td style=background-color:#E0E0E0>9</td><td style=background-color:>2</td><td style=background-color:>6</td><td style=background-color:>8</td></tr><tr><td style=background-color:>8</td><td style=background-color:>2</td><td style=background-color:>5</td><td style=background-color:#E0E0E0>6</td><td style=background-color:#E0E0E0>7</td><td style=background-color:#E0E0E0>4</td><td style=background-color:>1</td><td style=background-color:>3</td><td style=background-color:>9</td></tr><tr><td style=background-color:#E0E0E0>5</td><td style=background-color:#E0E0E0>6</td><td style=background-color:#E0E0E0>4</td><td style=background-color:>8</td><td style=background-color:>2</td><td style=background-color:>3</td><td style=background-color:#E0E0E0>7</td><td style=background-color:#E0E0E0>9</td><td style=background-color:#E0E0E0>1</td></tr><tr><td style=background-color:#E0E0E0>7</td><td style=background-color:#E0E0E0>9</td><td style=background-color:#E0E0E0>3</td><td style=background-color:>4</td><td style=background-color:>5</td><td style=background-color:>1</td><td style=background-color:#E0E0E0>8</td><td style=background-color:#E0E0E0>2</td><td style=background-color:#E0E0E0>6</td></tr><tr><td style=background-color:#E0E0E0>2</td><td style=background-color:#E0E0E0>1</td><td style=background-color:#E0E0E0>8</td><td style=background-color:>7</td><td style=background-color:>9</td><td style=background-color:>6</td><td style=background-color:#E0E0E0>3</td><td style=background-color:#E0E0E0>4</td><td style=background-color:#E0E0E0>5</td></tr><tr><td style=background-color:>3</td><td style=background-color:>5</td><td style=background-color:>2</td><td style=background-color:#E0E0E0>9</td><td style=background-color:#E0E0E0>8</td><td style=background-color:#E0E0E0>7</td><td style=background-color:>6</td><td style=background-color:>1</td><td style=background-color:>4</td></tr><tr><td style=background-color:>1</td><td style=background-color:>8</td><td style=background-color:>6</td><td style=background-color:#E0E0E0>3</td><td style=background-color:#E0E0E0>4</td><td style=background-color:#E0E0E0>5</td><td style=background-color:>9</td><td style=background-color:>7</td><td style=background-color:>2</td></tr><tr><td style=background-color:>9</td><td style=background-color:>4</td><td style=background-color:>7</td><td style=background-color:#E0E0E0>1</td><td style=background-color:#E0E0E0>6</td><td style=background-color:#E0E0E0>2</td><td style=background-color:>5</td><td style=background-color:>8</td><td style=background-color:>3</td></tr></table>\
</div>",
"<div class=float>\
<b>Input:</b><br>\
<table><tr><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>1</td><td style=background-color:#E0E0E0>2</td><td style=background-color:#E0E0E0>5</td><td style=background-color:>4</td><td style=background-color:>_</td><td style=background-color:>_</td></tr><tr><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>8</td><td style=background-color:#E0E0E0>4</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td></tr><tr><td style=background-color:>4</td><td style=background-color:>2</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>8</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td></tr><tr><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>3</td><td style=background-color:#E0E0E0>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>9</td><td style=background-color:#E0E0E0>5</td></tr><tr><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>6</td><td style=background-color:#E0E0E0>_</td><td style=background-color:>9</td><td style=background-color:>_</td><td style=background-color:>2</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>1</td><td style=background-color:#E0E0E0>_</td></tr><tr><td style=background-color:#E0E0E0>5</td><td style=background-color:#E0E0E0>1</td><td style=background-color:#E0E0E0>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>6</td><td style=background-color:#E0E0E0>_</td></tr><tr><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>3</td><td style=background-color:>_</td><td style=background-color:>4</td><td style=background-color:>9</td></tr><tr><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>7</td><td style=background-color:>2</td><td style=background-color:>_</td><td style=background-color:>_</td></tr><tr><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>1</td><td style=background-color:#E0E0E0>2</td><td style=background-color:#E0E0E0>9</td><td style=background-color:#E0E0E0>8</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td></tr></table>\
</div>\
<div>\
<b>Output:</b><br>\
<table><tr><td style=background-color:>9</td><td style=background-color:>7</td><td style=background-color:>6</td><td style=background-color:#E0E0E0>1</td><td style=background-color:#E0E0E0>2</td><td style=background-color:#E0E0E0>5</td><td style=background-color:>4</td><td style=background-color:>3</td><td style=background-color:>8</td></tr><tr><td style=background-color:>1</td><td style=background-color:>5</td><td style=background-color:>8</td><td style=background-color:#E0E0E0>4</td><td style=background-color:#E0E0E0>3</td><td style=background-color:#E0E0E0>6</td><td style=background-color:>9</td><td style=background-color:>2</td><td style=background-color:>7</td></tr><tr><td style=background-color:>4</td><td style=background-color:>2</td><td style=background-color:>3</td><td style=background-color:#E0E0E0>8</td><td style=background-color:#E0E0E0>7</td><td style=background-color:#E0E0E0>9</td><td style=background-color:>1</td><td style=background-color:>5</td><td style=background-color:>6</td></tr><tr><td style=background-color:#E0E0E0>2</td><td style=background-color:#E0E0E0>3</td><td style=background-color:#E0E0E0>4</td><td style=background-color:>7</td><td style=background-color:>6</td><td style=background-color:>1</td><td style=background-color:#E0E0E0>8</td><td style=background-color:#E0E0E0>9</td><td style=background-color:#E0E0E0>5</td></tr><tr><td style=background-color:#E0E0E0>8</td><td style=background-color:#E0E0E0>6</td><td style=background-color:#E0E0E0>7</td><td style=background-color:>9</td><td style=background-color:>5</td><td style=background-color:>2</td><td style=background-color:#E0E0E0>3</td><td style=background-color:#E0E0E0>1</td><td style=background-color:#E0E0E0>4</td></tr><tr><td style=background-color:#E0E0E0>5</td><td style=background-color:#E0E0E0>1</td><td style=background-color:#E0E0E0>9</td><td style=background-color:>3</td><td style=background-color:>8</td><td style=background-color:>4</td><td style=background-color:#E0E0E0>7</td><td style=background-color:#E0E0E0>6</td><td style=background-color:#E0E0E0>2</td></tr><tr><td style=background-color:>7</td><td style=background-color:>8</td><td style=background-color:>2</td><td style=background-color:#E0E0E0>5</td><td style=background-color:#E0E0E0>1</td><td style=background-color:#E0E0E0>3</td><td style=background-color:>6</td><td style=background-color:>4</td><td style=background-color:>9</td></tr><tr><td style=background-color:>3</td><td style=background-color:>9</td><td style=background-color:>5</td><td style=background-color:#E0E0E0>6</td><td style=background-color:#E0E0E0>4</td><td style=background-color:#E0E0E0>7</td><td style=background-color:>2</td><td style=background-color:>8</td><td style=background-color:>1</td></tr><tr><td style=background-color:>6</td><td style=background-color:>4</td><td style=background-color:>1</td><td style=background-color:#E0E0E0>2</td><td style=background-color:#E0E0E0>9</td><td style=background-color:#E0E0E0>8</td><td style=background-color:>5</td><td style=background-color:>7</td><td style=background-color:>3</td></tr></table>\
</div>",
"<div class=float>\
<b>Input:</b><br>\
<table><tr><td style=background-color:>3</td><td style=background-color:>6</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>2</td><td style=background-color:#E0E0E0>_</td><td style=background-color:>_</td><td style=background-color:>8</td><td style=background-color:>9</td></tr><tr><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>3</td><td style=background-color:#E0E0E0>6</td><td style=background-color:#E0E0E0>1</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td></tr><tr><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td></tr><tr><td style=background-color:#E0E0E0>8</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>3</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>6</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>2</td></tr><tr><td style=background-color:#E0E0E0>4</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:>6</td><td style=background-color:>_</td><td style=background-color:>3</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>7</td></tr><tr><td style=background-color:#E0E0E0>6</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>7</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>1</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>8</td></tr><tr><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td></tr><tr><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>4</td><td style=background-color:#E0E0E0>1</td><td style=background-color:#E0E0E0>8</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td></tr><tr><td style=background-color:>9</td><td style=background-color:>7</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>3</td><td style=background-color:#E0E0E0>_</td><td style=background-color:>_</td><td style=background-color:>1</td><td style=background-color:>4</td></tr></table>\
</div>\
<div>\
<b>Output:</b>        <table><tr><td style=background-color:>3</td><td style=background-color:>6</td><td style=background-color:>1</td><td style=background-color:#E0E0E0>5</td><td style=background-color:#E0E0E0>2</td><td style=background-color:#E0E0E0>4</td><td style=background-color:>7</td><td style=background-color:>8</td><td style=background-color:>9</td></tr><tr><td style=background-color:>7</td><td style=background-color:>8</td><td style=background-color:>9</td><td style=background-color:#E0E0E0>3</td><td style=background-color:#E0E0E0>6</td><td style=background-color:#E0E0E0>1</td><td style=background-color:>4</td><td style=background-color:>2</td><td style=background-color:>5</td></tr><tr><td style=background-color:>5</td><td style=background-color:>2</td><td style=background-color:>4</td><td style=background-color:#E0E0E0>8</td><td style=background-color:#E0E0E0>7</td><td style=background-color:#E0E0E0>9</td><td style=background-color:>3</td><td style=background-color:>6</td><td style=background-color:>1</td></tr><tr><td style=background-color:#E0E0E0>8</td><td style=background-color:#E0E0E0>9</td><td style=background-color:#E0E0E0>3</td><td style=background-color:>1</td><td style=background-color:>5</td><td style=background-color:>7</td><td style=background-color:#E0E0E0>6</td><td style=background-color:#E0E0E0>4</td><td style=background-color:#E0E0E0>2</td></tr><tr><td style=background-color:#E0E0E0>4</td><td style=background-color:#E0E0E0>1</td><td style=background-color:#E0E0E0>2</td><td style=background-color:>6</td><td style=background-color:>8</td><td style=background-color:>3</td><td style=background-color:#E0E0E0>5</td><td style=background-color:#E0E0E0>9</td><td style=background-color:#E0E0E0>7</td></tr><tr><td style=background-color:#E0E0E0>6</td><td style=background-color:#E0E0E0>5</td><td style=background-color:#E0E0E0>7</td><td style=background-color:>9</td><td style=background-color:>4</td><td style=background-color:>2</td><td style=background-color:#E0E0E0>1</td><td style=background-color:#E0E0E0>3</td><td style=background-color:#E0E0E0>8</td></tr><tr><td style=background-color:>1</td><td style=background-color:>4</td><td style=background-color:>8</td><td style=background-color:#E0E0E0>7</td><td style=background-color:#E0E0E0>9</td><td style=background-color:#E0E0E0>6</td><td style=background-color:>2</td><td style=background-color:>5</td><td style=background-color:>3</td></tr><tr><td style=background-color:>2</td><td style=background-color:>3</td><td style=background-color:>5</td><td style=background-color:#E0E0E0>4</td><td style=background-color:#E0E0E0>1</td><td style=background-color:#E0E0E0>8</td><td style=background-color:>9</td><td style=background-color:>7</td><td style=background-color:>6</td></tr><tr><td style=background-color:>9</td><td style=background-color:>7</td><td style=background-color:>6</td><td style=background-color:#E0E0E0>2</td><td style=background-color:#E0E0E0>3</td><td style=background-color:#E0E0E0>5</td><td style=background-color:>8</td><td style=background-color:>1</td><td style=background-color:>4</td></tr></table>\
</div>"
]

tmp = 7;
data.intro[tmp] =
"<li class=l>One-time pad encryption demo <span id=pageX></span><p>\
<li class=l>Click <input type=submit value=Previous onclick=funct(X,-1)> or \
<input type=submit value=Next onclick=funct(X)></li><p>".replace(/X/g, tmp);
data.body[tmp] = [
"<span class=l>Key:</span><br>            [4, 3, 86, 20, 81, 90, 84, 11, 92, 84, 34, 55, 37, 18, 89, 47, 9, 75, 43, 60, 11, 84, 81, 81, 44, 69, 15, 92, 68, 76, 51, 1, 50, 76, 90, 7, 62, 66, 78, 48, 10, 70, 1, 52, 42, 31, 77, 65, 78, 9, 5, 66, 58, 55, 67, 75, 88, 2, 34, 86, 28, 36, 21, 27, 86, 11, 41, 76, 68, 84, 50, 49, 62, 12, 50, 28, 79, 70, 26, 55, 43, 40, 81, 12, 38, 53, 35, 45, 58, 63, 1, 62, 7, 89, 37, 90, 39, 13, 27, 20, 45, 27, 87, 18, 73, 58, 67, 92, 14, 30, 88, 11, 51, 46, 25, 63, 56, 52, 77, 36]        <p>    <span class=l>Ciphertext:</span><br>            FxiG0n3a7gMSLhh*C\S&gt;J@b0&#39; AbL5;j#4ol.$`.o[eP%K/:_C;$=$\3mcQeKXBqksT 0@)&amp;|F#PW|I.VD0zQ=P&lt;V,o.6jW5,sVF&#39;FkK+/{qCt3o&gt;&amp;S==/{g        <p>    <span class=l>Plaintext:</span><br>            Burmese are a notably people-oriented breed of cat, maintaining their kitten-like energy and playfulness into adulthood.        <p>",
"<span class=l>Key:</span><br>            [92, 93, 66, 81, 25, 94, 11, 8, 31, 87, 60, 48, 1, 54, 84, 88, 47, 40, 26, 60, 5, 61, 3, 71, 30, 56, 64, 47, 59, 8, 59, 75, 36, 43, 56, 70, 13, 26, 60, 74, 70, 31, 20, 54, 75, 82, 63, 92, 9, 62, 95, 22, 61, 93, 45, 45, 38, 55, 29, 65, 10, 57, 19, 75, 83, 37, 37, 46, 30, 46, 86, 62, 17, 43, 28, 3, 65, 60, 72, 10, 59, 5, 59, 35, 16, 66, 34, 6, 72, 83, 66, 35, 95, 57, 13, 5, 67, 86, 27, 92, 23, 52, 90, 10, 60, 61, 81, 56, 55, 89, 18, 57, 41, 5, 78, 83, 59, 65, 11, 58]        <p>    <span class=l>Ciphertext:</span><br>            ys~8Drp7Fj-LbRch/OB&gt;DYs\S&gt;\ZCw]~O%\[qp*6[JxR42!9j|,l@8&#34;&#39;&amp;$L_s=z-hSP#VJb=K+GqI&gt;{u,4,Wu~OE*~`M ?yf66ViK%nCX&lt;9\&lt;_s)*qc5@`oC        <p>    <span class=l>Plaintext:</span><br>            Burmese are a notably people-oriented breed of cat, maintaining their kitten-like energy and playfulness into adulthood.        <p>",
"<span class=l>Key:</span><br>            [24, 51, 1, 27, 9, 31, 93, 71, 86, 20, 93, 50, 29, 84, 53, 67, 62, 2, 69, 6, 66, 68, 11, 17, 31, 18, 60, 87, 53, 24, 32, 90, 9, 60, 31, 43, 84, 17, 90, 20, 25, 54, 92, 68, 8, 75, 95, 39, 16, 33, 40, 6, 58, 48, 75, 62, 28, 30, 55, 93, 36, 34, 8, 91, 46, 25, 94, 50, 78, 85, 35, 70, 35, 30, 95, 11, 49, 71, 58, 93, 64, 22, 10, 78, 47, 31, 78, 56, 29, 22, 29, 53, 51, 40, 4, 3, 32, 90, 30, 56, 86, 7, 46, 16, 46, 58, 95, 81, 61, 43, 85, 69, 90, 75, 48, 73, 38, 11, 10, 82]        <p>    <span class=l>Ciphertext:</span><br>            Z&gt;sNnXc)1LcND@/||c=r5&amp;AvTH&gt;6wMXdn@YV2g6LD&#39;a&amp;w{ Pq!i5=W~\VE,lSVo{.Gd&#39;a[T_#Xeys}/i;lo6ZW {swQ%O$pd%aY:el-IJ/nf\G0?p1:{!zn!        <p>    <span class=l>Plaintext:</span><br>            Burmese are a notably people-oriented breed of cat, maintaining their kitten-like energy and playfulness into adulthood.        <p>"
]

tmp = 8;
data.intro[tmp] =
"<li class=l>Binary search demo <span id=pageX></span><p>\
<li class=l>Click <input type=submit value=Previous onclick=funct(X,-1)> or \
<input type=submit value=Next onclick=funct(X)> to search for a randomly-chosen number </li><p>".replace(/X/g, tmp);
data.body[tmp] = [
"<b>Step 1:</b><br>1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, <span style=background-color:lightgrey>51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100</span><p><b>Step 2:</b><br><span style=background-color:lightgrey>51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75</span>, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100<p><b>Step 3:</b><br><span style=background-color:lightgrey>51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62</span>, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75<p><b>Step 4:</b><br>51, 52, 53, 54, 55, 56, <span style=background-color:lightgrey>57, 58, 59, 60, 61, 62</span><p><b>Step 5:</b><br><span style=background-color:lightgrey>57, 58, 59</span>, 60, 61, 62<p><b>Found:</b><br>58<p>",
"<b>Step 1:</b><br><span style=background-color:lightgrey>1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50</span>, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100<p><b>Step 2:</b><br>1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, <span style=background-color:lightgrey>26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50</span><p><b>Step 3:</b><br>26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, <span style=background-color:lightgrey>38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50</span><p><b>Step 4:</b><br>38, 39, 40, 41, 42, 43, <span style=background-color:lightgrey>44, 45, 46, 47, 48, 49, 50</span><p><b>Step 5:</b><br>44, 45, 46, <span style=background-color:lightgrey>47, 48, 49, 50</span><p><b>Step 6:</b><br>47, 48, <span style=background-color:lightgrey>49, 50</span><p><b>Found:</b><br>50<p>",
"<b>Step 1:</b><br><span style=background-color:lightgrey>1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50</span>, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100<p><b>Step 2:</b><br>1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, <span style=background-color:lightgrey>26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50</span><p><b>Step 3:</b><br>26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, <span style=background-color:lightgrey>38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50</span><p><b>Step 4:</b><br>38, 39, 40, 41, 42, 43, <span style=background-color:lightgrey>44, 45, 46, 47, 48, 49, 50</span><p><b>Step 5:</b><br>44, 45, 46, <span style=background-color:lightgrey>47, 48, 49, 50</span><p><b>Step 6:</b><br><span style=background-color:lightgrey>47, 48</span>, 49, 50<p><b>Found:</b><br>48<p>",
"<b>Step 1:</b><br>1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, <span style=background-color:lightgrey>51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100</span><p><b>Step 2:</b><br><span style=background-color:lightgrey>51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75</span>, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100<p><b>Step 3:</b><br>51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, <span style=background-color:lightgrey>63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75</span><p><b>Step 4:</b><br>63, 64, 65, 66, 67, 68, <span style=background-color:lightgrey>69, 70, 71, 72, 73, 74, 75</span><p><b>Found:</b><br>72<p>"
]
tmp = 9;
data.intro[tmp] =
"<li class=l>Page <span id=pageX></span><p>\
<li class=l>Find the longest palindromic substring in a given string.<p>\
<li class=l>Click <input type=submit value=Previous onclick=funct(X,-1)> or \
<input type=submit value=Next onclick=funct(X)><p>".replace(/X/g, tmp);
data.body[9] = [
"<b>Input:</b><br>abbbababbbabababbbabbbbabaaaabbabbabbbbabbbbaababbbbbabbaaaaaaaabbaabbabbbaabbab<p><b>Output:</b>    (length=15)<br>abbba<span class=palindrome>babbbabababbbab</span>bbbabaaaabbabbabbbbabbbbaababbbbbabbaaaaaaaabbaabbabbbaabbab",
"<b>Input:</b><br>aabaaabaaabbaabbabbabaabaaaabbbaaaabbbbaaaabbabbbaaabbbabbabaabbbaaabbbbaabbaaab<p><b>Output:</b>    (length=17)<br>aabaaabaaabbaabbabbabaabaaaabbbaaaabbbbaaa<span class=palindrome>abbabbbaaabbbabba</span>baabbbaaabbbbaabbaaab<p>",
"<b>Input:</b><br>bbaaaaabaaabababbabbbaabbabbbbabbaabbabaabbaaaaabaaaababbbabbbbbaaabbbbabbabaaba<p><b>Output:</b>    (length=18)<br>bbaaaaabaaabababbab<span class=palindrome>bbaabbabbbbabbaabb</span>abaabbaaaaabaaaababbbabbbbbaaabbbbabbabaaba<p>",
"<b>Input:</b><br>ababbbbaaaaaababaababaababaabaabbbbbbaaabbbbbbababbbabbbaabbbbaaaaaaabaaaabbaabb<p><b>Output:</b>    (length=17)<br>ababbbbaaaaaababaababaababaaba<span class=palindrome>abbbbbbaaabbbbbba</span>babbbabbbaabbbbaaaaaaabaaaabbaabb<p>"
]

tmp = 6;
data.intro[tmp] =
"<li class=l>Page <span id=pageX></span><p>\
<li class=l>Put + or - or nothing between the numbers 1,2,...,9 (in this order) such that the result is N<p>\
<li class=l>Click <input type=submit value=Previous onclick=funct(X,-1)> or \
<input type=submit value=Next onclick=funct(X)><p>\
<li class=l>This is a classic problem where the computer finds the solution much faster than a human could</li><p>".replace(/X/g, tmp);
data.body[tmp] = [
"1 + 2 + 3 - 4 + 5 + 6 + 78 + 9 = 100<br>1 + 2 + 34 - 5 + 67 - 8 + 9 = 100<br>1 + 23 - 4 + 5 + 6 + 78 - 9 = 100<br>1 + 23 - 4 + 56 + 7 + 8 + 9 = 100<br>12 + 3 + 4 + 5 - 6 - 7 + 89 = 100<br>12 + 3 - 4 + 5 + 67 + 8 + 9 = 100<br>12 - 3 - 4 + 5 - 6 + 7 + 89 = 100<br>123 + 4 - 5 + 67 - 89 = 100<br>123 + 45 - 67 + 8 - 9 = 100<br>123 - 4 - 5 - 6 - 7 + 8 - 9 = 100<br>123 - 45 - 67 + 89 = 100<p>",
"1 + 2 + 34 + 5 + 67 - 8 - 9 = 92<br>1 + 2 - 3 + 4 - 5 + 6 + 78 + 9 = 92<br>1 + 23 + 4 + 56 + 7 - 8 + 9 = 92<br>1 + 234 - 56 - 78 - 9 = 92<br>1 - 2 + 3 + 4 + 5 - 6 + 78 + 9 = 92<br>12 + 3 + 4 + 5 + 67 - 8 + 9 = 92<br>12 + 3 - 4 + 5 - 6 - 7 + 89 = 92<br>12 + 34 + 56 + 7 - 8 - 9 = 92<br>12 - 3 + 4 - 5 + 67 + 8 + 9 = 92<br>123 + 4 - 5 - 6 - 7 - 8 - 9 = 92<br>123 + 45 + 6 + 7 - 89 = 92<br>123 - 4 - 5 + 67 - 89 = 92<br>123 - 45 + 6 + 7 - 8 + 9 = 92<p>",
"1 + 2 + 3 + 4 - 5 + 6 - 7 + 89 = 93<br>1 + 2 - 3 + 4 + 5 + 67 + 8 + 9 = 93<br>1 + 2 - 3 - 4 - 5 + 6 + 7 + 89 = 93<br>1 + 23 - 4 + 5 + 67 - 8 + 9 = 93<br>1 - 2 + 3 - 4 + 5 - 6 + 7 + 89 = 93<br>1 - 2 - 3 + 4 + 5 + 6 - 7 + 89 = 93<br>12 - 3 + 4 + 5 + 6 + 78 - 9 = 93<br>12 - 3 + 4 + 56 + 7 + 8 + 9 = 93<br>12 - 3 - 4 - 5 + 6 + 78 + 9 = 93<br>123 + 45 - 6 - 78 + 9 = 93<br>123 - 4 + 56 + 7 - 89 = 93<p>",
"1 + 2 + 34 + 5 - 6 - 7 + 89 = 118<br>1 + 23 - 4 + 5 + 6 + 78 + 9 = 118<br>1 - 2 + 34 - 5 - 6 + 7 + 89 = 118<br>12 + 3 - 4 + 5 + 6 + 7 + 89 = 118<br>123 + 4 + 5 - 6 - 7 + 8 - 9 = 118<br>123 + 4 - 5 + 6 + 7 - 8 - 9 = 118<br>123 + 45 - 67 + 8 + 9 = 118<br>123 - 4 - 5 - 6 - 7 + 8 + 9 = 118<p>",
"1 + 2 - 3 - 4 + 5 + 6 + 78 + 9 = 94<br>1 + 2 - 34 + 56 + 78 - 9 = 94<br>1 + 23 + 4 + 56 - 7 + 8 + 9 = 94<br>1 - 2 + 3 + 4 - 5 + 6 + 78 + 9 = 94<br>1 - 2 + 34 - 5 + 67 + 8 - 9 = 94<br>12 + 3 - 4 - 5 + 6 - 7 + 89 = 94<br>12 + 34 + 56 - 7 + 8 - 9 = 94<br>12 - 3 + 4 + 5 - 6 - 7 + 89 = 94<br>12 - 3 - 4 + 5 + 67 + 8 + 9 = 94<br>123 - 4 + 5 - 6 - 7 - 8 - 9 = 94<br>123 - 45 + 6 - 7 + 8 + 9 = 94<p>"           
]

tmp = 12;
data.intro[tmp] =
"<li class=l>Graphics demo <span id=pageX></span><p>\
<li class=l>Click <input type=submit value=Previous onclick=funct(X,-1)> or \
<input type=submit value=Next onclick=funct(X)></li><p>".replace(/X/g, tmp);
data.body[tmp] = [
"<img src=../static/staff2.png>",
"<li class=l>This graph was made with data obtained from the Bureau of Meteorology<p>\
<img src=../static/temp1.png>"
]

tmp = 13;
data.intro[tmp] =
"<li class=l>Miscellaneous <span id=pageX></span><p>\
<li class=l>Click <input type=submit value=Previous onclick=funct(X,-1)> or \
<input type=submit value=Next onclick=funct(X)></li><p>".replace(/X/g, tmp);
data.body[tmp] = [
"<li class=l>Sudoku</li><p>\
<div class=float>\
<b>Input:</b><br>\
    <table class=sudoku>\
    <td style=background-color:>6</td>\
    <td style=background-color:>3</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td></tr><tr><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>5</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>8</td></tr><tr><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>5</td><td style=background-color:#E0E0E0>6</td><td style=background-color:#E0E0E0>7</td><td style=background-color:#E0E0E0>4</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td></tr><tr><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:>_</td><td style=background-color:>2</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td></tr><tr><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>3</td><td style=background-color:>4</td><td style=background-color:>_</td><td style=background-color:>1</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>2</td><td style=background-color:#E0E0E0>_</td></tr><tr><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>3</td><td style=background-color:#E0E0E0>4</td><td style=background-color:#E0E0E0>5</td></tr><tr><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>7</td><td style=background-color:>_</td><td style=background-color:>_</td><td style=background-color:>4</td></tr><tr><td style=background-color:>_</td><td style=background-color:>8</td><td style=background-color:>_</td><td style=background-color:#E0E0E0>3</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:>9</td><td style=background-color:>_</td><td style=background-color:>2</td></tr><tr><td style=background-color:>9</td><td style=background-color:>4</td><td style=background-color:>7</td><td style=background-color:#E0E0E0>1</td><td style=background-color:#E0E0E0>_</td><td style=background-color:#E0E0E0>_</td><td style=background-color:>_</td><td style=background-color:>8</td><td style=background-color:>_</td></tr></table>\
</div>\
<div>\
<b>Output:</b><br>\
    <table class=sudoku><tr><td style=background-color:>6</td><td style=background-color:>3</td><td style=background-color:>9</td><td style=background-color:#E0E0E0>2</td><td style=background-color:#E0E0E0>1</td><td style=background-color:#E0E0E0>8</td><td style=background-color:>4</td><td style=background-color:>5</td><td style=background-color:>7</td></tr><tr><td style=background-color:>4</td><td style=background-color:>7</td><td style=background-color:>1</td><td style=background-color:#E0E0E0>5</td><td style=background-color:#E0E0E0>3</td><td style=background-color:#E0E0E0>9</td><td style=background-color:>2</td><td style=background-color:>6</td><td style=background-color:>8</td></tr><tr><td style=background-color:>8</td><td style=background-color:>2</td><td style=background-color:>5</td><td style=background-color:#E0E0E0>6</td><td style=background-color:#E0E0E0>7</td><td style=background-color:#E0E0E0>4</td><td style=background-color:>1</td><td style=background-color:>3</td><td style=background-color:>9</td></tr><tr><td style=background-color:#E0E0E0>5</td><td style=background-color:#E0E0E0>6</td><td style=background-color:#E0E0E0>4</td><td style=background-color:>8</td><td style=background-color:>2</td><td style=background-color:>3</td><td style=background-color:#E0E0E0>7</td><td style=background-color:#E0E0E0>9</td><td style=background-color:#E0E0E0>1</td></tr><tr><td style=background-color:#E0E0E0>7</td><td style=background-color:#E0E0E0>9</td><td style=background-color:#E0E0E0>3</td><td style=background-color:>4</td><td style=background-color:>5</td><td style=background-color:>1</td><td style=background-color:#E0E0E0>8</td><td style=background-color:#E0E0E0>2</td><td style=background-color:#E0E0E0>6</td></tr><tr><td style=background-color:#E0E0E0>2</td><td style=background-color:#E0E0E0>1</td><td style=background-color:#E0E0E0>8</td><td style=background-color:>7</td><td style=background-color:>9</td><td style=background-color:>6</td><td style=background-color:#E0E0E0>3</td><td style=background-color:#E0E0E0>4</td><td style=background-color:#E0E0E0>5</td></tr><tr><td style=background-color:>3</td><td style=background-color:>5</td><td style=background-color:>2</td><td style=background-color:#E0E0E0>9</td><td style=background-color:#E0E0E0>8</td><td style=background-color:#E0E0E0>7</td><td style=background-color:>6</td><td style=background-color:>1</td><td style=background-color:>4</td></tr><tr><td style=background-color:>1</td><td style=background-color:>8</td><td style=background-color:>6</td><td style=background-color:#E0E0E0>3</td><td style=background-color:#E0E0E0>4</td><td style=background-color:#E0E0E0>5</td><td style=background-color:>9</td><td style=background-color:>7</td><td style=background-color:>2</td></tr><tr><td style=background-color:>9</td><td style=background-color:>4</td><td style=background-color:>7</td><td style=background-color:#E0E0E0>1</td><td style=background-color:#E0E0E0>6</td><td style=background-color:#E0E0E0>2</td><td style=background-color:>5</td><td style=background-color:>8</td><td style=background-color:>3</td></tr></table>\
</div>",
"<li class=l>Put + or - or nothing between the numbers 1,2,...,9 (in this order) such that the result is 100</li><p>\
1 + 2 + 3 - 4 + 5 + 6 + 78 + 9 = 100<br>1 + 2 + 34 - 5 + 67 - 8 + 9 = 100<br>1 + 23 - 4 + 5 + 6 + 78 - 9 = 100<br>1 + 23 - 4 + 56 + 7 + 8 + 9 = 100<br>12 + 3 + 4 + 5 - 6 - 7 + 89 = 100<br>12 + 3 - 4 + 5 + 67 + 8 + 9 = 100<br>12 - 3 - 4 + 5 - 6 + 7 + 89 = 100<br>123 + 4 - 5 + 67 - 89 = 100<br>123 + 45 - 67 + 8 - 9 = 100<br>123 - 4 - 5 - 6 - 7 + 8 - 9 = 100<br>123 - 45 - 67 + 89 = 100<p>",
"<li class=l>One-time pad encryption</li><p>\
<span class=l>Key:</span><br>            [4, 3, 86, 20, 81, 90, 84, 11, 92, 84, 34, 55, 37, 18, 89, 47, 9, 75, 43, 60, 11, 84, 81, 81, 44, 69, 15, 92, 68, 76, 51, 1, 50, 76, 90, 7, 62, 66, 78, 48, 10, 70, 1, 52, 42, 31, 77, 65, 78, 9, 5, 66, 58, 55, 67, 75, 88, 2, 34, 86, 28, 36, 21, 27, 86, 11, 41, 76, 68, 84, 50, 49, 62, 12, 50, 28, 79, 70, 26, 55, 43, 40, 81, 12, 38, 53, 35, 45, 58, 63, 1, 62, 7, 89, 37, 90, 39, 13, 27, 20, 45, 27, 87, 18, 73, 58, 67, 92, 14, 30, 88, 11, 51, 46, 25, 63, 56, 52, 77, 36]        <p>    <span class=l>Ciphertext:</span><br>            FxiG0n3a7gMSLhh*C\S&gt;J@b0&#39; AbL5;j#4ol.$`.o[eP%K/:_C;$=$\3mcQeKXBqksT 0@)&amp;|F#PW|I.VD0zQ=P&lt;V,o.6jW5,sVF&#39;FkK+/{qCt3o&gt;&amp;S==/{g        <p>    <span class=l>Plaintext:</span><br>            Burmese are a notably people-oriented breed of cat, maintaining their kitten-like energy and playfulness into adulthood.        <p>"
]

data.intro[11] =
"";
data.body[11] = [
"I am a programmer who is comfortable with the Linux operating-system. \
My background is in discrete mathematics, and computer science.  I have a \
Bachelor of Computing and Mathematical Sciences degree from UWA. \
I know these languages: Python, C, C++, C#, Java, PHP, Javascript.<p>\
My practical skills include:\
<li>Setting-up a Python web-server to serve dynamically-generated web-pages.<br>\
<li>Building a bio-feedback machine.  I built the circuit-board, connected it to a \
computer, and wrote the software to control the circuit-board.<br>\
<li>Writing simple games, like Tetris.<br>\
<li>Installing and maintaining Arch Linux.<p>\
"
]

data.intro['11b'] =
"";
data.body['11b'] = [
" "
]
