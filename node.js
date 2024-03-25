document.getElementById("concat").onclick = function() {
    let x = "sea";
    let y = "food";
    let result = x.concat(y);
    document.getElementById("statement").innerHTML = "sea + food =";
    document.getElementById("result").innerHTML = result;
}

document.getElementById("name").onclick = function() {
    let firstName = prompt("Please enter your first name");
    let secName = prompt("Please enter your second name");
    let result = firstName + " " + secName;
    let statement=firstName+"+" +secName;
    document.getElementById("statement").innerHTML=statement;
    document.getElementById("result").innerHTML = result;
}
document.getElementById("operators").onclick=function(){
    document.getElementById("statement").innerHTML=" x!===8"
    document.getElementById("result").innerHTML="false"
}
document.getElementById("else").onclick=function()
{
    fulname=prompt(" enter your name")
if(fulname==="tahir"){
    alert("your name is very good")
}
else if( fulname==="ahmad"){
    alert("your name is awesome")

}
else{
    alert(" your name is good")
}

}
document.getElementById("conditions").onclick=function(){
    age = prompt("enter your age");
    weight=prompt("enter youe weight");
    if(age=> 10 ){
    document.getElementById("result").innerHTML="you are a teenager";
    }
    if (age=>21) {
        document.getElementById("result").innerHTML="you are younger";
        
    } 
 
    }
    document.getElementById("nested").onclick=function(){
        userName= prompt("enter your user name");
        if (userName==="tahir036"){
     document.getElementById("result").innerHTML="your user name is correct";    
        }
        else{
            document.getElementById("result").innerHTML="wrong user name correct user name is tahir036";
        }
    }