document.querySelector('.menu').addEventListener('click',()=>{
  const nav=document.querySelector('nav');
  nav.classList.toggle('open');
});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{
  document.querySelector('nav').classList.remove('open');
}));
