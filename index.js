const display = document.getElementById("display");
function appendtodisplay(input){
    display.value += input;
}

function poptodisplay(){
    display.value=display.value.slice(0,-1);
    console.log(display.value);

}

function cleardisplay(){
    display.value = "";
}
function result (){
    display.value = eval(display.value);
} 
