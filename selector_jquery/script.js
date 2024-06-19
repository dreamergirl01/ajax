//untuk mengeksekusi dokumen yang telah diload
$(document).ready(function(){
    //selector tag
    $('h1').css('color','red');
    $('p').css('color','blue');

    //selector class
    $('.judul').css('background-color','red');
    $('.isi').css('color','salmon');

    //selector id
    $('#header').css('border','2px solid blue');
    $('#paragraf').css('border','2px solid green');

    //selector untuk semua element
    $('*').css('background-color','skyblue');

    //selector untuk tipe
    $('input:submit').css('background-color','green');
    $('input:button').css('padding','20px');
})