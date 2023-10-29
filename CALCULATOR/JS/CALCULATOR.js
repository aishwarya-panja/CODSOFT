//Display values
function dis(val){
    document.getElementById("result").value += val ;
}

//Clear input field
function clr(){
    document.getElementById("result").value = "" ;
}

//equal function
function solve(){
    let input = document.getElementById("result").value ;
    let output = math.evaluate(input) ;
    document.getElementById("result").value = output ;
}

//function for any keyboard key press
function func(event){
    if(event.key == '1' || event.key == '2' || event.key == '3' || event.key == '4' ||
    event.key == '5' || event.key == '6' || event.key == '7' || event.key == '8' ||
    event.key == '9' || event.key == '/' ||
    event.key == '*' || event.key == '-' || event.key == '+')
    document.getElementById("result").value += event.key ;
}

//function for pressing enter key to solve the operation
let calculator = document.getElementById("calc") ;
calculator.onkeyup = function (event){
    if(event.keyCode == 13){
        console.log("ENTER") ;
        let x = document.getElementById("result").value ;
        console.log(x) ;
        solve() ;
    }
}