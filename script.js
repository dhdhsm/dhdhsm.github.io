
var x;
var y="SIXTH";
var z="Hint : 6 is A number";
var m;
var n;
var questions =["What letter is a question?","What letter is a animal?","Which letter is a drink?",
"What 5-letter word has 6 left when you take 2 letters away?","Which letter is around an island?",
"What letter is a vegetable? ","How many letters are in the alphabet?"];
var answers=["Y","B","T","SIXTH","C","P","EIGHT"];
var hints=["Hint: the letter is like a tree branch.","Hint:Bee","Hint:People drink it in afternoon.",
"Hint : 6 is A number","Hint:See","Hint:Pea","Hint:'alphabet' is a word."];

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
    n=m;
    m=parseInt(6*Math.random());
    if (m==n & m<=6){
      m=m+1;
    }
    else {m=m;}
    console.log(m);
    document.getElementById("question").innerHTML = questions[m];
    y=answers[m];
    z=hints[m];
}
