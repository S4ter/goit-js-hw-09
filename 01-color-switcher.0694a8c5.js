const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");let r=null;t.addEventListener("click",(()=>{r=setInterval((()=>{d.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.setAttribute("disabled","disabled")})),e.addEventListener("click",(()=>{clearInterval(r),t.removeAttribute("disabled","disabled")}));
//# sourceMappingURL=01-color-switcher.0694a8c5.js.map
