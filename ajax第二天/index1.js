$(function(){
//  获取新闻列表的函数
function getnewlist(){
 $.get('http://www.liulongbin.top:3006/api/news',function(res){
if(res.status !=200){
    return alert('获取新闻数据失败')
}
console.log(res.data);
 })
}

})