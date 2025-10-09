---
layout: page
title: "🐍 Snake Mini Game"
permalink: /game/snake/
---

<style>
canvas#snake {
  background:#111;
  border-radius:12px;
  box-shadow:0 4px 12px rgba(0,0,0,0.3);
}
button.game-btn {
  background:#0078D7;
  color:#fff;
  border:none;
  border-radius:10px;
  padding:.6rem 1rem;
  cursor:pointer;
}
#pad {
  display:grid;
  grid-template-columns:60px 60px 60px;
  grid-template-rows:60px 60px 60px;
  gap:.4rem;
  justify-content:center;
  margin-top:.5rem;
}
#pad button {
  border:1px solid #ddd;
  border-radius:10px;
  font-size:1.2rem;
}
</style>

<h2 style="text-align:center;">🐍 Snake Game</h2>
<p style="text-align:center;color:#666;">Use arrow keys or tap the arrows on mobile.</p>

<div style="display:flex;flex-direction:column;align-items:center;gap:1rem;">
  <canvas id="snake" width="420" height="420"></canvas>
  <div>
    <button id="start" class="game-btn">▶️ Start / Restart</button>
    <span style="margin-left:1rem;">Score: <b id="score">0</b></span>
  </div>
  <div id="pad">
    <div></div>
    <button data-dir="up">⬆️</button>
    <div></div>
    <button data-dir="left">⬅️</button>
    <div></div>
    <button data-dir="right">➡️</button>
    <div></div>
    <button data-dir="down">⬇️</button>
    <div></div>
  </div>
</div>

<script>
(()=>{
  const c=document.getElementById('snake');
  const ctx=c.getContext('2d');
  const size=20, cells=c.width/size|0;
  let snake,dir,food,score,loop,alive;

  function reset(){
    snake=[{x:5,y:5}];
    dir='right';
    food=newFood();
    score=0;
    document.getElementById('score').textContent=score;
    alive=true;
    clearInterval(loop);
    loop=setInterval(tick,120);
  }

  function newFood(){
    return {x:Math.floor(Math.random()*cells),y:Math.floor(Math.random()*cells)};
  }

  function draw(){
    ctx.fillStyle="#111"; ctx.fillRect(0,0,c.width,c.height);
    ctx.fillStyle="#28a745"; ctx.fillRect(food.x*size,food.y*size,size-2,size-2);
    ctx.fillStyle="#ffb703"; snake.forEach(s=>ctx.fillRect(s.x*size,s.y*size,size-2,size-2));
  }

  function tick(){
    const head={...snake[0]};
    if(dir==='left')head.x--; if(dir==='right')head.x++;
    if(dir==='up')head.y--; if(dir==='down')head.y++;
    if(head.x<0head.x>=cellshead.y<0head.y>=cellssnake.some(s=>s.x===head.x&&s.y===head.y)){
      alive=false; clearInterval(loop); alert('Game Over! Score: '+score); return;
    }
    snake.unshift(head);
    if(head.x===food.x&&head.y===food.y){ score++; document.getElementById('score').textContent=score; food=newFood();}
    else snake.pop();
    draw();
  }

  document.getElementById('start').addEventListener('click', reset);
  window.addEventListener('keydown',e=>{
    if(e.key==='ArrowLeft'&&dir!=='right')dir='left';
    if(e.key==='ArrowRight'&&dir!=='left')dir='right';
    if(e.key==='ArrowUp'&&dir!=='down')dir='up';
    if(e.key==='ArrowDown'&&dir!=='up')dir='down';
  });
  document.getElementById('pad').addEventListener('click',e=>{
    const d=e.target.getAttribute('data-dir');
    if(d)dir=d;
  });
})();
</script>
