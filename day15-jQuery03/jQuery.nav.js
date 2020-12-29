/* 
    author:1026杰哥哥
    ul>li>h2+.con

*/
;
(function ($) {
    $.fn.extend({
        nav: function () {
            $(this).children("li").mouseenter(function () {
                $(this).children(".con").stop(true, false).slideDown(500)
            }).mouseleave(function () {
                $(this).children(".con").stop(true, false).slideUp(500)
            })
            //返回一个jq对象 方便用户链式调用
            return $(this);
        }
    })
})(jQuery);