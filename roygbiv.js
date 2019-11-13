function ready() {
    console.log("page ready");

}
document.body.style.background = "red";

setInterval(() => {
    document.body.style.background = "orange";

}, 2000)


document.addEvent addEventListener("DOMContentLoaded", ready);