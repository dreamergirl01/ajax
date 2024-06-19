$(document).ready(function(){
    //event click --> menampilkan aksi ketika diklik satu kali
    $('#click').click(function(){
        alert('Saya Sedang Belajar Jquery');
    });

    //event doubleclick --> menampilkan aksi ketika di klik dua kali
    $('#double').click(function(){
        //ketika di double click warna akan berubah
        $(this).css('background-color','red');
    });

    //event mouseleave --> sebuah element dari html akan menghasilkan aksi ketika melepaskan cursor dari element tersebut
    $('.mouse').mouseleave(function(){
        $(this).css('background-color','skyblue');
    });

    //event mouseenter --> kebalikan dari mouseleave
    $('.mouse').mouseenter(function(){
        $(this).css('background-color','lime');
    });

    //event keydown --> ketika mengetikkan pesan maka pesan akan ditampilkan diluar form keydown
    //namun keydown terbatas tidak semua pesan ditampilkan sebelum di enter
    $('#keydown').keydown(function(){
        $('#pesan_keydown').text($(this).val()); 
        //.val digunakan untuk mengambil value dari sebuah elemen
    });

    //event keyup --> kebalikan dari keydown (menampilkan semua pesan yang ditulis)
    $('#keyup').keyup(function(){
        $('#pesan_keyup').text($(this).val());
    });
})