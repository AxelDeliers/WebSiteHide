// GESTION SCROLL UP/DOWN NAVBAR

var lastScrollTop=0;
        navbar=document.querySelector('.header-top');
window.addEventListener("scroll",function(){
    var scrollTop=window.pageYOffset || 
    document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        navbar.style.top="-10vh";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop=scrollTop;
});

// GESTION CANVAS 
window.addEventListener("load",()=>{

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    fitToContainer(canvas);


    function fitToContainer(canvas){
        canvas.style.width='450px';
        canvas.style.height='450px';
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
      
    let painting = false;

    function getMousePos(canvas, e) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
    }

    function startPosition(e){
        painting = true;
        draw(e);
    }
    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e){
        var pos = getMousePos(canvas, e);
        if (!painting) return;
        ctx.lineWidth=2;
        ctx.lineCap ="round";
        ctx.lineTo(pos.x,pos.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(pos.x,pos.y);
    }

    canvas.addEventListener("mousedown",startPosition);
    canvas.addEventListener("mouseup",finishedPosition);
    canvas.addEventListener("mousemove",draw);

});