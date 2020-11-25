$(function(){
    $('form').on('submit',function(e){
        e.preventDefault()
        var username =$('#jinghu').val()
        var email =$('#wuwei').val()
        var password =$('#nanjing').val()
        $.ajax({
            type:'post',
            url:'http://localhost/api/member/register',
            data:{
               username,
                email,
                password
            },
            success:function(res){
                console.log(res);
            }
        })
    })


})