function a(){
    return 35;
}
console.log(a())
// output: 35

function a(){
    return 4;
}
console.log(a()+a());
// output: 8

function a(b){
    return b;
}
console.log(a(2)+a(4));
// output: 6

function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));
// output: 
// 3
// 9

function a(b){
    return b*4;
    console.log(b);
}
console.log(a(10));
// output: 40  (line 3 is skipped because it's after the return)

function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
// output: 4  (line 8 is skipped because it's after the return)


function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
// output: 
// 10 3  (don't run the function, just return the numbers 10 and 3)
// 30  (run the function now and log the return)

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
// output:  (ignore the function and log the numbers shown)
// 3
// 4

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
// output:  (log i after it's added to 2, then increment it and add 2 again, log and repeat once more)
// 2
// 5
// 8
// undefined (since there is no return, the console will end with undefined)

function a(b,c){
    for(var i=b; i<c; i++) {
        console.log(i);
    }
    return b*c;
}
a(0,10);
console.log(a(0,10));
// output: a(0,10); will output the positive integers from 0 to 9
// console.log(a(0,10)); will output the positive integers from 0 to 9 and then 0 (b*c)

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(j);
        }
    console.log(i);
    }
}
// output: (function not called, no other code, therefore no output)

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
// output: (function not called, no other code, therefore no output)

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
// output: 10 (function not called, just log the variable as initialized)

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
// output: (calling the function triggers line 4 to log z as 15, then the last line essentially repeats that)
// 15
// 15

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
// output: (setting z = the the return of a() calls a(), which logs z as 15 on line 4, then the last line logs it as 15 again)
// 15
// 15