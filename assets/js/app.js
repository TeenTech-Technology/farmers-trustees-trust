/* Farmers & Trustees Trust - shared demo script. All data stays in this browser (localStorage). */
(function(){
var PAGES=[["index.html","Home"],["about.html","About"],["membership.html","Membership"],["agriculture.html","Agriculture"],["estate.html","Estate Planning"],["talentlink.html","TalentLink"],["enterprise.html","Enterprise"],["events.html","Training & Events"],["resources.html","Resources"],["roadmap.html","Future Phases"],["contact.html","Contact"]];
var WA="260975963056";
var I={
 sprout:'<path d="M7 20h10"/><path d="M12 20v-9"/><path d="M12 11c0-4 3-6 7-6 0 4-3 6-7 6Z"/><path d="M12 13c0-3.3-2.5-5-6-5 0 3.3 2.5 5 6 5Z"/>',
 shield:'<path d="M12 3 4 6v6c0 4.5 3.4 8.2 8 9 4.6-.8 8-4.5 8-9V6Z"/><path d="m9 12 2 2 4-4"/>',
 briefcase:'<rect x="3" y="7" width="18" height="13" rx="1.5"/><path d="M8 7V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"/><path d="M3 13h18"/>',
 trend:'<path d="M3 17 9 11l4 4 8-8"/><path d="M15 7h6v6"/>',
 calendar:'<rect x="3" y="5" width="18" height="16" rx="1.5"/><path d="M3 10h18M8 3v4M16 3v4"/>',
 file:'<path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7Z"/><path d="M14 3v4h4M9 13h6M9 17h6"/>',
 users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.8c2 .7 3.2 2.4 3.5 5.2"/>',
 id:'<rect x="3" y="5" width="18" height="14" rx="1.5"/><circle cx="9" cy="11" r="2.2"/><path d="M5.5 16c.5-1.6 1.8-2.4 3.5-2.4s3 .8 3.5 2.4M15 10h3M15 13h3"/>',
 phone:'<path d="M5 4h3l1.5 4-2 1.3a11 11 0 0 0 5.2 5.2L14 12.5l4 1.5v3a2 2 0 0 1-2 2A13 13 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3 7 9 6 9-6"/>',
 pin:'<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
 arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
 down:'<path d="m6 9 6 6 6-6"/>',
 menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
 x:'<path d="M6 6l12 12M18 6 6 18"/>',
 download:'<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
 chart:'<path d="M4 20V4M4 20h16"/><path d="M8 16v-5M12 16V8M16 16v-3"/>',
 home:'<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/>',
 folder:'<path d="M3 7a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/>',
 inbox:'<path d="M3 13h5l1.5 3h5L16 13h5"/><path d="M5 5h14l2 8v6H3v-6Z"/>',
 check:'<path d="m5 12 4.5 4.5L19 7"/>',
 star:'<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z"/>',
 graduation:'<path d="M2 9l10-5 10 5-10 5Z"/><path d="M6 11v5c2 2 10 2 12 0v-5M22 9v6"/>',
 building:'<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10 21v-3h4v3"/>',
 handshake:'<path d="m11 17 2 2a1.5 1.5 0 0 0 2-2"/><path d="m14 14 2.5 2.5a1.5 1.5 0 0 0 2-2L15 11l-2 1-3-2-6 5"/><path d="M3 13l4-4 4 1 3-2 7 5"/>',
 search:'<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
 truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
 book:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Z"/><path d="M4 19V5M8 7h7"/>',
 heart:'<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 3c0 5.4-7.5 10-7.5 10Z"/>',
 leaf:'<path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15"/><path d="M5 19 13 11"/>',
 clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
 rocket:'<path d="M12 15c4-3 6.5-7 6.5-11.5C14 3.5 10 6 7 10Z"/><path d="M7 10H4l2.5-3.5H10M12 15v3l3.5-2.5V12M8.5 15.5 6 18"/><circle cx="14.5" cy="8.5" r="1.3"/>',
 map:'<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2Z"/><path d="M9 4v14M15 6v14"/>'};
function ic(n,c){return '<svg class="ico'+(c?' '+c:'')+'" viewBox="0 0 24 24" aria-hidden="true">'+(I[n]||'')+'</svg>'}

var here=(location.pathname.split("/").pop()||"index.html");
var waIcon='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z"/></svg>';
function header(){
  var EXTRA={"resources.html":1,"roadmap.html":1};
  function ln(p){return '<a href="'+p[0]+'"'+(p[0]===here?' aria-current="page"':'')+'>'+p[1]+'</a>'}
  var main=PAGES.filter(function(p){return !EXTRA[p[0]]&&p[0]!=="contact.html"}).map(ln).join("");
  var more=PAGES.filter(function(p){return EXTRA[p[0]]}).map(ln).join("");
  var moreOn=EXTRA[here]?' is-current':'';
  return '<a class="skip" href="#main">Skip to content</a><header class="site-header"><div class="wrap"><a class="brand" href="index.html"><img src="assets/img/logo.svg" alt="" width="40" height="40"><span><b>Farmers &amp; Trustees Trust</b><small>Agriculture . Family . Enterprise</small></span></a>'+
  '<nav class="main-nav" id="mainnav" aria-label="Main">'+main+'<div class="more'+moreOn+'"><button type="button" class="more-btn" aria-expanded="false" aria-controls="moremenu">More'+ic('down')+'</button><div class="more-menu" id="moremenu">'+more+'</div></div>'+ln(["contact.html","Contact"])+'</nav><div class="head-actions"><a class="pill line" href="membership.html#dash">Login</a><a class="pill" href="membership.html">Sign Up</a></div><button class="nav-toggle" aria-expanded="false" aria-controls="mainnav">Menu</button></div></header>';
}
function footer(){
  return '<footer class="site-footer"><div class="wrap"><div class="grid g4">'+
  '<div><a class="brand foot-brand" href="index.html"><img src="assets/img/logo.svg" alt="" width="40" height="40"><span><b>Farmers &amp; Trustees Trust</b></span></a><p>Agricultural support, family legacy planning, recruitment and enterprise development, from Lusaka.</p></div>'+
  '<div><h3>Services</h3><ul><li><a href="agriculture.html">Agriculture &amp; Market Access</a></li><li><a href="estate.html">Estate Planning</a></li><li><a href="talentlink.html">TalentLink Recruitment</a></li><li><a href="enterprise.html">Enterprise &amp; Investment</a></li></ul></div>'+
  '<div><h3>Get involved</h3><ul><li><a href="membership.html">Become a Member</a></li><li><a href="events.html">Training &amp; Events</a></li><li><a href="resources.html">Resource Center</a></li><li><a href="roadmap.html">Future Phases</a></li><li><a href="admin.html">Staff login (demo)</a></li></ul></div>'+
  '<div><h3>Contact</h3><ul class="ilist"><li>'+ic('pin')+'Lusaka, Zambia</li><li>'+ic('phone')+'<a href="tel:+260975963056">0975 963 056</a></li><li>'+ic('mail')+'<a href="mailto:mgchipashi03@gmail.com">mgchipashi03@gmail.com</a></li><li>'+ic('inbox')+'<a href="https://wa.me/260975963056" target="_blank" rel="noopener">WhatsApp</a></li></ul></div>'+
  '</div><div class="foot-bottom">&copy; '+new Date().getFullYear()+' Farmers &amp; Trustees Trust. First-version demo website. Website by Teen Tech Technology, Lusaka.<br>Photos: Unsplash contributors; Wikimedia Commons: KambiloMusopelo (CC BY-SA 4.0), 13tainonge (CC BY-SA 4.0), SuSanA Secretariat (CC BY 2.0), IICD (CC BY 2.0), Neil Palmer for CIAT (CC BY-SA 2.0, image mirrored).</div></div></footer>'+
  '<a class="wa-float" href="https://wa.me/'+WA+'" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">'+waIcon+'<span>WhatsApp us</span></a><div class="toast" role="status" aria-live="polite"></div>';
}
document.body.insertAdjacentHTML("afterbegin",header());
document.body.insertAdjacentHTML("beforeend",footer());
document.querySelectorAll("i[data-i]").forEach(function(n){n.outerHTML=ic(n.dataset.i,n.className)});
var PH={"about.html":["hero.jpg","Banana farmers of Chiawa, Zambia. Photo: KambiloMusopelo, CC BY-SA 4.0","Farmers working among banana plants"],
"membership.html":["about.jpg","","A smiling woman"],
"agriculture.html":["field.jpg","Conservation farming. Photo: 13tainonge, CC BY-SA 4.0","A woman farmer standing in a prepared field"],
"estate.html":["family.jpg","","Parents sitting with their young child"],
"talentlink.html":["talent.jpg","","Two young professionals working at a computer"],
"enterprise.html":["enterprise.jpg","","Three women discussing a business plan"],
"events.html":["training.jpg","Farmer group meeting, Kasama. Photo: IICD, CC BY 2.0","A farmer group meeting outdoors"],
"resources.html":["rural-road.jpg","","A farmer walking along a rural road"],
"roadmap.html":["community.jpg","","A woman and children walking through a village"],
"contact.html":["market.jpg","Market scene. Photo: SuSanA Secretariat, CC BY 2.0","Traders selling produce at a market"]};
var phd=document.querySelector(".page-head"),ph=PH[here];
if(phd&&ph){var w=phd.querySelector(".wrap");w.innerHTML='<nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a> <span>/</span> '+document.title.split("|")[0].trim().replace("&","&amp;")+'</nav>'+w.innerHTML;phd.insertAdjacentHTML("afterbegin",'<img class="ph-bg" src="assets/img/'+ph[0]+'" alt="'+ph[2]+'" width="1000" height="667">'+(ph[1]?'<span class="ph-credit">'+ph[1]+'</span>':''));phd.classList.add("has-photo");if(here==="agriculture.html"||here==="membership.html")phd.classList.add("pos-top")}
var tg=document.querySelector(".nav-toggle"),nv=document.getElementById("mainnav");
var mb=document.querySelector(".more-btn"),mw=document.querySelector(".more");
mb.addEventListener("click",function(e){e.stopPropagation();var o=mw.classList.toggle("open");mb.setAttribute("aria-expanded",o)});
document.addEventListener("click",function(e){if(!mw.contains(e.target)){mw.classList.remove("open");mb.setAttribute("aria-expanded","false")}});
document.addEventListener("keydown",function(e){if(e.key==="Escape"){mw.classList.remove("open");mb.setAttribute("aria-expanded","false")}});
tg.addEventListener("click",function(){var o=nv.classList.toggle("open");tg.setAttribute("aria-expanded",o);tg.textContent=o?"Close":"Menu"});

/* storage */
var S={
  all:function(k){try{return JSON.parse(localStorage.getItem("ftt_"+k))||[]}catch(e){return[]}},
  add:function(k,rec){var a=S.all(k);a.push(rec);localStorage.setItem("ftt_"+k,JSON.stringify(a));return rec},
  set:function(k,a){localStorage.setItem("ftt_"+k,JSON.stringify(a))},
  get:function(k){try{return JSON.parse(localStorage.getItem("ftt_"+k))}catch(e){return null}},
  put:function(k,v){localStorage.setItem("ftt_"+k,JSON.stringify(v))}
};
function ref(prefix){return prefix+"-"+Date.now().toString(36).toUpperCase().slice(-6)}
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function toast(msg){var t=document.querySelector(".toast");t.textContent=msg;t.classList.add("on");clearTimeout(t._h);t._h=setTimeout(function(){t.classList.remove("on")},3200)}
function money(n){n=Number(n)||0;return "K"+n.toLocaleString("en-ZM")}

/* validation */
function validate(form){
  var ok=true,first=null;
  form.querySelectorAll("input,select,textarea").forEach(function(el){
    if(el.type==="hidden"||el.disabled)return;
    var f=el.closest(".field");
    var valid=el.checkValidity();
    if(el.dataset.phone&&el.value.trim()){valid=valid&&/^(\+?260|0)?[79]\d{8}$/.test(el.value.replace(/[\s-]/g,""))}
    if(f){f.classList.toggle("bad",!valid)}
    if(!valid){ok=false;if(!first)first=el}
  });
  if(first){first.focus();toast("Please check the highlighted fields.")}
  return ok;
}
function collect(form){
  var o={};
  form.querySelectorAll("input,select,textarea").forEach(function(el){
    if(!el.name||el.closest(".rows"))return;
    if(el.type==="checkbox"){if(el.closest("[data-multi]")){(o[el.name]=o[el.name]||[]);if(el.checked)o[el.name].push(el.value)}else o[el.name]=el.checked;return}
    if(el.type==="radio"){if(el.checked)o[el.name]=el.value;return}
    if(el.type==="file"){o[el.name]=el.files&&el.files[0]?el.files[0].name:"";return}
    o[el.name]=el.value.trim();
  });
  form.querySelectorAll(".rows").forEach(function(box){
    o[box.dataset.name]=[].map.call(box.querySelectorAll(".row"),function(r){var x={};r.querySelectorAll("[data-k]").forEach(function(i){x[i.dataset.k]=i.value.trim()});return x}).filter(function(x){return Object.values(x).some(Boolean)});
  });
  return o;
}
/* repeatable rows */
document.addEventListener("click",function(e){
  var add=e.target.closest("[data-add-row]");
  if(add){var box=document.querySelector(add.dataset.addRow),tpl=box.querySelector(".row");var n=tpl.cloneNode(true);n.querySelectorAll("input,select").forEach(function(i){i.value="";i.required=false});box.appendChild(n);n.querySelector("input,select").focus();return}
  var rm=e.target.closest(".rm");
  if(rm){var bx=rm.closest(".rows");if(bx.querySelectorAll(".row").length>1)rm.closest(".row").remove();else rm.closest(".row").querySelectorAll("input,select").forEach(function(i){i.value=""})}
});
document.addEventListener("input",function(e){var f=e.target.closest&&e.target.closest(".field.bad");if(f&&e.target.checkValidity())f.classList.remove("bad")});

/* generic demo forms: <form data-store="key" data-prefix="REF"> */
var hooks={};
document.addEventListener("submit",function(e){
  var form=e.target;if(!form.dataset.store)return;
  e.preventDefault();
  if(!validate(form))return;
  var rec=collect(form);
  rec.id=ref(form.dataset.prefix||"FTT");rec.created=new Date().toISOString();rec.status="New";
  if(hooks[form.id]&&hooks[form.id].before)hooks[form.id].before(rec,form);
  S.add(form.dataset.store,rec);
  var box=document.querySelector(form.dataset.confirm)||form.nextElementSibling;
  var msg=hooks[form.id]&&hooks[form.id].after?hooks[form.id].after(rec,form):"";
  if(box){box.innerHTML=msg||('<strong>Thank you. Your submission has been received.</strong><br>Reference: <b>'+esc(rec.id)+'</b>. Our team will contact you. (Demo: saved in this browser only.)');box.classList.add("on");box.scrollIntoView({behavior:"smooth",block:"nearest"})}
  form.reset();
  form.querySelectorAll(".rows").forEach(function(b){b.querySelectorAll(".row").forEach(function(r,i){if(i>0)r.remove()})});
  toast("Saved. Reference "+rec.id);
});

/* tabs */
document.querySelectorAll(".tabs").forEach(function(t){
  t.addEventListener("click",function(e){var b=e.target.closest("button[data-tab]");if(!b)return;
    t.querySelectorAll("button").forEach(function(x){x.classList.toggle("on",x===b)});
    var scope=t.parentElement;scope.querySelectorAll(":scope > .panel").forEach(function(p){p.classList.toggle("on",p.id===b.dataset.tab)});
    if(history.replaceState)history.replaceState(null,"","#"+b.dataset.tab);
  });
  var h=location.hash.slice(1);var b=h&&t.querySelector('button[data-tab="'+h+'"]');if(b)b.click();
});

/* certificate (canvas -> PNG) */
function certificate(o){
  var c=document.createElement("canvas");c.width=1400;c.height=990;var x=c.getContext("2d");
  x.fillStyle="#fffdf6";x.fillRect(0,0,1400,990);
  x.strokeStyle="#1f5c3a";x.lineWidth=18;x.strokeRect(30,30,1340,930);
  x.strokeStyle="#d4a62a";x.lineWidth=3;x.strokeRect(62,62,1276,866);
  x.textAlign="center";x.fillStyle="#1f5c3a";
  x.font="bold 30px Georgia,serif";x.fillText("FARMERS & TRUSTEES TRUST",700,170);
  x.fillStyle="#7a5c0b";x.font="20px Arial";x.fillText("Lusaka, Zambia",700,205);
  x.fillStyle="#163f29";x.font="bold 60px Georgia,serif";x.fillText(o.title,700,320);
  x.fillStyle="#333";x.font="24px Arial";x.fillText(o.line1||"This is to certify that",700,400);
  x.fillStyle="#163f29";x.font="italic bold 56px Georgia,serif";x.fillText(o.name,700,485);
  x.strokeStyle="#d4a62a";x.lineWidth=2;x.beginPath();x.moveTo(380,510);x.lineTo(1020,510);x.stroke();
  x.fillStyle="#333";x.font="26px Arial";(o.lines||[]).forEach(function(l,i){x.fillText(l,700,570+i*42)});
  x.font="20px Arial";x.fillStyle="#555";
  x.fillText("Issued: "+o.date,380,820);x.fillText("Reference: "+o.ref,1020,820);
  x.beginPath();x.moveTo(250,780);x.lineTo(510,780);x.moveTo(890,780);x.lineTo(1150,780);x.strokeStyle="#999";x.lineWidth=1;x.stroke();
  x.fillStyle="#a33";x.font="16px Arial";x.fillText("Demo certificate generated in the browser. Not valid until issued by the Trust.",700,900);
  // emblem
  x.fillStyle="#1f5c3a";x.beginPath();x.moveTo(700,60);x.lineTo(745,76);x.lineTo(745,110);x.quadraticCurveTo(745,135,700,146);x.quadraticCurveTo(655,135,655,110);x.lineTo(655,76);x.closePath();x.fill();
  x.fillStyle="#d4a62a";x.fillRect(698,82,4,52);
  return c;
}
function showCert(c,target,fname){
  var url=c.toDataURL("image/png");
  target.innerHTML='<img src="'+url+'" alt="Certificate preview" style="border:1px solid #ddd;border-radius:6px;max-width:700px;width:100%"><div class="btns no-print"><a class="btn" download="'+fname+'" href="'+url+'">Download PNG</a><button class="btn line" type="button" data-print-cert>Print certificate</button></div>';
  target.querySelector("[data-print-cert]").onclick=function(){var w=window.open("","_blank");if(!w){toast("Allow pop-ups to print, or use Download.");return}w.document.write('<title>Certificate</title><style>@page{size:landscape;margin:0}body{margin:0}img{width:100%}</style><img src="'+url+'" onload="window.print()">');w.document.close()};
}

/* sample seed data, clearly labelled */
var SEED={
  members:[{id:"FTT-2026-000101",category:"Farmer Member",fullName:"Sample Member One",phone:"0970000001",email:"sample1@example.com",province:"Lusaka",district:"Chongwe",created:"2026-09-03T09:00:00Z",status:"Active",seed:true},
           {id:"FTT-2026-000102",category:"Student Member",fullName:"Sample Member Two",phone:"0970000002",email:"sample2@example.com",province:"Central",district:"Kabwe",created:"2026-09-18T09:00:00Z",status:"Pending",seed:true}],
  produce:[{id:"SAMPLE-P1",farmer:"Example farmer",crop:"White maize",qty:"40 x 50kg bags",price:"K300 per bag",location:"Chongwe",seed:true},
           {id:"SAMPLE-P2",farmer:"Example farmer",crop:"Soya beans",qty:"2 tonnes",price:"K9,500 per tonne",location:"Mumbwa",seed:true},
           {id:"SAMPLE-P3",farmer:"Example farmer",crop:"Tomatoes",qty:"60 crates",price:"K150 per crate",location:"Kafue",seed:true}],
  jobs:[{id:"J1",title:"Farm Records Assistant",org:"Example agribusiness, Lusaka",type:"Full-Time",loc:"Lusaka"},
        {id:"J2",title:"Agronomy Intern",org:"Example farm, Chisamba",type:"Internship",loc:"Chisamba"},
        {id:"J3",title:"Weekend Market Sales Helper",org:"Example trader, Soweto Market",type:"Part-Time",loc:"Lusaka"},
        {id:"J4",title:"Community Farming Volunteer",org:"Example community group",type:"Volunteer",loc:"Chongwe"},
        {id:"J5",title:"Accounts Attachment (college students)",org:"Example cooperative office",type:"Attachment",loc:"Lusaka"}],
  investors:[{id:"SAMPLE-I1",name:"Example Angel Investor A",sectors:"Agriculture",stage:"Early revenue",min:"20000",max:"150000",seed:true},
             {id:"SAMPLE-I2",name:"Example Impact Fund B",sectors:"Agro-processing",stage:"Growth",min:"100000",max:"1000000",seed:true},
             {id:"SAMPLE-I3",name:"Example Business Mentor C",sectors:"Technology",stage:"Idea",min:"5000",max:"50000",seed:true}],
  startups:[{id:"SAMPLE-S1",bizName:"Example Poultry Startup",sector:"Agriculture",stage:"Early revenue",amount:"60000",district:"Lusaka",seed:true},
            {id:"SAMPLE-S2",bizName:"Example Juice Processing",sector:"Agro-processing",stage:"Growth",amount:"250000",district:"Kabwe",seed:true}],
  events:[{id:"E1",title:"Small-scale Farmer Record Keeping Workshop",type:"Agricultural training",date:"2026-11-14",venue:"Lusaka (venue to be confirmed)"},
          {id:"E2",title:"Estate Planning Clinic for Farming Families",type:"Estate planning clinic",date:"2026-11-28",venue:"Lusaka (venue to be confirmed)"},
          {id:"E3",title:"Starting and Registering a Small Business",type:"Seminar",date:"2026-12-05",venue:"Online and Lusaka"},
          {id:"E4",title:"CV and Interview Workshop for Students",type:"Workshop",date:"2026-12-12",venue:"Lusaka (venue to be confirmed)"}]
};
function withSeed(k){return (SEED[k]||[]).concat(S.all(k))}

window.FTT={ic:ic,S:S,esc:esc,toast:toast,money:money,ref:ref,hooks:hooks,validate:validate,collect:collect,certificate:certificate,showCert:showCert,SEED:SEED,withSeed:withSeed,WA:WA};
})();
