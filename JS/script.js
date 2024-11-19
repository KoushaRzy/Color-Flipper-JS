////////////////////////////////////////////////////////////////////////////////////////////////////
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    //This line defines a constant variable letters which is 
    //a string containing all the possible characters for a 
    //HEX color.
    //HEX colors are composed of six characters, 
    //each chosen from the values 0-9 and A-F
    let color = "#";
    //The "#" is the prefix that all HEX colors must have.
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function changeBodyColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    const input1 =document.getElementById("input1");
    input1.value = randomColor;
    input1.style.color=randomColor;
}
////////////////////////////////////////////////////////////////////////////////////////////////////
function optionalColorFun(){
    const input1 = document.getElementById("input1");
    document.body.style.backgroundColor=input1.value;
    input1.style.color=input1.value;
}
////////////////////////////////////////////////////////////////////////////////////////////////////
const button = document.getElementById("btn1");
button.addEventListener("click", changeBodyColor);
document.getElementById("input1").value = "";
////////////////////////////////////////////////////////////////////////////////////////////////////s