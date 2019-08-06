//사이드메뉴
$.fn.sidebar = function(){
    var closed = this.find('.close');
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
            $('.d2_item .depth3').stop().slideUp('fast');
            $(this).parent('.d2_item').addClass('active').children('.depth3').stop().slideDown('fast');
        }else{
            $(this).parent('.d2_item').removeClass('active');
            $('.d2_item .depth3').stop().slideUp('fast');
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

    // closed.on('click',function(){
    //     $(".side_manual").stop().animate({
    //         right:"-240px"
    //     },300);
    //     $("#side_bg").hide();
    // })
}

$(window).on('load side_menual.html', function(){

    var load_side = setTimeout(function() {
        $('#nav_gnb').sidebar();
        clearTimeout(load_side);
    }, 500);

});

$.fn.openSide = function(){
    var openBtn = this.find('.btn');


    openBtn.on('click',function(){
        $(".side_manual").stop().animate({
            right:"0"
        },300);
        $("#side_bg").show();
    })

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
        $('.m_sech_result').removeClass('off');
        $('.m_sech_result').addClass('on');

    });

    $('.result_close').find('.btn_close').on('click',function(){
        $('.m_sech_result').removeClass('on');
        $('.m_sech_result').addClass('off');
    });
}

$(window).on('load header_manual.html', function(){
    //사이드바
    $(".headerm").openSide();
    //검색 초기화
    $('.m_sch_insert').clearVal();

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



$(document).ready(function(){
    //아코디언메뉴
    $(".menu_acordion").acoMenu();

})
