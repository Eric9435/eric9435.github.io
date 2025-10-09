---
layout: default
title: "🐍 Snake Mini Game"
permalink: /game/snake/
---

<h2 style="text-align:center;">🐍 Snake Mini Game</h2>
<p style="text-align:center; color:#666;">Use arrow keys or tap the arrows on mobile.</p>

<div style="display:flex; flex-direction:column; align-items:center; gap:1rem;">
  <canvas id="snake" width="400" height="400"
          style="background:#0b0b0b; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.3);"></canvas>

  <div>
    <button id="start" type="button"
      style="background:#0078D7;color:#fff;border:none;border-radius:10px;padding:.6rem 1rem;cursor:pointer;">▶ Start / Restart</button>
    <span style="margin-left:1rem;">Score: <b id="score">0</b></span>
  </div>

  <!-- Mobile pad -->
  <div id="pad"
       style="display:grid;grid-template-columns:60px 60px 60px;grid-template-rows:60px 60px 60px;gap:.4rem;justify-content:center;user-select:none;">
    <div></div>
    <button type="button" data-dir="up">⬆️</button>
    <div></div>
    <button type="button" data-dir="left">⬅️</button>
    <div></div>
    <button type="button" data-dir="right">➡️</button>
    <div></div>
    <button type="button" data-dir="down">⬇️</button>
    <div></div>
  </div>
</div>

<script>
(()=>{
  const cvs=document.getElementById('snake');
  const ctx=cvs.getContext('2d');
  const size=20, cells=cvs.width/size|0;
  let snake=[], dir='right', nextDir='right', food=null, score=0, loop=null, alive=false;

  function rnd(n){ return Math.floor(Math.random()*n); }

  function placeFood(){
    do { food={x:rnd(cells), y:rnd(cells)}; }
    while (snake.some(s=>s.x===food.x && s.y===food.y));
  }

  function reset(){
    snake=[{x:5,y:5},{x:4,y:5},{x:3,y:5}];
    dir='right'; nextDir='right';
    placeFood();
    score=0; document.getElementById('score').textContent=score;
    alive=true;
    draw();                   // draw immediately so you see the snake
    clearInterval(loop);
    loop=setInterval(tick,120);
  }

  function drawGrid(){
    ctx.strokeStyle="#1a1a1a";
    ctx.lineWidth=1;
    for(let i=1;i<cells;i++){
      ctx.beginPath(); ctx.moveTo(i*size,0); ctx.lineTo(i*size,cvs.height); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0,i*size); ctx.lineTo(cvs.width,i*size); ctx.stroke();
    }
  }

  function draw(){
    ctx.fillStyle="#0b0b0b"; ctx.fillRect(0,0,cvs.width,cvs.height);
    drawGrid();
    // food
    ctx.fillStyle="#2ecc71";
    ctx.fillRect(food.x*size+2, food.y*size+2, size-4, size-4);
    // snake
    ctx.fillStyle="#ffcc00";
    snake.forEach((s,i)=>{
      ctx.fillRect(s.x*size+2, s.y*size+2, size-4, size-4);
      if(i===0){ // head outline
        ctx.strokeStyle="#ffffff88"; ctx.lineWidth=2;
        ctx.strokeRect(s.x*size+1.5, s.y*size+1.5, size-3, size-3);
      }
    });
  }

  function tick(){
    dir = nextDir; // apply buffered direction
    const head={...snake[0]};
    if(dir==='left') head.x--;
    if(dir==='right') head.x++;
    if(dir==='up') head.y--;
    if(dir==='down') head.y++;

    // wall/self collision
    if(head.x<0  head.x>=cells  head.y<0  head.y>=cells  snake.some(s=>s.x===head.x && s.y===head.y)){
      alive=false; clearInterval(loop);
      draw();
      setTimeout(()=>alert('💀 Game Over! Score: '+score), 10);
      return;
    }

    snake.unshift(head);
    if(head.x===food.x && head.y===food.y){
      score++; document.getElementById('score').textContent=score;
      placeFood();
    } else {
      snake.pop();
    }
    draw();
  }

  function setDir(d){
    // disallow immediate reverse
    if((d==='left' && dir!=='right')  (d==='right' && dir!=='left') 
       (d==='up' && dir!=='down')   || (d==='down' && dir!=='up')){
      nextDir=d;
    }
  }

  // controls
  document.getElementById('start').addEventListener('click', reset);
  window.addEventListener('keydown', e=>{

if(e.key==='ArrowLeft') setDir('left');
    if(e.key==='ArrowRight') setDir('right');
    if(e.key==='ArrowUp') setDir('up');
    if(e.key==='ArrowDown') setDir('down');
  }, {passive:true});
  document.getElementById('pad').addEventListener('click', e=>{
    const d=e.target.getAttribute('data-dir'); if(d) setDir(d);
  }, {passive:true});

  // ✅ auto-start so you immediately see the snake
  reset();
})();
</script>
