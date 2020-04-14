var buttonLangMenuShower = document.getElementById("langShow"),
    menuShower = document.getElementById("langShowerMenu");


buttonLangMenuShower.onclick = $(function () {
    $("#langShow").click(function () {
        $(menuShower).toggleClass("hiddddden");
    });
});
console.log("Button is here!");