function drawPie(canvas,values,labels){
  const ctx=canvas.getContext('2d'); const W=canvas.width,H=canvas.height; ctx.clearRect(0,0,W,H);
  const total=values.reduce((a,b)=>a+b,0); if(!total){ctx.fillStyle='#93c5aa'; ctx.fillText('Sem dados',10,18); return;}
  const cx=W/2-30, cy=H/2, r=Math.min(W,H)/2-20; let a=-Math.PI/2; const cols=['#16a34a','#22c55e','#facc15','#ef4444'];
  for(let i=0;i<values.length;i++){const ang=values[i]/total*Math.PI*2; ctx.beginPath(); ctx.moveTo(cx,cy); ctx.arc(cx,cy,r,a,a+ang); ctx.closePath(); ctx.fillStyle=cols[i%cols.length]; ctx.fill(); a+=ang;}
  ctx.font='12px system-ui'; let y=30; for(let i=0;i<labels.length;i++){ctx.fillStyle=cols[i%cols.length]; ctx.fillRect(W-110,y,14,14); ctx.fillStyle='#93c5aa'; ctx.fillText(labels[i],W-90,y+11); y+=22;}
}