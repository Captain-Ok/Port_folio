document.addEventListener("DOMContentLoaded", () => {
    // Toggle state for each button
    const toggles = {
        top_left: true,
        top_right: true,
        bottom_left: true,
        bottom_right: true
    };

    // Helper function to handle button clicks
    function handleClick(id, className, styleProp, values) {
        document.getElementById(id).addEventListener("click", () => {
            const elem = document.querySelector(className);
            elem.style[styleProp] = toggles[id] ? values[0] : values[1];
            toggles[id] = !toggles[id];
        });
    }

    // Set up each button with its corresponding properties
    handleClick("top_left", ".drop_downL", "transform", ["translateX(130px)", "translateX(-300px)"]);
    handleClick("top_right", ".drop_downR", "transform", ["translateY(0px)", "translateY(-150px)"]);
    handleClick("bottom_left", ".drop_downBL", "transform", ["translateX(0px)", "translateX(-3600px)"]);
    handleClick("bottom_right", ".drop_downBR", "display", ["block", "none"]);

    // Projects open button
    document.getElementById("Btn").addEventListener("click", () => {
        window.open("project.html", "_blank");
    });

    // Resume button
    document.getElementById("view").addEventListener("click", () => {
        window.open("my_resume.pdf", "_blank");
    });


    // Contacts

    document.getElementById("insta").addEventListener("click", () => {
        window.open("https://www.instagram.com/captain_bhayiya/", "_blank");
    })
    document.getElementById("whatsapp").addEventListener("click", () => {
        window.open("https://wa.me/+918882601382","_blank");
    })
    document.getElementById("gmail").addEventListener("click", () => {
        window.open("https://mail.google.com/mail/u/0/#inbox?compose=new", "_blank");
    })
    document.getElementById("linkedin").addEventListener("click", () => {
        window.open("", "_blank");
    })

});


// Project.html 

let toggle_1 = true;
let toggle_2 = true;
let toggle_3 = true;
let toggle_4 = true;
let toggle_5 = true;

const Imgbutton = document.getElementById("img_5");
Imgbutton.addEventListener("click", () => {
    const currelem = document.getElementById("5_img");
    const text_1 = document.getElementById("first");
    const text_2 = document.getElementById("second");
    if (toggle_1) {
        currelem.style.transform = "scale(1)";
        Imgbutton.style.transform = "translateX(-200px)";
        text_1.style.transform = "translateY(-40vh)";
        text_2.style.transform = "translateY(-40vh)";
        Imgbutton.style.transition = "1s";
        Imgbutton_1.style.pointerEvents = "all";
    } else {
        currelem.style.transform = "scale(0)";
        Imgbutton.style.transform = "translateX(0px)";
        text_1.style.transform = "transitionY(0px)"
        text_1.style.transform = "translateY(0vh)";
        text_2.style.transform = "translateY(0vh)";
        Imgbutton.style.transition = "1s";
        Imgbutton_1.style.pointerEvents = "none";
    }
    toggle_1 = !toggle_1;
});

const Imgbutton_1 = document.getElementById("img_4");
Imgbutton_1.addEventListener("click", () => {
    const currelem = document.getElementById("4_img");
    const text_3 = document.getElementById("third");
    const text_2 = document.getElementById("second");
    if (toggle_2) {
        currelem.style.transform = "scale(1)";
        Imgbutton_1.style.transform = "translateX(-150px)";
        Imgbutton_1.style.transition = "1s";
        text_3.style.transform = "translateY(-40vh)";
        text_2.style.transform = "translateY(-80vh)";
        Imgbutton_1.style.zIndex = "1";
        Imgbutton.style.pointerEvents = "none"
        Imgbutton_2.style.pointerEvents = "all"
    } else {
        currelem.style.transform = "scale(0)";
        Imgbutton_1.style.transform = "translateX(50px)";
        Imgbutton_1.style.transition = "1s";
        text_3.style.transform = "translateY(0)";
        text_2.style.transform = "translateY(-40vh)";
        Imgbutton_1.style.zIndex = "0";
        Imgbutton.style.pointerEvents = "all"
        Imgbutton_2.style.pointerEvents = "none"
    }
    toggle_2 = !toggle_2;
});

