//  用ajax来获取数据
// 如果封装了一个函数，那么就要在一开始就调用函数，要先把里面原有的内容渲染到页面上
 getcommentlist()
 function getcommentlist(){
   
    $.ajax({
        method:'get',
        url:'http://www.liulongbin.top:3006/api/cmtlist',
        success:function(res){
            if(res.status!=200) return alert('数据请求失败');
            var sc ='';
            res.data.forEach(function(item,index){
                sc+=`<li class="list-group-item">
                <span class = "badge" style = "background-color:#f60">评论时间：${item.time} </span>
                <span class ="badge" style ="baackground-color:pink">评论人：${item.username}</span>
                ${item.content}
                </li>`
            })
            $('ul').html(sc)
        }  
      })
    
 }
//  提交功能
$('#formAddCmt').on('submit',function(){
    var data = $(this).serialize();
    $.ajax({
        type:'post',
        url:'http://www.liulongbin.top:3006/api/addcmt',
        data:data,
        success:function(res){
       if(res.status!=201) return alert('数据添加失败')
       console.log('数据获取成功');
    //    getcommentlist()
    //    $('#formAddCmt').get(0).reset()
        }
    })
    // return false
})






























// function getcommentlist(){

   
//     // getcommentlist()
// }