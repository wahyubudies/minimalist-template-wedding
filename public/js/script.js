// Animation
AOS.init();

// Count Down
let countDownDate = new Date("Apr 28, 2022 00:00:00").getTime();
let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("days-countdown").innerHTML = days;
  document.getElementById("hours-countdown").innerHTML = hours;
  document.getElementById("minutes-countdown").innerHTML = minutes;
  document.getElementById("seconds-countdown").innerHTML = seconds;
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days-countdown").innerHTML = 0;
    document.getElementById("hours-countdown").innerHTML = 0;
    document.getElementById("minutes-countdown").innerHTML = 0;
    document.getElementById("seconds-countdown").innerHTML = 0;
  }
}, 1000);

// Modal Amplop
const buttonAmplop = document.getElementById("buttonAmplop");
const modalBox = document.getElementById("modalBox");
const overlayModal = document.getElementById("overlayModal");
const closeModal = document.getElementById("closeModal");

buttonAmplop.onclick = function() {
    modalBox.style.display = "block";
    overlayModal.style.display = "block";
}

closeModal.onclick = function() {
    modalBox.style.display = "none";
    overlayModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == overlayModal) {
        modalBox.style.display = "none";
        overlayModal.style.display = "none";
    }
}

// Copy to Clipboard
function copyToClipboard(id)
{
  var r = document.createRange();
  r.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();

  if (id == 'rekening-1') {
    document.querySelector('.message-1').style.display = "block";
  }  
  else if (id == 'rekening-2') {
    document.querySelector('.message-2').style.display = "block";
  }
  
  setTimeout(function name() {
    if (id == 'rekening-1') {
      document.querySelector('.message-1').style.display = "none";
    }
    else if (id == 'rekening-2') {
      document.querySelector('.message-2').style.display = "none";
    }
  }, 2000);
}

// Play Music
let buttonPlay = document.querySelector('.material-icons');
let audioMusic = document.querySelector('#audioMusic');

function playMusic(){
  if(buttonPlay.innerHTML === 'pause_circle'){
    buttonPlay.innerHTML = 'play_circle';
    audioMusic.pause();
  }else{
    buttonPlay.innerHTML = 'pause_circle';
    audioMusic.play();
  }
}

$(document).ready(function() {
    // Slide Cover
    $('#slideCover').click( function() {
      audioMusic.play();
      buttonPlay.innerHTML = 'pause_circle';
      
      $('#cover').removeClass('bottom-0').addClass('-bottom-full');
      $('body').removeClass('overflow-y-hidden');
    });

    // Navigation Menu
    $('.navigation').bind('click', function(e) {
        e.preventDefault();

        var target = $(this).attr("href");
        
        $('html, body').stop().animate({
                scrollTop: $(target).offset().top
        }, 300, function() {
                location.hash = target;
        });

        return false;
    });
});

$(window).scroll(function() {

    // Navigation Menu
    var scrollDistance = $(window).scrollTop(); 
    $('.page-section').each(function(i) {
            if ($(this).position().top - 2 <= scrollDistance) {
                $('.navigation svg g.active').removeClass('active');
                $('.navigation svg g').eq(i).addClass('active');

                $('.navigation p').removeClass('active');
                $('.navigation p').eq(i).addClass('active');
            }
    });
}).scroll();