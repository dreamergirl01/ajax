$(document).ready(function(){
    $('#checkbox').click(function(){
        if($(this).is(':checked')){ //--> untuk mencek aktif atau tidak
            $('#password').attr('type','text');
        }else{
            $('#password').attr('type','password');
        }
    })
})