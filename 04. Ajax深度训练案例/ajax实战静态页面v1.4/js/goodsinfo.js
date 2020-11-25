$(function(){
    var id = location.search.split('=')[1];
    $.ajax({
        type:'get',
        url:'http://localhost/api/goods/getinfo',
       data:{
           id
       },
       success:function(res){
        console.log(res);
        var wuhan =template('wuhu',res)
        $('#beijing').html(wuhan)
       }
    })
   
})