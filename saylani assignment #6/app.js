//               ===   Assignment No 1  ===

// Q: #1

    // var first = prompt('Enter First Name');
    // var second = prompt('Enter Second Name');

    // var marge= first+second;
    // document.write('Full Name: '+marge);


// Q: #2 

    // var input = prompt('Enter Favorite'); 
    // var fri = 'My Favorite phone is: ';
    // var marge = fri+input;
    // document.write(marge);

    // var text = input;
    // var leng = text.length;
    // for (var i=0;i<leng;i++){
    // if (input.slice(i, i+1) === ' '){
    // document.write('<br>Length of string: '+leng);
    // break;

    //     }
    // }
  
// Q: #3 
    
    // var text = 'Pakistani';
    // var find = text.indexOf('i');
    // document.write("String:"+text);
    // document.write("<br>Index of 'n': "+find)


// Q: #4

    // var text = 'Hello World';
    // var finding = text.lastIndexOf('l');
    // document.write('String: '+text);
    // document.write("<br>Last index of 'l': "+finding);

// Q #5

        // var text ='Pakistan';
        // var finding = text.indexOf('i');
        // document.write("String: "+text);
        // document.write('<br>Character at index '+finding+': i');


// Q #6

        // var str1 = prompt('Enter first name');
        // var str2 = prompt('enter Second name');
        // var res = str1.concat(str2);
        // document.write(res);


// Q #7


    // var city = 'Hyderabad';
    // var indx = city.indexOf(city);

    // var first = city.slice(0,indx);
    // var scnd = 'Islamabad';
    // var third = city.slice(indx+9)
    // document.write('City: '+city)
    // document.write('<br>After Replacement: '+first+scnd+third);


// Q #8


    // var message = 'Ali and Sami are best friends. They play cricket and football together.';

    // var rep = message.replace('and','&');
    // alert(rep);

    // var index = message.lastIndexOf(' and ');
    
    // var first = message.slice(0,index);
    // var replace =  ' & ' ;
    // var third = message.slice(index+5);
    
    // document.write(first+replace+third);


//  Q #9

    // var str = 472;
    // var type = 'String';
    // var str1 = '472';
    // var type1 ='Type: Number';

    // document.write('Value: '+str);
    // document.write('<br>Type: '+type);
    // document.write('<br>Value: '+str1);
    // document.write('<br>Type: '+type1);


// Q #10


    // var input = prompt('Enter Value');
    // var leng = input.length;
    // var sli = input.slice(0,leng);
    // var capi = sli.toUpperCase();
    // document.write('User input: '+input)
    // document.write('<br>Upper Case: '+capi);

    
// Q #11


    // var input =prompt('select progamming language');

    // var firsli = input.slice(0,1);
    // var upper = firsli.toUpperCase();

    // var secsli = input.slice(1);
    // var low = secsli.toLowerCase();

    // document.write('user input: '+input);
    // document.write('<br>Title Case: '+upper+low)


// Q #12

        // var num = 35.36;
        // var str = String(num);
                        
        // var sli = str.slice(0,2)
        // var upp = sli.toUpperCase();

        // var sli = str.slice(3)
        // var upp1 = sli.toUpperCase();

        // document.write('Number: '+num)
        // document.write('<br>Result: '+upp+upp1)
        

// Q #14


    // var drink = ['pepsi','coke','sprite','fanta'];
    // var user = prompt('Enter your Grocery item');

    // var ind = drink.indexOf(user);
    
    
    //     if (user === drink[0])
    //     {

    //     document.write(user+' is availble at index '+ind+' in our Grocery')
   
    //     }

    //     else if (user === drink[1])
    //     {

    //     document.write(user+' is availble at index '+ind+' in our Grocery')
   
    //     }
    //     else if (user === drink[2])
    //     {

    //     document.write(user+' is availble at index '+ind+' in our Grocery')
   
    //     }

    //     else if (user === drink[3])
    //     {

    //     document.write(user+' is availble at index '+ind+' in our Grocery')
   
    //     }
    
    //     else 

    //     document.write('We are sorry. '+user+' is not avaible in our bakery ');  
     

// Q #16

    // var university = 'University of Karachi';

    //  var sp = university.split('');
    
    //  var arry =[];

    // arry=sp;

    // for (var i=0;i<arry.length;i++){
    
    //     document.write(arry[i]+'<br>');

    // }


// Q #17


        // var country = prompt('Enter your select Country');     

        // var last = country.charAt(7);

        // document.write('User input: '+country);
        // document.write('<br>Last character of input: '+last)    


//  Q #18


    // var text = 'The quick brown fox jumps over the lazy dog';

    // var leng = text.length;
    // document.write(text)
    // document.write('<br>String Length: '+leng)


//              === Assignment No2 ====
    

// Q #1

        // var value = 3.45214;
        // var rou = Math.round(value);

        // document.write('numbers: '+value);
        // document.write('<br>round off value: '+value);

        // var value1 = 3;
        // var cil = Math.ceil(value1);

        // document.write('<br> floor value'+value);
        // document.write('<br> ceil calue'+cil);


// Q #2


        // var value = -2.673;
        // var round = Math.round(value);
        // var fl = Math.floor(value);
        // var cil = Math.ceil(value);
    
        // document.write('<br> Number: '+value);
        // document.write('<br>round of value: '+round);
        // document.write('<br>floor value: '+fl);
        // document.write('<br>ceil value: '+cil);    
        


// Q #3


    // var value = -4;
    // var abso  = Math.ceil(value);

    // document.write("The absolute value of "+value+' is '+abso); 


// Q #4


        // var value = Math.random()*8;
        // var f = Math.floor(value);
        // var fl = Math.floor(value*2);

        // document.write('random dice value: '+f);
        // document.write('<br>random dice value: '+fl);


// Q #5


    // var head = prompt("Enter head value");
    // var tail = prompt('Enter tail value');

    // var tos = Math.random(head)*2;
    // var tos1 = Math.random(tail)*2;

    // var fl = Math.floor(tos);
    // var flo = Math.floor(tos1);

    // if (fl == 0){
    //     document.write(fl+' ' +'random coin value : Head<br>') 
    // }
    // else{
    //      document.write(flo+' ' +'random coin value : Tail')   
    //     }

// Q #6


    // var randm = Math.random()*5;
    // var fl = Math.floor(randm);
    
    // if(fl > 0){
    //     document.write('random number between 1 and 100: '+fl);

    // } 

// Q #8

        // var value = +prompt('Enter a number between 1 and 10');
                
        // if(value === 5){
        //     alert('Congratulation');
        // } 
        // else {
        //     alert('Try again!')
        // }
    