 const clock = document.querySelector("#clock");

function showTime() {
    let date = new Date();
    let hour = String(date.getHours()).padStart(2, '0');
    let minute = String(date.getMinutes()).padStart(2, '0');
    let second = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hour}:${minute}:${second}`;
};

showTime();
setInterval(showTime, 1000);




