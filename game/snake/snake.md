---
layout: default
title: "🐍 Snake Mini Game"
permalink: /game/snake/
---

<h2 style="text-align:center;">🐍 Snake Mini Game</h2>
<p style="text-align:center; color:#666;">Use arrow keys or tap the arrows on mobile.</p>

<div style="display:flex; flex-direction:column; align-items:center; gap:1rem;">
  <canvas id="snake" width="420" height="420"
          style="background:#101010; border-radius:12px; box-shadow:0 4px 14px rgba(0,0,0,.3);"></canvas>

  <div>
    <button id="start" type="button"
      style="background:#0078D7;color:#fff;border:none;border-radius:10px;padding:.6rem 1rem;cursor:pointer;">▶️ Start / Restart</button>
    <span style="margin-left:1rem;">Score: <b id="score">0</b></span>
  </div>

  <!-- Mobile pad -->
  <div id="pad"
       style="display:grid;grid-template-columns:64px 64px 64px;grid-template-rows:64px 64px 64px;gap:.4rem;justify-content:center;user-select:none;">
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
  const ctx=cvs.getContext('2d', { alpha:false });
  const CELL=24, N=cvs.width/CELL|0;    // bigger cells = easier to see
  let snake=[], dir='right', nextDir='right', food=null, score=0, loop=null;

  function rnd(n){ return (Math.random()*n)|0; }

  function placeFood(){
    do { food={x:rnd(N), y:rnd(N)}; }
    while (snake.some(s=>s.x===food.x && s.y===food.y));
  }

  function reset(){
    const m=(N/2)|0;
    snake=[{x:m,y:m},{x:m-1,y:m},{x:m-2,y:m}]; // centered + visible
    dir='right'; nextDir='right';
    placeFood();
    score=0; document.getElementById('score').textContent=score;
    draw();                           // draw immediately
    clearInterval(loop);
    loop=setInterval(tick, 120);
  }

  function drawGrid(){
    ctx.strokeStyle="#1f1f1f";
    for(let i=1;i<N;i++){
      ctx.beginPath(); ctx.moveTo(i*CELL,0); ctx.lineTo(i*CELL,cvs.height); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0,i*CELL); ctx.lineTo(cvs.width,i*CELL); ctx.stroke();
    }
  }

  function draw(){
    ctx.fillStyle="#101010"; ctx.fillRect(0,0,cvs.width,cvs.height);
    drawGrid();
    // food
    ctx.fillStyle="#2ecc71";
    ctx.fillRect(food.x*CELL+3, food.y*CELL+3, CELL-6, CELL-6);
    // snake
    ctx.fillStyle="#ffd54a";
    snake.forEach((s,i)=>{
      ctx.fillRect(s.x*CELL+3, s.y*CELL+3, CELL-6, CELL-6);
      if(i===0){ ctx.strokeStyle="#ffffffaa"; ctx.lineWidth=2;
                 ctx.strokeRect(s.x*CELL+2, s.y*CELL+2, CELL-4, CELL-4); }
    });
  }

  function tick(){
    dir=nextDir;
    const h={...snake[0]};
    if(dir==='left') h.x--; if(dir==='right') h.x++;
    if(dir==='up') h.y--;   if(dir==='down')  h.y++;

    // collision
    if(h.x<0h.x>=Nh.y<0h.y>=Nsnake.some(s=>s.x===h.x&&s.y===h.y)){
      clearInterval(loop);
      draw();
      setTimeout(()=>alert('💀 Game Over! Score: '+score), 10);
      return;
    }

    snake.unshift(h);
    if(h.x===food.x && h.y===food.y){
      score++; document.getElementById('score').textContent=score;
      placeFood();
    } else snake.pop();

    draw();
  }

  function setDir(d){
    if((d==='left' && dir!=='right')(d==='right' && dir!=='left')
       (d==='up' && dir!=='down')  ||(d==='down'  && dir!=='up')) nextDir=d;
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

  // ✅ Auto-start so the snake is visible immediately
  reset();
})();
</script>
