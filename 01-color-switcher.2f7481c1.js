const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};let e=null;t.startBtn.addEventListener("click",(()=>{t.startBtn.disabled=!0,t.stopBtn.disabled=!1,e=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.stopBtn.addEventListener("click",(()=>{t.startBtn.disabled=!1,t.stopBtn.disabled=!0,clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.2f7481c1.js.map
