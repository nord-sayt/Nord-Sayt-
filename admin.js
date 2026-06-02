function addAnn(){
let arr = JSON.parse(localStorage.getItem("ann")||"[]");
arr.push(annText.value);
localStorage.setItem("ann", JSON.stringify(arr));
alert("ثبت شد");
}

function saveSettings(){
localStorage.setItem("ip", ipInput.value);
localStorage.setItem("bale", baleInput.value);
alert("ذخیره شد");
}

function saveTeam(){
let team = [t1.value,t2.value,t3.value,t4.value,t5.value];
localStorage.setItem("team", JSON.stringify(team));
alert("تیم ذخیره شد");
}
