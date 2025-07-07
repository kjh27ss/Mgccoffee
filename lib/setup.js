$(function() { 

    let section = $(".section");
    let timer = null;

    // 초기 실행
    scrollMove($(window).scrollTop());

    $(window).resize(function(){
        clearTimeout(timer);
        timer = setTimeout(function(){
            section = $(".section");
            scrollMove($(window).scrollTop());
        }, 300);
    });

    // 스크롤 이벤트
    $(window).on("scroll", function(){
        scrollMove($(this).scrollTop());
    });

    function scrollMove(top){
        section.each(function(i){
            const pos = $(this).offset().top - $(window).height() * 0.85;

            if (top >= pos) {
                $(this).addClass("view");

                $("main .scroll .menu li").removeClass("view");
                $("main .scroll .menu li").eq(i).addClass("view");
            }
        });
    }    
});