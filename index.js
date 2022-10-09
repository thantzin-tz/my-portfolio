// Scroll to Top Button

$('#scrollToTop').click(function(){
    $('html, body').animate({scrollTop:0}, 'slow');
});

$(window).scroll(function(){
    if($(this).scrollTop() > 300 ){
        $('#scrollToTop').fadeIn();
    }else {
        $('#scrollToTop').fadeOut();
        
    }
    
});

// Typing animation
var i = 0;
var txt = "a web developer."; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

setInterval(function () {
  if (i < txt.length) {
    document.querySelector("h2").textContent += txt.charAt(i);
    i++;
  }
}, speed);

// Button on click

let btns = document.querySelectorAll(".projectBtn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    if(this.id === "drum"){
      let btnText = this.textContent;
      if(btnText === "View It Here"){
        window.location = "https://thantzin-tz.github.io/drum-kit/"; 
      }else{
        window.location = "https://github.com/thantzin-tz/drum-kit";
      }
    }else if(this.id === "dice"){
      let btnText = this.textContent;
      if(btnText === "View It Here"){
        window.location = "https://thantzin-tz.github.io/dicegame/"; 
      }else{
        window.location = "https://github.com/thantzin-tz/dicegame";
      }
    }else if(this.id === "gym"){
      let btnText = this.textContent;
      if(btnText === "View It Here"){
        window.location = "https://github.com/thantzin-tz/Gym-Management-System"; 
      }else{
        window.location = "https://github.com/thantzin-tz/Gym-Management-System";
      }
    }else if(this.id === "click2eat"){
      let btnText = this.textContent;
      if(btnText === "View It Here"){
        window.location = "http://click2eat.somee.com/user/Default.aspx"; 
      }else{
        window.location = "https://github.com/thantzin-tz/Online-Food-Order-System";
      }
    } else {
      let btnText = this.textContent;
      if(btnText === "View It Here"){
        window.location = "http://click2eat.somee.com/user/Default.aspx"; 
      }else{
        window.location = "https://github.com/thantzin-tz/simon-game";
      }
    }
  });
  
}

function myFunction() {
  let dots = document.querySelector("#dots");
  let moreText = document.querySelector("#more");
  let btnText = document.querySelector("#myLink");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.textContent = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.textContent = "Read less";
    moreText.style.display = "inline";
  }
}
