const root=document.documentElement;
// Theme membership is discovered from the same stylesheet that implements it.
const themes=new Set();
for(const sheet of document.styleSheets) {
  try { for(const rule of sheet.cssRules) { const match=rule.selectorText?.match(/^\[data-theme="([a-z0-9./-]+)"\]$/); if(match) themes.add(match[1]); } } catch {}
}
function setTheme(theme) { if(themes.has(theme)) { root.dataset.theme=theme; const canvas=getComputedStyle(root).getPropertyValue('--canvas').trim(); const rgb=canvas.match(/^#([0-9a-f]{6})$/i); const brightness=rgb ? [.2126,.7152,.0722].reduce((sum,w,i)=>sum+w*parseInt(rgb[1].slice(i*2,i*2+2),16),0) : 255; root.style.colorScheme=brightness<128?'dark':'light'; } }
setTheme(new URLSearchParams(location.search).get('theme'));
window.addEventListener('message',event=> { if(event.origin===location.origin && event.source===parent && event.data?.type==='set-theme') setTheme(event.data.theme); });
const dialog=document.querySelector('#demo-dialog'); let opener, toastTimer;
function toast(message) { const output=document.querySelector('#demo-toast');output.textContent=message;output.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>output.classList.remove('visible'),5000); }
function openDialog(button,plan) { opener=button;document.querySelector('#dialog-description').textContent=plan?`${plan} selected. Create a sample project; no purchase or account is created.`:'Give your project a name. This is a local demonstration.';dialog.showModal(); }
document.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>openDialog(b));
document.querySelectorAll('[data-plan]').forEach(b=>b.onclick=()=>openDialog(b,b.dataset.plan));
document.querySelector('.dialog-close').onclick=()=>dialog.close();
document.querySelector('#cancel-dialog').onclick=()=>dialog.close();
dialog.addEventListener('close',()=>opener?.focus());
dialog.addEventListener('click',event=>{ const r=dialog.getBoundingClientRect(); if(event.target===dialog && (event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)) dialog.close(); });
document.querySelector('#project-form').onsubmit=event=>{event.preventDefault();const name=document.querySelector('#project-name').value.trim();if(!name){document.querySelector('#project-name').setCustomValidity('Enter a project name.');document.querySelector('#project-name').reportValidity();return;}toast(`“${name}” created in this demo.`);dialog.close();event.target.reset();};
document.querySelector('#project-name').oninput=event=>event.target.setCustomValidity('');
document.querySelector('#interest-form').onsubmit=event=>{event.preventDefault();document.querySelector('#form-feedback').textContent='You’re all set. Sample submitted locally; nothing was sent.';};
const tabs=[...document.querySelectorAll('.demo-tabs [role=tab]')];
function activate(tab) { tabs.forEach(t=>{const selected=t===tab;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!selected;}); }
tabs.forEach(tab=>tab.onclick=()=>activate(tab));
document.querySelector('.demo-tabs').addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();const index=tabs.indexOf(document.activeElement);const next=event.key==='Home'?0:event.key==='End'?tabs.length-1:(index+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;tabs[next].focus();activate(tabs[next]);});
const menu=document.querySelector('.demo-menu');
document.addEventListener('click',event=>{if(!menu.contains(event.target))menu.open=false;});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.open){menu.open=false;menu.querySelector('summary').focus();}});
menu.querySelectorAll('a').forEach(a=>a.onclick=()=>menu.open=false);
