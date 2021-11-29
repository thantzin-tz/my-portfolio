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
    }else {
      let btnText = this.textContent;
      if(btnText === "View It Here"){
        window.location = "https://thantzin-tz.github.io/simon-game/"; 
      }else{
        window.location = "https://github.com/thantzin-tz/simon-game";
      }
    }
  });
  
}