//공통 ui 스크립트
//헤더
function headerUi(){
    //헤더 퀵메뉴 불러오기
    $('.header .btn-nav-quick').on('click', function(){
        var current = $(this).hasClass('active');
        if(current){
            $(this).removeClass('active');
            $("#navQuick").stop().slideUp('fast');
        }else{
            $(this).addClass('active');
            $("#navQuick").stop().slideDown('fast');
        }
    });
}
//컨테이너
function containerUi(){
    //gnb 활성화
    $(".btn-nav-control").on('click', function(){
        var container = $(this).parents("#container");
        var curActive = container.hasClass('menu-active');
        if(curActive){
            container.removeClass('menu-active');
            $('html').css('min-width','1252px');
        }else{
            container.addClass('menu-active');
            $('html').css('min-width','1462px');
        }
    });
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
    //하위메뉴
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
}
// headerUi

//상품검색관련
function pdSearch(){
    //상품검색 상품분류 선택
    $.fn.pdSearch = function(){
        this.find('.list-item').each(function(){
            var thisList = $(this).children('li');
            thisList.find('a').on('click', function(e){
                e.preventDefault();
                thisList.removeClass('active');
                $(this).parent().addClass('active');
            });
        });
    }
    //상품검색 상품분류 선택 실행
    $('.pd-list').pdSearch();
}

//도구모음
function utilJs(){
    //선택도구
    $.fn.btnPickDate = function(){
        this.each(function(){
            var btnDate = $(this).find('a');
            $(this).find('a').on('click', function(e){
                e.preventDefault();
                btnDate.removeClass('active');
                $(this).addClass('active');
            });
        });
    }
    //날짜선택실행
    $('.util-pickup').btnPickDate();
}

$(document).ready(function(){
    //상품검색실행
    pdSearch();
    //UTIL
    utilJs();
    //데이트피커
    $('.date-picker').datepicker();
    //체크박스 전체체크
    $('.chk-all').on('change', function(){
        var currentIdx = $(this).attr('data-chk-idx');
        if($(this).prop('checked')){
            $(".chk-sub[data-chk-idx="+currentIdx+"]").prop("checked", true);
        }else{
            $(".chk-sub[data-chk-idx="+currentIdx+"]").prop("checked", false);
        }
    });
});

//데이트피커 기본설정
$.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd' //Input Display Format 변경
    ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
    ,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시
    ,changeYear: true //콤보박스에서 년 선택 가능
    ,changeMonth: true //콤보박스에서 월 선택 가능
    ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
    ,buttonImage: "//cdnimg.happyshopping.kr/img_static/img_admin2019/images/ico_calendar.png" //버튼 이미지 경로
    ,buttonImageOnly: true //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
    ,buttonText: "선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트
    ,yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
    ,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
    ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
    ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
    ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
    ,minDate: "-1M" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
    ,maxDate: "+1M" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
});

//팝업 스크립트
function popupUi(){
    //팝업 닫기
    $('.pop-btn-close, .popup_layer .close').on('click', function(){
        $(this).parents('.popup_layer').fadeOut('fast');
    });
    //도움말 팝업 검색 활성화
    $('.popup_help .inp_sch').on('focusin', function(){
        $(this).parents('.ph_sch').addClass('active');
    });
    $('.popup-help .inp-sch').on('focusout', function(){
        $(this).parents('.ph_sch').removeClass('active');
    });
    //팝업 닫기
    $('.popup_help button[data-close]').on('click', function(){
        var closeVal = $(this).attr("data-close");
        if(closeVal == "true"){
            $(this).parents('.popup_help').fadeOut('fast');
        }
    });
}
