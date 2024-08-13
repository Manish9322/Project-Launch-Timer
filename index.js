
// Set your timer here and then once the time is complete, your site will go live.

let countdownDate = new Date("Oct 31, 2024 12:30:00").getTime();

let x = setInterval(function () {
    let now = new Date().getTime(); // This will use local time
    let distance = countdownDate - now;


    // Time calculations for days, hours, minutes, and seconds.
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);


    // used to show the coundown of time.
    
    document.getElementById("days").innerHTML = ("0" + days);
    document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
    document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
    document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
    
    // Used to make 'seconds' number blue.

    document.getElementById("seconds").style.color = 'rgb(54, 113, 196)';


    // Used to set what should be shown once timer is complete and to which site the user is to be directed next.

    if (distance < 0) {
        document.getElementById('days').innerText = "00";
        document.getElementById('hours').innerText = "00";
        document.getElementById('minutes').innerText = "00";
        document.getElementById('seconds').innerText = "00";

        document.getElementById("image").style.display = "none";
        document.getElementById("live").style.display = "block";
        document.getElementById("heading").innerText = "Project is now live !!";
        
        // here we need to provide the URL of the site where the user will be directed.
        setTimeout(() =>{
            window.location.href="https://manish9322.github.io/Snake_Game/";

        },1000);

        clearInterval(x);
    }
}, 1000);