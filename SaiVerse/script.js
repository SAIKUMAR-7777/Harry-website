
const qs = (s, root=document) => root.querySelector(s);
const qsa = (s, root=document) => [...root.querySelectorAll(s)];

document.addEventListener("DOMContentLoaded", () => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) document.body.classList.add("motion-on");

  // Scroll-spread wordmarks reverse naturally with scroll position.
  const spreads = qsa(".spread");
  if (!reduce) {
    const updateSpread = () => {
      spreads.forEach(spread => {
        const rect = spread.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        qsa("span", spread).forEach((letter, i, arr) => {
          const center = (arr.length - 1) / 2;
          const distance = Math.abs(i-center);
          const direction = i < center ? -1 : 1;
          const move = progress * distance * 8;
          letter.style.transform = `translate(${direction * move}px, ${progress * 12}px)`;
        });
      });
    };
    addEventListener("scroll", updateSpread, {passive:true});
    updateSpread();
  }

  const drawing = qs("#drawing");
  if (drawing) initDemo(drawing);
  if (typeof books !== "undefined") initBooks();
  initForms();
});

function initDemo(svg) {
  const path = qs(".draw-path", svg);
  const facts = {
    classic: {width:3, shape:"M90 300 C160 180 250 180 320 300 S480 420 570 250", material:"Ink line", scale:"1 : 1", action:"Single sweep"},
    bold: {width:6, shape:"M70 300 C170 80 260 90 350 300 C420 430 510 420 600 170", material:"Heavy ink", scale:"1 : 1", action:"Bold sweep"},
    fine: {width:1.6, shape:"M90 330 C170 270 220 110 330 200 C430 290 460 120 590 210", material:"Fine ink", scale:"1 : 1", action:"Fine sweep"}
  };
  const buttons = qsa(".variant");
  function draw(key, first=false) {
    const d=facts[key];
    path.setAttribute("d",d.shape);
    path.setAttribute("stroke-width",d.width);
    const len=path.getTotalLength();
    path.style.strokeDasharray=len;
    path.style.strokeDashoffset=len;
    requestAnimationFrame(()=> {
      path.style.transition="stroke-dashoffset 2s cubic-bezier(.2,.75,.2,1)";
      path.style.strokeDashoffset="0";
    });
    qs("[data-fact=material]").textContent=d.material;
    qs("[data-fact=scale]").textContent=d.scale;
    qs("[data-fact=action]").textContent=d.action;
    buttons.forEach(b=>b.setAttribute("aria-pressed", b.dataset.variant===key ? "true":"false"));
  }
  buttons.forEach(b=>b.addEventListener("click",()=>draw(b.dataset.variant)));
  const observer=new IntersectionObserver(entries=>{
    if(entries.some(e=>e.isIntersecting)){draw("classic",true);observer.disconnect();}
  },{threshold:.35});
  observer.observe(svg);
}

function initBooks(){
  const grid = qs("#allBooks");
  const search = qs("#bookSearch");
  const select = qs("#genreFilter");
  const count = qs("#bookCount");

  function card(b){
    const params=encodeURIComponent(`${b.title} ${b.author}`);
    return `<article class="book-card">
      <img class="cover" src="${b.cover}" alt="${escapeHtml(b.title)} cover" loading="lazy" onerror="this.src='https://placehold.co/400x600/E5DED0/141C2B?text=Book+Cover'">
      <h4>${escapeHtml(b.title)}</h4>
      <div class="author">${escapeHtml(b.author)}</div>
      <div class="tag">${escapeHtml(b.genre)}</div>
      <a class="read-btn" href="reader.html?book=${params}">Open reader →</a>
    </article>`;
  }

  function render(){
    const term=(search?.value||"").toLowerCase().trim();
    const genre=select?.value||"All";
    const filtered=books.filter(b=>(genre==="All"||b.genre===genre)&&(`${b.title} ${b.author}`.toLowerCase().includes(term)));
    if(count) count.textContent=`${filtered.length} books`;
    if(grid) grid.innerHTML=filtered.map(card).join("");
  }
  search?.addEventListener("input",render);
  select?.addEventListener("change",render);
  render();

  qsa("[data-genre-card]").forEach(el=>el.addEventListener("click",()=>{
    const g=el.dataset.genreCard;
    if(select){select.value=g;render();qs("#library").scrollIntoView({behavior:"smooth"});}
  }));
}

function escapeHtml(s){
  return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}

function initForms(){
  qsa("form[data-demo-form]").forEach(form=>form.addEventListener("submit",e=>{
    e.preventDefault();
    const toast=qs("#toast");
    if(toast){toast.textContent="Message received — thank you for contacting SaiVerse.";toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),3500);}
    form.reset();
  }));
}
