let linkedin = document.querySelector(".linkedin");
let facebook = document.querySelector(".facebook");
let github = document.querySelector(".github");
let discord = document.querySelector(".discord");
let header = document.querySelector("header");
let scrollEle = document.querySelector(".Top");
let links = document.querySelectorAll("a");
linkedin.onclick = function () {
    open('https://www.linkedin.com/in/aymen-braikia-81b974247/','_blank');
};
facebook.onclick = function () {
    open('https://www.facebook.com/aymen.braikia.33?mibextid=ZbWKwL',"_blank");
};
github.onclick = function () {
    open('https://github.com/AymenBraikia','_blank');
};
discord.onclick = function () {
    window.alert("My Discord : Aymen#7972");
};
document.addEventListener("scroll",() => {
    if (window.scrollY >= 70) {
        header.classList.add("scrolled");
        scrollEle.style.cssText = "cursor: pointer; opacity: 1;";
        links.forEach((ele) => {
            if (ele.classList.contains("active")) {
                ele.classList.add("scrollActive");
            } else {
                ele.classList.remove("scrollActive");
            }
        });
    } else {
        header.classList.remove("scrolled");
        scrollEle.style.cssText = "cursor: default; opacity: 0;";
        links.forEach((ele) => {
            ele.classList.remove("scrollActive");
        });
    }
});

links.forEach((link) => {
    link.onclick = function () {
        links.forEach((e) => {
            e.classList.remove("active");
        });
        link.classList.add("active");
    };
});
scrollEle.onclick = function () {
    document.documentElement.scrollTop = 0;
};
let ln = document.querySelector(".ln");
let cross = document.querySelector(".cross");
let burger = document.querySelector(".burger");
let sideBar = document.querySelector("header");
burger.onclick = function () {
    sideBar.classList.toggle("activated");
    if (ln.classList.contains("act")) {
        cross.style.display = "block";
        ln.style.display = "none";
        setTimeout(() => {
            cross.classList.add("act");
            ln.classList.remove("act");
            burger.classList.add("work");
        },1);
    } else {
        cross.style.display = "none";
        ln.style.display = "block";
        setTimeout(() => {
            ln.classList.add("act");
            cross.classList.remove("act");
            burger.classList.remove("work");
        },1);
    }
};
if (screen.width <= 450) {
    let img = document.querySelector(".imageOne");
    img.style.width = screen.width * 90 / 100 + "px";
    img.style.height = screen.width * 90 / 100 + "px";
}
let githubView = document.querySelector(".viewGithub");
githubView.onclick = () => {
    open("https://github.com/AymenBraikia/prosite-source-code","_blank");
};