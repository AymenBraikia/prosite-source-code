let height = screen.height * 15 / 100 + "px";
let height2 = screen.height * 65 / 100 + "px";
let height3 = screen.height * 40 / 100 + "px";
let height4 = screen.height * 40 / 100 + "px";
let height5 = screen.height * 70 / 100 + "px";
let height6 = screen.height * 30 / 100 + "px";
document.querySelector(".header").style.height = height;
document.querySelector(".partOne").style.height = height2;
document.querySelector(".partTwo").style.height = height3;
document.querySelector(".partThree").style.height = height4;
document.querySelector(".partFour").style.height = height5;
document.querySelector(".partFive").style.height = height6;


let sections = document.querySelectorAll(".section");

sections.forEach((sec) => {
    sec.onclick = function () {
        sections.forEach((ele) => {
            ele.classList.remove("active");
        });
        sec.classList.add("active");
    };
});
let likesNumber = document.querySelector(".likesNumber");
let heartFill = document.getElementById("heart");
heartFill.onclick = function () {
    heartFill.classList.toggle("liked");
    if (heartFill.classList.contains("liked")) {
        likesNumber.innerHTML++;
    } else {
        likesNumber.innerHTML--;
    }
};

let light = document.querySelector(".sunSvg");
let dark = document.querySelector(".moonSvg");
let lightac = document.querySelector(".Light");
let darkac = document.querySelector(".Dark");
let scrollToTopIcon = document.querySelector(".top");

darkac.onclick = function () {
    localStorage.setItem("Mode","Light");
};
lightac.onclick = function () {
    localStorage.setItem("Mode","Dark");
};
light.onclick = function () {
    lightac.classList.toggle("Active");
    darkac.classList.toggle("Active");

    if (lightac.classList.contains("Active")) {
        // in light mode
        root.style.setProperty("--backColor","white");
        root.style.setProperty("--color","black");
        root.style.setProperty("--gettingStarted","white");
        root.style.setProperty("--sugColor","white");
        root.style.setProperty("--svgfill","black");
        root.style.setProperty("--svgBorders","black");
        root.style.setProperty("--border","3px solid black");
        root.style.setProperty("--HeaderColor","white");
        scrollToTopIcon.setAttribute("stroke","black");
    } else {
        // in dark mode
        root.style.setProperty("--backColor","#1f1d2b");
        root.style.setProperty("--color","white");
        root.style.setProperty("--gettingStarted","rgb(60 58 70)");
        root.style.setProperty("--sugColor","#21212129");
        root.style.setProperty("--svgfill","white");
        root.style.setProperty("--svgBorders","white");
        root.style.setProperty("--border","3px solid white");
        root.style.setProperty("--HeaderColor","#151320");
        scrollToTopIcon.setAttribute("stroke","white");
    }
};
dark.onclick = function () {
    lightac.classList.toggle("Active");
    darkac.classList.toggle("Active");
    if (lightac.classList.contains("Active")) {
        // light mode
        root.style.setProperty("--backColor","white");
        root.style.setProperty("--color","black");
        root.style.setProperty("--gettingStarted","white");
        root.style.setProperty("--sugColor","white");
        root.style.setProperty("--svgfill","black");
        root.style.setProperty("--svgBorders","black");
        root.style.setProperty("--border","3px solid black");
        root.style.setProperty("--HeaderColor","white");
        scrollToTopIcon.setAttribute("stroke","black");
    } else {
        // dark mode
        root.style.setProperty("--backColor","#1f1d2b");
        root.style.setProperty("--color","white");
        root.style.setProperty("--gettingStarted","rgb(60 58 70)");
        root.style.setProperty("--sugColor","#21212129");
        root.style.setProperty("--svgfill","white");
        root.style.setProperty("--svgBorders","white");
        root.style.setProperty("--border","3px solid white");
        root.style.setProperty("--HeaderColor","#151320");
        scrollToTopIcon.setAttribute("stroke","white");
    }
};

let time = document.querySelectorAll(".timeVal");
let Hours;
let Mins;
let myArr = [];
let totalHours = [];
let totalMins = [];
let StopNumber = 0;
time.forEach((ele) => {
    myArr.push(ele);
    Mins = Math.random() * 1000 / 60;
    Mins = Math.round(Mins);
    Hours = Math.random() * 10;
    Hours = Math.round(Hours);
    totalHours.push(Hours);
    totalMins.push(Mins + 1);
    if (Mins < 10) {
        Mins = `0${Mins}`;
    }
    ele.innerHTML = `${Hours}h ${Mins}min`;
});
let countDown = setInterval(() => {

    for (let i = 0;i < myArr.length;i++) {
        totalMins[i] = totalMins[i] - 1;
        if (totalHours[i] <= 0) {
            totalHours[i] = 0;
            if (totalMins[i] <= 0) {
                totalMins[i] = "00";
            }
        }
        if (totalMins[i] === 0) {
            totalMins[i] = 60;
            totalHours[i] = totalHours[i] - 1;
        }
        if (totalMins[i] < 10 && totalMins[i] !== "00") {
            totalMins[i] = `0${totalMins[i]}`;
        }
        myArr[i].innerHTML = `${totalHours[i]}h ${totalMins[i]}min`;

        if (totalMins[i] === "00" && totalHours[i] === 0) {
            if (myArr[i] !== "skip") {
                myArr[i] = "skip";
                StopNumber = StopNumber + 1;
            }
        }
    }
    if (StopNumber === 12) {
        clearInterval(countDown);
        console.log(StopNumber);
        console.log("gg");
    }
},60000);

