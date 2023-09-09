
let display = document.querySelector(".display-text");
document.querySelector(".key-7").onclick = function(){
    addTextToDisplay(7);
}
document.querySelector(".key-8").onclick = function(){
    addTextToDisplay(8);
}
document.querySelector(".key-9").onclick = function(){
    addTextToDisplay(9);
}
document.querySelector(".key-del").onclick = function(){
    del();
}
document.querySelector(".key-4").onclick = function(){
    addTextToDisplay(4);
}
document.querySelector(".key-5").onclick = function(){
    addTextToDisplay(5);
}
document.querySelector(".key-6").onclick = function(){
    addTextToDisplay(6);
}
document.querySelector(".key-add").onclick = function(){
    addTextToDisplay("+");
}
document.querySelector(".key-1").onclick = function(){
    addTextToDisplay(1);
}
document.querySelector(".key-2").onclick = function(){
    addTextToDisplay(2);
}
document.querySelector(".key-3").onclick = function(){
    addTextToDisplay(3);
}
document.querySelector(".key-sub").onclick = function(){
    addTextToDisplay("-");
}
document.querySelector(".key-dot").onclick = function(){
    addTextToDisplay(".");
}
document.querySelector(".key-0").onclick = function(){
    addTextToDisplay(0);
}
document.querySelector(".key-division").onclick = function(){
    addTextToDisplay("/");
}
document.querySelector(".key-multiplication").onclick = function(){
    addTextToDisplay("*");
}
document.querySelector(".key-reset").onclick = function(){
    reset();
}
document.querySelector(".key-equal").onclick = function(){
    evaluate();
}

function addTextToDisplay(value){
    let content = display.textContent;
    if(content ==="0" || content==="Error" || content ==="Too long"){
        display.textContent = "";
    }
    display.textContent +=value;
    if(display.textContent.length>=9){
        display.textContent ="Too long";
    }
}

function reset(){
    display.textContent="0";
}
function del(){
    let content = display.textContent;
    if(content ==="Error" || content ==="Too long"){
        display.textContent = "0";
    }else{
        display.textContent=display.textContent.slice(0,-1);
    }
    
    if(display.textContent ===""){
        display.textContent ="0";
    }
}
function evaluate(){
    try{
        display.textContent = eval(display.textContent);
    }catch(error){
        display.textContent = "Error";
    }
}
