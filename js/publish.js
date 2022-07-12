$(document).ready(function () {
    $("#u35").mouseenter(function () {
        $("#u35").animate({
            height: '530px',
            width: '1280px',
        });
    });
    $("#u35").mouseleave(function () {
        $("#u35").animate({
            height: '501px',
            width: '1254px'
        });
    });

    $(".it2_2").mouseenter(function () {
        $(".load").slideDown("fast");

    })
    $(".it2_2").mouseleave(function () {
        $(".load").hide();
    })
});
$(function () {
    $(".d8").mouseenter(function () {
        $(".d8").css({"background-image": "url(../image/专家鉴定/u44_mouseOver.png)"});
        $(".d7_a").css("color", "#fff");
    });
    $(".d8").mouseleave(function () {
        $(".d8").css({"background-image": "url(../image/专家鉴定/u44.png)"});
        $(".d7_a").css("color", "#000");
    });
    $(".d9_3").mouseenter(function () {
        $(this).css("backgroundColor", "#00A000");
    });
    $(".d9_3").mouseleave(function () {
        $(this).css("backgroundColor", "#169BD5");
    });

    $(".zhan").click(function () {
        $(".world0").show();
        $(".world1").hide();
        $(".world2").hide();
        $(".world3").hide();
        $(".world4").hide();
    });
    $(".wen").click(function () {
        $(".world1").show();
        $(".world2").hide();
        $(".world0").hide();
        $(".world3").hide();
        $(".world4").hide();
    });
    $(".tu").click(function () {
        $(".world1").hide();
        $(".world2").show();
        $(".world0").hide();
        $(".world3").hide();
        $(".world4").hide();
    });
    $(".shi").click(function () {
        $(".world1").hide();
        $(".world2").hide();
        $(".world0").hide();
        $(".world4").hide();
        $(".world3").show();
    });
    $(".ke").click(function () {
        $(".world1").hide();
        $(".world2").hide();
        $(".world0").hide();
        $(".world4").show();
        $(".world3").hide();
    });
    $(".dv2_1").click(function () {
        $(".dv3").show();
        $(".dv4").hide();
    });
    $(".dv2_2").click(function () {
        $(".dv4").show();
        $(".dv3").hide();
    });


    /*悬浮start*/
    $(".showerweima").hover(function () {
        $(".xuanfu-left").stop().fadeToggle(500);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(".top").height()) {//如果从上往下滑动的高度大于login的高度
            $(".xuanfu-right li:nth-child(1)").css("display", "block");
        } else {
            $(".xuanfu-right li:nth-child(1)").css("display", "none");
        }
    });

    function dingwei(idstart,idend){
        $(idstart).click(function () {
            var city_top = $(idend).offset().top;
            $('html,body').animate({scrollTop: city_top}, 500);
        })
    };

    dingwei(".maodian1",'.top');

    /*悬浮end*/
});