document.onscroll = () => {
    if (window.scrollY >= 200) {
        document.querySelector(".Top").style.display = "flex";
        setTimeout(() => {
            document.querySelector(".Top").classList.add("acti");
        },1);
        document.querySelector(".Top").onclick = () => {
            window.scrollTo(0,0);
        };
    } if (window.scrollY <= 150) {
        document.querySelector(".Top").classList.remove("acti");
        setTimeout(() => {
            document.querySelector(".Top").style.display = "none";
        },300);
    }
};

let root = document.querySelector(":root");

if (lightac.classList.contains("Active")) {
    root.style.setProperty("--backColor","white");
    root.style.setProperty("--color","black");
    root.style.setProperty("--gettingStarted","white");
    root.style.setProperty("--sugColor","white");
    root.style.setProperty("--svgfill","black");
    root.style.setProperty("--svgBorders","black");
    root.style.setProperty("--border","3px solid black");
    root.style.setProperty("--sideBarColor","#010101bd");
} else {
    root.style.setProperty("--backColor","#1f1d2b");
    root.style.setProperty("--color","white");
    root.style.setProperty("--gettingStarted","rgb(60 58 70)");
    root.style.setProperty("--sugColor","#21212129");
    root.style.setProperty("--svgfill","white");
    root.style.setProperty("--svgBorders","white");
    root.style.setProperty("--border","3px solid white");
    root.style.setProperty("--sideBarColor","#efefef");
}
if (localStorage.getItem("Mode") === "Light") {
    lightac.classList.add("Active");
    darkac.classList.remove("Active");
    root.style.setProperty("--backColor","white");
    root.style.setProperty("--color","black");
    root.style.setProperty("--gettingStarted","white");
    root.style.setProperty("--sugColor","white");
    root.style.setProperty("--svgfill","black");
    root.style.setProperty("--svgBorders","black");
    root.style.setProperty("--border","3px solid black");
    root.style.setProperty("--HeaderColor","white");
} if (localStorage.getItem("Mode") === "Dark") {
    darkac.classList.add("Active");
    lightac.classList.remove("Active");
    root.style.setProperty("--backColor","#1f1d2b");
    root.style.setProperty("--color","white");
    root.style.setProperty("--gettingStarted","rgb(60 58 70)");
    root.style.setProperty("--sugColor","#21212129");
    root.style.setProperty("--svgfill","white");
    root.style.setProperty("--svgBorders","white");
    root.style.setProperty("--border","3px solid white");
    root.style.setProperty("--HeaderColor","#151320");
}
let themesButton = document.querySelector(".Theme1");
let themes = document.querySelectorAll(".Theme");
themesButton.onclick = function () {
    themes.forEach((ele) => {
        ele.classList.toggle("dsp");
        themesButton.classList.toggle("dsp");
    });
};
if (localStorage.getItem("Theme")) {
    root.style.setProperty("--theme",`linear-gradient(to right, ${localStorage.getItem("Theme")}, ${localStorage.getItem("Theme2")})`);
    root.style.setProperty("--Scrltheme",`linear-gradient(to bottom, ${localStorage.getItem("Theme")}, ${localStorage.getItem("Theme2")})`);
}
themes.forEach((ele) => {
    ele.onclick = function () {
        BgColor = ele.getAttribute("bgClrs").split(" ");
        localStorage.setItem("Theme",BgColor[0]);
        localStorage.setItem("Theme2",BgColor[1]);
        root.style.setProperty("--theme",`linear-gradient(to right, ${BgColor[0]}, ${BgColor[1]})`);
        root.style.setProperty("--Scrltheme",`linear-gradient(to bottom, ${BgColor[0]}, ${BgColor[1]})`);
        for (let i = 0;i < themes.length;i++) {
            themes[i].classList.remove("act");
        }
        ele.classList.add("act");
    };
});
let contact = document.querySelectorAll(".mar");

contact.forEach((ele) => {
    ele.onclick = function () {
        if (ele.textContent === "Facebook") {
            window.alert("My Facebook is : Aymen Braikia");
        }
        if (ele.textContent === "Instagram") {
            window.alert("My Instagram is : aymenbraikia1");
        }
        if (ele.textContent === "Discord") {
            window.open("https://discord.gg/3tMxPk4huK");
        }
        if (ele.textContent === "Email") {
            window.alert("My Email is : aymenbraikia1@gmail.com");
        }
    };
});
let battery;
let charging;
navigator.getBattery().then((data) => {
    battery = data.level * 100,charging = data.charging;
    if (battery < 30 && charging === false) {
        window.alert(`It Seems Like Your Device Is Running Out Of Battery (${battery}%)`);
    }
});
let hte = document.querySelector("html");
let mainCnt = document.querySelector(".mainContent");
if (screen.width <= 450) {
    document.querySelector("html").width = screen.width + "px";
    console.log(document.querySelector("html").clientWidth);
    mainCnt.style.width = document.querySelector("html").clientWidth + "px";
    document.querySelector(".Top").style.display = "none"

}
let phoneSideBar = document.querySelector(".Plist");
let cross = document.querySelector(".cross");
let ln = document.querySelector(".ln");
phoneSideBar.onclick = () => {
    document.querySelector(".header").classList.toggle("SBA");
    phoneSideBar.classList.toggle("activee");
    if (phoneSideBar.classList.contains("activee")) {
        cross.style.display = "block";
        ln.style.display = "none";
        setTimeout(() => {
            cross.classList.add("work");
            ln.classList.add("work");
        },1);
    } else {
        cross.style.display = "none";
        ln.style.display = "block";
        setTimeout(() => {
            cross.classList.remove("work");
            ln.classList.remove("work");
        },1);
    }
};