$(document).ready(function(){
    bacaData();

    $('.btn_tambah').click(function(){
        tambahData();
    })

    $('.btn_ubah').click(function(){
        ubahData();
    })

    $('.btn_batal').click(function(){
        bacaData();
    })

    function bacaData(){
        $('.targetData').html('');
        $('.btn_tambah').show();
        $('.btn_ubah').hide();
        $('.btn_batal').hide();
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
                    <td>
                    <button class='btn-edit' id='`+response[i].id+`'>Edit</button>
                    <button class='btn-delete' id='`+response[i].id+`'>Delete</button>
                    </td>
                    </tr>
                    `
                }
                $('.targetData').append(data)

                $('.btn-edit').click(function(){
                    getSingleData($(this).attr('id'));
                })

                $('.btn_delete').click(function(){
                    deleteData($(this).attr('id'));
                })
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

    //untuk tampilkan data edit
    function getSingleData(x){
        $.ajax({
            type : 'POST',
            url : 'php/getSingleData.php',
            data : 'id='+x,
            dataType : 'JSON',
            success : function(response){
                $('.txt_id').val(response.id);
                $('.txt_nama_barang').val(response.nama_barang);
                $('.txt_harga_barang').val(response.harga_barang);
                $('.txt_stok').val(response.stok);
                $('.btn_tambah').hide();
                $('.btn_ubah').show();
                $('.btn_batal').show();
            }
        })
    }

    //untuk proses edit
    function ubahData(){
        var id = $('.txt_id').val();
        var nama_barang = $('.txt_nama_barang').val();
        var harga_barang = $('.txt_harga_barang').val();
        var stok = $('.txt_stok').val();
        $.ajax({
            type : 'POST',
            url : 'php/editData.php',
            data : 'id='+id+'&nama_barang='+nama_barang+'&harga_barang='+harga_barang+'&stok='+stok,
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

    function deleteData(x){
        $.ajax({
            type : 'POST',
            url : 'php/deleteData.php',
            data : 'id='+x,
            dataType : 'JSON',
            success : function(response){
                if(response.status == '1'){
                    alert(response.msg);
                    bacaData();
                }else{
                    alert(response.msg);
                }
            }
        })
    }

    function resetForm(){
        $('.txt_id').val('');
        $('.txt_nama_barang').val('');
        $('.txt_harga_barang').val('');
        $('.txt_stok').val('');
    }
})