setInterval(() => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    
    let hh = document.getElementById('hr');
    let mm = document.getElementById('min');
    let ss = document.getElementById('sc');

    hh.style.transform = `rotate(${h * 30}deg)`;
    mm.style.transform = `rotate(${m * 6}deg)`;
    ss.style.transform = `rotate(${s * 6}deg)`;
})