// ==UserScript==
// @name         Youtube Description Copy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A fresh intro
// @author       Me
// @match        https://www.youtube.com/watch?v=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function copy(ele){
        try{
            let temp = document.createElement('textarea');
            document.body.appendChild(temp);
            temp.value = ele.textContent;
            temp.insertAdjacentHTML('afterbegin', temp.value);
            //console.log(temp.value);
            temp.select();
            document.execCommand('copy');
            temp.remove();
            console.log("Copiado Satisfactoriamente")
        }catch(error){
            console.log(error);
        }

    }

    function addCopyBtn() {
        try{
            let btn = document.createElement("Button");
            btn.innerHTML= "Copy";
            btn.style.color = "white";
            btn.style.backgroundColor = "black";
            btn.style.borderRadius = "5px";
            btn.style.borderStyle= "none";
            btn.style.outline="2px";
            btn.style.cursor ="pointer";
            btn.id = "copyBtn";
            btn.onclick = () => {
                document.querySelector("ytd-text-inline-expander").setAttribute("is-expanded","");
                let description = document.querySelector("span.yt-core-attributed-string--white-space-pre-wrap");
                setTimeout(copy(description),3000);
            }
            document.querySelector("#owner").appendChild(btn);
            console.log("BotonCreado Correctamente");
        }catch(error){
            console.log(error)
        }
    }
    function callpage(){if(document.getElementById("copyBtn") == null)addCopyBtn();}
    document.addEventListener('DOMContentLoaded', ()=>{setInterval(callpage, 100);setTimeout(addCopyBtn, 5000);});
})();
