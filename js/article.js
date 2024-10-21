$(document).ready(function () {
    $(".filter-item").click( function () {
        const value = $(this).attr("data-filter");
        if(value == "all"){
            $(".article-box").show("1000");
        }
        else{
            $(".article-box").not("." + value).hide("1000");
            $(".article-box").filter("." + value).show("1000");
        }
    })
    //add active to btn
    $(".filter-item").click(function(){
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    })
})