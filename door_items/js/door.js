let doors = document.querySelectorAll(".door");
let doorSales = document.querySelectorAll(".door__sales");
let doorWrapper = document.querySelector(".door__wrapper");
let spinResultWrapper = document.querySelector(".spin-result-wrapper");
let orderBlock = document.querySelector(".order_block");
let orderBlockForm = document.querySelector(".order_block_form");
let door1 = document.getElementById("door__1");
let door2 = document.getElementById("door__2");
let door3 = document.getElementById("door__3");
let doorSale1 = document.getElementById("door__sales1");
let doorSale2 = document.getElementById("door__sales2");
let doorSale3 = document.getElementById("door__sales3");
doors.forEach(function (door) {
    door.addEventListener("click", openDoor);
});
let closePopup = document.querySelector(".close-popup,.pop-up-button");
let closePopupBtn = document.querySelector('.pop-up-button')
closePopupBtn.addEventListener('click', (a) => {
    start_timer()
    spinResultWrapper.style.display = 'none'
    orderBlock.style.display = "block"
    let b = document.querySelector('.box').offsetTop
    document.body.animate({
        scrollTop: b
    }, 800)
})
closePopup.addEventListener('click', (a) => {
    start_timer()
    spinResultWrapper.style.display = 'none'
    orderBlock.style.display = "block"
    let b = document.querySelector('.box').offsetTop
    document.body.animate({
        scrollTop: b
    }, 800)
})
function openDoor(e) {
    e.currentTarget.classList.add("open");
    setTimeout(function () {
        spinResultWrapper.style.display = "block";
        setTimeout(function () {
            orderBlock.style.display = "block";
            doorWrapper.style.display = "none";
        }, 1000);
    }, 2500);
    doorSales.forEach(function (sale) {
        if (door1.classList.contains("open")) {
            doorSale1.innerHTML = "65%";
            doorSale2.innerHTML = "15%";
            doorSale3.innerHTML = "25%";
        } else if (door2.classList.contains("open")) {
            doorSale2.innerHTML = "65%";
            doorSale1.innerHTML = "25%";
            doorSale3.innerHTML = "15%";
        } else if (door3.classList.contains("open")) {
            doorSale1.innerHTML = "15%";
            doorSale3.innerHTML = "65%";
            doorSale2.innerHTML = "25%";
        }
    });
    for (let i = 0; i < doors.length; i++) {
        if (!doors[i].classList.contains("open")) {
            setTimeout(function () {
                doors[i].classList.add("open");
            }, 2500);
        }
    }
    for (let j = 0; j < doors.length; j++) {
        doors[j].removeEventListener("click", openDoor);
    }
}

var time = 600;
var intr;

function start_timer() {
    intr = setInterval(tick, 1000);
}

function tick() {
    time = time - 1;
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
        clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0" + secs;
    $("#min").html("0" + mins);
    $("#sec").html(secs);
}
