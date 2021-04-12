







function sayHello(){
 var response = prompt("What is your name?");
 alert("Hello " + response + ", have a good day!");}

function add(a,b){
  return a+b;}
console.log(add(20,30));
console.log(add(100,30));

function showTopic(){
 var x = document.getElementById("demo");
 x.style.fontSize = "25px";
 x.style.color = "red";
}
// 定义一个数组
var veggies = ["tomato","spinach","broccoli"];
// 数组的变化
var movies = ["Avengers","Captain Marvel", "Black panther", "Spiderman"];
// console【调用】
movies[0]="Wonder Woman";
console.log( movies[0]);
movies.push("Avengers");
console.log( movies );
movies.pop();
console.log( movies );
// create Object
var students ={
 students_id:1155121527,
 students_name:"Shirley",
 students_age:26,
 students_major:"New Media"
};
students.students_value = "unavailable";
console.log(students);

// 输入名称弹出水果many many many many
function printfruit(){
  var fruits = [ ];
for (i=1; i< 10 ; i++){
fruits[i] = prompt("Enter fruit");
}
// 此处的fruit是一个组
alert("fruits contains " + fruits);
console.log(fruits);}
// forEach loop中function里的元素是局部的虚拟的
function foreach(){var movie2 = ["Avengers", "Captain Marvel", "Black Panther", "Spiderman"];
movie2.forEach(function(i){
 alert(i);
});}
// 提示电影票是否剩余
var movieDetails = [
{title: "Avengers",
 time:"12pm",
 status: "available"},
{title: "Captain Marvel",
 time:"2pm",
 status: "unavailable"},
{title: "Black Panther",
 time:"4pm",
 status: "available"},
{title: "Spiderman",
 time:"6pm",
 status: "available"}
];
for (var movie of movieDetails){
 if (movie.status === "available"){
 console.log("The movie " + movie.title + " plays at " + movie.time);
 }
else{
 console.log("Sorry, the movie " + movie.title + " is sold out.");
 }
};
