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

$(document).ready(function() {
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