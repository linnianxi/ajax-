$(function(){
  $('form').on('submit',function(e){
      e.preventDefault()
      var username = $('#guangzhou').val()
      var password = $('#shenzhen').val()
      $.ajax({
         type:'post',
         url:'http://localhost/api/member/login',
         data:{
             username,
             password
         },
         success:function(res){
          console.log(res);
          localStorage.setItem('jwt',res.jwt)
        window.location.href =  'goodsList.html?res='+ res.jwt
         }

      })
  })  
})