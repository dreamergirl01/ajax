$(document).ready(function(){
    //effect hide --> untuk menyembunyikan pesan
    $('#hide').click(function(){
        $('#kotak').hide(5000);
    });

    //effect show --> menampilkan pesan
    $('#show').click(function(){
        $('#kotak').show(1000);
    });

    //effect fadeout
    $('#fadeout').click(function(){
        $('.box1').fadeOut();
        $('.box2').fadeOut(2000);
        $('.box3').fadeOut(4000);
    });

    //effect fadein
    $('#fadein').click(function(){
        $('.box1').fadeIn();
        $('.box2').fadeIn(2000);
        $('.box3').fadeIn(4000);
    })

    //effect fadetoggle
    $('#fadetoggle').click(function(){
        $('.box1').fadeToggle();
        $('.box2').fadeToggle(2000);
        $('.box3').fadeToggle(4000);
    });

    //effect fadeto
    $('#fadeto').click(function(){
        $('.box1').fadeTo('slow',0.3);
        $('.box2').fadeTo('slow',0.3);
        $('.box3').fadeTo('slow',0.4);
    });

    //efek slideup
    $('#slideup').click(function(){
        $('#slide').slideUp("slow");
    });

    //efek slidedown
    $('#slidedown').click(function(){
        $('#slide').slideDown(1000);
    });

    //efek slidetoggle
    $('#slidetoggle').click(function(){
        $('#slide').slideToggle(2000);
    });

    //efek animate
    $('#kiri').click(function(){
        $('#animate-box').animate({'left': "-=50px"}, "slow");
    });

    $('#kanan').click(function(){
        $('#animate-box').animate({'right': "-=50px"},"slow");
    });

    //efek clearqueue
    $('#start').click(function(){
        $('.clearqueue-box').animate({left: '+=500'}, 5000);
        $('.clearqueue-bos').queue(function(){});
    });

    $('#stop').click(function(){
        $('.clearqueue-box').clearQueue();
        $('.clearqueue-box').stop();
    });

    //efek delay
    $('#delay').click(function(){
        $('#kotak-satu').slideUp(2000).delay(3000).fadeIn(2000); //menggunakan efek delay
        $('#kotak-dua').slideUp(2000).fadeIn(2000); //tidak menggunakan efek delay
    })
})