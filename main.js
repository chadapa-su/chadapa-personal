$('.navbar-toggler').click(function(){
    $('.collapse').show();
});

$('a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 800);
    event.preventDefault();
    $('.collapse').hide();
});


const SRLeft = ScrollReveal({
    reset:true,
    origin:'left',
    distance:'80px',
    duration:2000
});

SRLeft.reveal('.home-text',{});

const SRTop = ScrollReveal({
    reset:true,
    origin:'top',
    distance:'80px',
    duration:2000
});
SRTop.reveal('.intro-text',{});

SRTop.reveal('.timeline',{});

SRTop.reveal('.sk1',{});
SRTop.reveal('.sk2',{});
SRTop.reveal('.sk3',{});
SRTop.reveal('.sk4',{});
SRTop.reveal('.sk5',{});
SRTop.reveal('.sk6',{});