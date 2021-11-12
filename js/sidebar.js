'use strict'
const sidebar = {
    menu: undefined,
    content: undefined,
    close: () => {
        sidebar.menu.style.left = "-230px";
        sidebar.content.style.marginLeft = 0
    },
    open: ()=>{
        sidebar.menu.style.left = "0";
        sidebar.content.style.marginLeft = "230px"
    },
    init: ()=>{
        sidebar.menu = document.getElementById("sidenav");
        sidebar.content = document.getElementById("main");
        document.getElementById("sidenav-close").addEventListener("click", sidebar.close);
        document.getElementById("sidenav-open").addEventListener("click", sidebar.open);
    }
};

sidebar.init();