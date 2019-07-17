//공통 ui 스크립트
function uiJs(){
    //글로벌 네비게이션
    function gnb(open, close){
        this.gnbOpen = $(open);
        this.gnbClose = $(close);
        this.gnbEvent();
        var navGnb = document.getElementById("navGnb");
    }
    gnb.prototype.gnbEvent=function(){
        this.gnbClose.on("click", function(){
            navGnb.classList.remove("active");
            $("html,body").css("overflow","initial");
        });
        this.gnbOpen.on("click", function(){
            navGnb.classList.add("active");
            $("html,body").css("overflow","hidden");
        });
    }
    //글로벌 네비게이션
    $(document).ready(function(){
        
        //글로벌 네비게이션 활성화
        var navGnb = new gnb(".btn-gnb-open", ".btn-gnb-close");

        //네비게이션 전체메뉴
        $("#navGnb .btn-allmenu").on("click", function(e){
            e.preventDefault();
            var gnbAm = $(this).parents(".gnb-am");
            var listAm = $(".gnb-am .list-am");
            var amActive = gnbAm.hasClass("active");
            if(amActive){
                gnbAm.removeClass("active").find(".txt").text("열기");
                listAm.removeClass("active").stop().slideToggle("fast");
            }else{
                gnbAm.addClass("active").find(".txt").text("닫기");
                listAm.addClass("active").stop().slideToggle("fast");
            }
        });
        $("#navGnb .list-am a").on("click", function(e){
            e.preventDefault();
            $("#header .list-am a").removeClass("active");
            $(this).addClass("active");
            var curIdx = $(this).parent().index();
        });        
        $("#navGnb .btn-d2").on("click", function(e){
            e.preventDefault();
            var current = $(this).parent().hasClass("active");
            if(current){
                $("#navGnb .d2-item").removeClass("active");
                $(".depth3").stop().slideUp("fast");
            }else{
                $("#navGnb .d2-item").removeClass("active");
                $(".depth3").stop().slideUp("fast");
                $(this).parent().addClass("active").children(".depth3").stop().slideDown("fast");
            }
        });
    });
}
// /uiJs
