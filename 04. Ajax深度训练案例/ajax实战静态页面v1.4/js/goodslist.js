$(function () {
    $.ajax({
        type: 'get',
        url: 'http://localhost/api/goods/getlist',
        success: function (res) {
            console.log(res);
            var suzhou = template("goodsinfos", res)
            $('#shanghai').html(suzhou)



        }
    })
    $('.aui-list-item').on('click','aui-coupon',function(e){
        e.preventDefault()
        // 先定一个变量接收一下从模板字符串中获取到的ID
        var id = $(this).parents('.aui-list-item').prop('id')
       var token = 
    })
})