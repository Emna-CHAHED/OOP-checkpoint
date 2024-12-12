console.log("User 1 made a request");
setTimeout(callback1,5000)

console.log("User 2 made a request");
setTimeout(callback2,2000)

console.log("User 3 made a request");
setTimeout(callback2,3000)

function callback3(){
    console.log("Querried the database and return after 5 seconds");
}

function callback1(){
    console.log("Querried the database and return after 5 seconds, for user 2 request");
}

function callback2(){
    console.log("Querried the database and return after 5 seconds, for user 3 request");

}function callback3(){
    console.log("Querried the database and return after 5 seconds, for user 0 request");
}