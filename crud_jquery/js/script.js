$(document).ready(function(){
    bacaData();

    $('.btn_tambah').click(function(){
        tambahData();
    })

    function bacaData(){
        $('.targetData').html('');
        $.ajax({
            type : 'GET',
            url : 'php/getData.php',
            dataType : 'JSON',
            success : function(response){
                var i;
                var data = '';
                for(i=0;i<response.length;i++){
                    data +=
                    `
                    <tr>
                    <td>`+(i+1)+`</td>
                    <td>`+response[i].nama_barang+`</td>
                    <td>`+response[i].harga_barang+`</td>
                    <td>`+response[i].stok+`</td>
                    </tr>
                    `
                }
                $('.targetData').append(data)
            }
        })
    }

    function tambahData(){
        var nama_barang = $('.txt_nama_barang').val();
        var harga_barang = $('.txt_harga_barang').val();
        var stok = $('.txt_stok').val();
        $.ajax({
            type : 'POST',
            url : 'php/addData.php',
            data : 'nama_barang='+nama_barang+'&harga_barang='+harga_barang+'&stok='+stok,
            dataType : 'JSON',
            success : function(response){
                if(response.status == '1'){
                    alert(response.msg);
                    bacaData();
                    resetForm();
                }else{
                    alert(response.msg);
                    bacaData();
                    resetForm();
                }
            }
        })
    }

    function resetForm(){
        $('.txt_nama_barang').val('');
        $('.txt_harga_barang').val('');
        $('.txt_stok').val('');
    }
})