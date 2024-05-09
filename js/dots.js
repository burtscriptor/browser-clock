setInterval(() => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let hh_dot = document.querySelector('.hh_dot');
    let min_dot = document.querySelector('.min_dot ');
    let sec_dot = document.querySelector('.sec_dot');

    hh_dot.style.transform = `rotate(${h * 30}deg)`;
    min_dot.style.transform = `rotate(${m * 6}deg)`;
    sec_dot.style.transform = `rotate(${s * 6}deg)`;
})