const Imgbutton_2 = document.getElementById("img_3");
Imgbutton_2.addEventListener("click", () => {
    const currelem = document.getElementById("3_img");
    const text_3 = document.getElementById("third");
    const text_4 = document.getElementById("fourth");
    if (toggle_3) {
        currelem.style.transform = "scale(1)";
        Imgbutton_2.style.transform = "translateX(-100px)";
        Imgbutton_2.style.transition = "1s";
        Imgbutton_2.style.zIndex = "2";
        text_3.style.transform = "translateY(-80vh)";
        text_4.style.transform = "translateY(-40vh)";
        Imgbutton.style.pointerEvents = "none"
        Imgbutton_1.style.pointerEvents = "none"
        Imgbutton_3.style.pointerEvents = "all";
    } else {
        currelem.style.transform = "scale(0)";
        Imgbutton_2.style.transform = "translateX(100px)";
        Imgbutton_2.style.transition = "1s";
        Imgbutton_2.style.zIndex = "0";
        text_3.style.transform = "translateY(-40vh)";
        text_4.style.transform = "translateY(0vh)";
        Imgbutton_1.style.pointerEvents = "all"
        Imgbutton_3.style.pointerEvents = "none";
    }
    toggle_3 = !toggle_3;
});

const Imgbutton_3 = document.getElementById("img_2");
Imgbutton_3.addEventListener("click", () => {
    const currelem = document.getElementById("2_img");
    const text_4 = document.getElementById("fourth");
    const text_5 = document.getElementById("fifth");
    if (toggle_4) {
        currelem.style.transform = "scale(1)";
        Imgbutton_3.style.transform = "translateX(-50px)";
        Imgbutton_3.style.transition = "1s";
        Imgbutton_3.style.zIndex = "3";
        text_4.style.transform = "translateY(-80vh)";
        text_5.style.transform = "translateY(-40vh)";
        Imgbutton_2.style.pointerEvents = "none"
        Imgbutton_3.style.pointerEvents = "all";
        Imgbutton_4.style.pointerEvents = "all";

    } else {
        currelem.style.transform = "scale(0)";
        Imgbutton_3.style.transform = "translateX(150px)";
        Imgbutton_3.style.transition = "1s";
        Imgbutton_3.style.zIndex = "0";
        text_4.style.transform = "translateY(-40vh)";
        text_5.style.transform = "translateY(0vh)";
        Imgbutton_3.style.pointerEvents = "all";
        Imgbutton_4.style.pointerEvents = "all";
        Imgbutton_2.style.pointerEvents = "all"
    }
    toggle_4 = !toggle_4;
});

const Imgbutton_4 = document.getElementById("img_1");
Imgbutton_4.addEventListener("click", () => {
    const currelem = document.getElementById("1_img");
    const text_5 = document.getElementById("fifth");
    const text_6 = document.getElementById("sixth");
    if (toggle_5) {
        currelem.style.transform = "scale(1)";
        Imgbutton_4.style.transform = "translateX(0px)";
        Imgbutton_4.style.transition = "1s";
        Imgbutton_4.style.zIndex = "4";
        text_5.style.transform = "translateY(-80vh)";
        text_6.style.transform = "translateY(-40vh)";
        Imgbutton_3.style.pointerEvents = "none";

    } else {
        currelem.style.transform = "scale(0)";
        Imgbutton_4.style.transform = "translateX(200px)";
        Imgbutton_4.style.transition = "1s";
        Imgbutton_4.style.zIndex = "0";
        text_5.style.transform = "translateY(-40vh)";
        text_6.style.transform = "translateY(0vh)";
        Imgbutton_3.style.pointerEvents = "all";
    }
    toggle_5 = !toggle_5;
});



// Button click handlers
const buttonLinks = [
    { id: "btnclick1", url: "https://captain-ok.github.io/_circular//" },
    { id: "btnclick2", url: "https://captain-ok.github.io/Stop-Watch/" },
    { id: "btnclick3", url: "https://captain-ok.github.io/Snake_game/" },
    { id: "btnclick4", url: "https://captain-ok.github.io/Friend_Thaks_book/" },
    { id: "btnclick5", url: "https://captain-ok.github.io/nestle/" }
];

buttonLinks.forEach(button => {
    document.getElementById(button.id).addEventListener("click", () => {
        window.open(button.url, "_blank");
    });
});
