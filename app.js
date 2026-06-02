let owner = "mohammadamin";

function show(id){
document.querySelectorAll("section").forEach(s=>s.classList.add("hidden"));
document.getElementById(id).classList.remove("hidden");
load();
}

function register(){
localStorage.setItem("user", user.value);
localStorage.setItem("pass", pass.value);
alert("ثبت شد");
}

function login(){
if(localStorage.getItem("user")==user.value &&
localStorage.getItem("pass")==pass.value){
alert("وارد شدی");
} else alert("اشتباه");
}

function load(){
announcements.innerHTML =
JSON.parse(localStorage.getItem("ann")||"[]")
.map(a=>`📢 ${a}`).join("<br>");

ip.innerText = localStorage.getItem("ip")||"---";
bale.innerText = localStorage.getItem("bale")||"---";

me.innerText = localStorage.getItem("user") || "مهمان";
}
