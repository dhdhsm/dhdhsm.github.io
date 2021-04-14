
var x;
var y="sixth";
var z="Hint : 6 is A number";
function my_func(){
        x=document.getElementById("ans").value;
        if(x==y) {alert("Sucessful!") ;
          }
        else  {alert("Wrong!") ;
}
}

function tip(){
      document.getElementById("demo").innerHTML = z;
}

function re(){

    document.getElementById("question").innerHTML = "What letter is a question?";
    y="Y";
    z="Hint: the letter is like a tree branch.";
}
