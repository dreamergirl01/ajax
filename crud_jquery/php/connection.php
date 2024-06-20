<?php 
$connection = mysqli_connect('localhost','root','','toko');
if(mysqli_connect_error()){
    echo "Koneksi Database Gagal". mysqli_connect_error();
}
