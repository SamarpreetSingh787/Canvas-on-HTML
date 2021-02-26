canvas=document.getElementById("canvs");
ctx=canvas.getContext("2d");

color="Blue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI); 
ctx.stroke();

canvas.addEventListener("mousedown",mymousedwn);

function mymousedwn(e){
    color=document.getElementById("color").value;
    console.log(color);
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    circle(mousex,mousey);
}
function circle(mouse_x , mouse_y) { ctx.beginPath();
     ctx.strokeStyle = color;
      ctx.lineWidth = 2; ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
       ctx.stroke();
     }  
function clear_area() {
     ctx.clearRect(0, 0, canvas.width, canvas.height); }