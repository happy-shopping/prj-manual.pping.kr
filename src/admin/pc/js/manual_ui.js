
//사이드메뉴
$.fn.sidebar = function(){
    var list = this.find('.list_am');
    var itemD1 = this.find('.btn_d1');
    var itemD2 = this.find('.btn_d2');

    var siteList = this.find('.btn_site');

    itemD1.on('click', function(){
        var itemAct = $(this).parent('.item_d1').hasClass('active');
        if(itemAct == false){
            itemD1.parent('.item_d1').removeClass("active");
            $('.item_d1 .depth2').stop().slideUp('fast');
            $(this).parent('.item_d1').addClass('active').children('.depth2').stop().slideDown('fast');
            $('.d2_item').removeClass("active").children('.depth3').css({"display":"none"});
        }else{
            $(this).parent('.item_d1').removeClass('active');
            $('.item_d1 .depth2').stop().slideUp('fast');

        }

    });

    itemD2.on('click', function(){
        var itemAct = $(this).parent('.d2_item').hasClass('active');
        if(itemAct == false){
            itemD2.parent('.d2_item').removeClass("active");
            $('.d2_item .depth3').css({"display":"none"});
            $(this).parent('.d2_item').addClass('active').children('.depth3').css({"display":"block"});
        }else{
            $(this).parent('.d2_item').removeClass('active');
            $('.d2_item .depth3').css({"display":"none"});
        }
    });

    siteList.on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });

    $(".btn_nav_control").on('click', function(){
        var container = $(this).parents("#container");
        var curActive = container.hasClass('menu_active');
        if(curActive){
            container.removeClass('menu_active');
            $('html').css('min-width','1252px');
        }else{
            container.addClass('menu_active');
            $('html').css('min-width','1462px');
        }
    });

}
$(window).on('load side_menual.html', function(){
    var load_side = setTimeout(function() {
        $('#nav_gnb').sidebar();
        clearTimeout(load_side);
    }, 500);
});

//메뉴얼 아코디언 메뉴
$.fn.acoMenu = function(){
    this.find('.subject').each(function(){
        var menuList = $(this).parents('li');
        var menuCon = $(this).parents('.list_head').next('.list_con');
        $(this).on('click', function(e){
            e.preventDefault();
            menuList.toggleClass('active');
            menuCon.stop().slideToggle('fast');
        });
    });
}

//탭 -> manual_content01.html
// * 2019/07/09 일시적으로 사용하지 않는 스크립트
$.fn.tabMenu = function(){
    var tabBtn = this.find('.btn_tab');
    var tabCon = this.find('.tab_content');
    tabCon.eq(0).show();
    var tabLeng = this.find('.tab_menu li').length;
    tabLeng = 100 / tabLeng;
    this.find('.tab_menu li').width(tabLeng);
    tabBtn.on('click', function(e){
        e.preventDefault();
        var tabIdx = $(this).parent().index();
        tabCon.hide().eq(tabIdx).show();
        tabBtn.removeClass('active');
        $(this).addClass('active');
    });
}

$.fn.clearVal = function(){
    var targetInp = this.find('.m_sch_inp');
    var btnClear = this.find('.icon-close');

    targetInp.keyup(function(){


        if ( targetInp.val() == '') {

            btnClear.css({'display':'none'});

        } else {

            btnClear.css({'display':'block'});
            btnClear.on('click',function(e){
                e.preventDefault();
                targetInp.val('');
                btnClear.css({'display':'none'});
            });

        }
    })

    targetInp.on('click',function(){
        $('.m_sch_result').removeClass('off');
        $('.m_sch_result').addClass('on');

    });

    $('.result_close').find('.btn_close').on('click',function(){
        $('.m_sch_result').removeClass('on');
        $('.m_sch_result').addClass('off');
    });
}


$(document).ready(function(){
    //아코디언메뉴
    $(".menu_acordion").acoMenu();
    //탭메뉴
    $('.tab_wrap').tabMenu();
    //검색 초기화
    $('.m_sch_insert').clearVal();

})





