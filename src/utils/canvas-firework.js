/* eslint-disable */
!(function() {
  const canvas = document.createElement("canvas")
  const context = canvas.getContext("2d")
  canvas.id='lx_canvas_'+parseInt(Math.random()*100)
  canvas.style.cssText=`position:fixed;top:0;left:0;z-index:-1;opacity:0.5`;
  document.getElementsByTagName("body")[0].appendChild(canvas)

  function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  }


  function clearCanvas(){
    context.fillStyle = '#ffffff';
    context.fillRect(0,0,canvas.width, canvas.height);
  }


  function mouseDownHandler(e) {
    var x = e.clientX;
    var y = e.clientY;

    fire(x,y);
}
  var rid;
  function fire(x,y){
      createFireworks(x,y);

      function tick() {
        drawFireworks();
        rid=requestAnimationFrame(tick);
      }
      cancelAnimationFrame(rid);
      tick();
  }

  var particles=[];
  function createFireworks(sx,sy){
      particles=[];

      var hue = Math.floor(Math.random()*51)+150;
      var hueVariance = 30;
      var count = 100;

      for(var i = 0 ;i<count;i++){
          var p = {};

          var angle = Math.floor(Math.random()*360);
          p.radians = angle * Math.PI / 180;
          p.radius = 0;

          p.sx = sx;
          p.sy = sy;

          p.speed = (Math.random()*5)+.4;

          p.size = Math.floor(Math.random()*3)+1;

          p.hue = Math.floor(Math.random()*((hue+hueVariance)-(hue-hueVariance)))+(hue-hueVariance);
          p.brightness = Math.floor(Math.random()*31)+50;
          p.alpha = (Math.floor(Math.random()*61)+40)/100;

          // var vx = Math.cos(p.radians) * p.radius;
          // var vy = Math.sin(p.radians) * p.radius + 0.4;

          // p.x += vx;
          // p.y += vy;

          // p.radius *= 1 - p.speed/100;

          // p.alpha -= 0.005;

          particles.push(p);
      }
  }

  function drawFireworks() {
      clearCanvas();

      for(var i = 0 ;i<particles.length;i++){
          var p = particles[i];

          p.vx = p.sx+Math.cos(p.radians) * p.radius;
          p.vy = p.sy+Math.sin(p.radians) * p.radius;

          p.radius += 1+p.speed;

          context.beginPath();
          context.arc(p.vx, p.vy, p.size, 0, Math.PI*2, false);
          context.closePath();

          context.fillStyle = 'hsla('+p.hue+', 100%, '+p.brightness+'%, '+100+')';
          context.fill();
      }
  }


  document.addEventListener('mousedown', mouseDownHandler, false);
  window.addEventListener('resize', resizeCanvas, false);
  resizeCanvas();




})()

