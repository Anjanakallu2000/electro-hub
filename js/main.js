const header=document.getElementById("siteHeader");
window.addEventListener("scroll",()=>header.classList.toggle("scrolled",window.scrollY>80));

const menu=document.querySelector(".menu-toggle"), nav=document.querySelector(".nav");
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const filters=document.querySelectorAll(".filter"), products=document.querySelectorAll(".product-card");
filters.forEach(btn=>btn.addEventListener("click",()=>{
  filters.forEach(b=>b.classList.remove("active"));btn.classList.add("active");
  const value=btn.dataset.filter;
  products.forEach(p=>{p.style.display=value==="all"||p.dataset.category===value?"block":"none"});
}));

const modal=document.getElementById("productModal"), modalProduct=document.getElementById("modalProduct");
document.querySelectorAll(".product-link").forEach(btn=>btn.addEventListener("click",()=>{
  modalProduct.textContent=btn.dataset.product;
  modal.classList.add("open");modal.setAttribute("aria-hidden","false");
}));
document.querySelector(".modal-close").addEventListener("click",()=>{modal.classList.remove("open");modal.setAttribute("aria-hidden","true")});
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("open")});

document.getElementById("quoteForm").addEventListener("submit",e=>{
  e.preventDefault();
  document.getElementById("formMessage").textContent="Demo form submitted. Connect this form to your backend, email service or WhatsApp API.";
  e.target.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{
  const target=document.querySelector(a.getAttribute("href"));
  if(target){e.preventDefault();target.scrollIntoView({behavior:"smooth"})}
}));