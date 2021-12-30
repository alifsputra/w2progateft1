function btn () {
    const number = Date.now();
let flag;
    if (number%2===0) {
        flag = "HEBAT!!";
    }else if(number%3===0){
        flag = "BOLEH JUGA!";
    }else if (number%number===0){
        flag = Mengerikan
    }
    document.getElementById("result").innerHTML = flag;
    console.log(number);
}