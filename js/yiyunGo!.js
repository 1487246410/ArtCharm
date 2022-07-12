var len = new Array($(".page li:nth-child(2)"), $(".page li:nth-child(3)"), $(".page li:nth-child(4)"), $(".page li:nth-child(5)"), $(".page li:nth-child(6)"));

for (var i = 0; i < len.length; i++) {
    var $cc = len[i];
    $cc.on("click", function () {
        $(this).addClass("sgy-avtiveLi").siblings().removeClass("sgy-avtiveLi");
    });
};

var len = new Array($(".page1 li:nth-child(2)"), $(".page1 li:nth-child(3)"), $(".page1 li:nth-child(4)"), $(".page1 li:nth-child(5)"), $(".page1 li:nth-child(6)"));

for (var i = 0; i < len.length; i++) {
    var $cc = len[i];
    $cc.on("click", function () {
        $(this).addClass("sgy-avtiveLi").siblings().removeClass("sgy-avtiveLi");
    });
};

function msgshow2(lin) {
    lin.on('click',function () {
        $(".gongjiang-msg-2").fadeOut(300);
        $(".gongjiang-msg-1").fadeIn(300);
    })
};

function msgshow3(lin) {
    lin.on('click',function () {
        $(".gongjiang-msg-1").fadeOut(300);
        $(".gongjiang-msg-2").fadeIn(300);
    })
};


msgshow2($(".page li:nth-child(2)"));
msgshow2($(".page li:nth-child(4)"));
msgshow2($(".page li:nth-child(6)"));

msgshow3($(".page li:nth-child(3)"));
msgshow3($(".page li:nth-child(5)"));

msgshow2($(".page1 li:nth-child(2)"));
msgshow2($(".page1 li:nth-child(4)"));
msgshow2($(".page1 li:nth-child(6)"));

msgshow3($(".page1 li:nth-child(3)"));
msgshow3($(".page1 li:nth-child(5)"));

function pageshow(linstart,linend) {
    linstart.on('click',function () {
        $(".page").show();
        $(".page1").hide();
    });

    linend.on('click',function () {
        $(".page1").show();
        $(".page").hide();
    });
}

pageshow($(".page li:nth-child(1)"),$(".page li:nth-child(7)"));
pageshow($(".page1 li:nth-child(1)"),$(".page1 li:nth-child(7)"));




var len2 = new Array($(".page2 li:nth-child(2)"), $(".page2 li:nth-child(3)"), $(".page2 li:nth-child(4)"), $(".page2 li:nth-child(5)"), $(".page2 li:nth-child(6)"));

for (var i = 0; i < len.length; i++) {
    var $cc = len2[i];
    $cc.on("click", function () {
        $(this).addClass("sgy-avtiveLi").siblings().removeClass("sgy-avtiveLi");
    });
};

var len1 = new Array($(".page3 li:nth-child(2)"), $(".page3 li:nth-child(3)"), $(".page3 li:nth-child(4)"), $(".page3 li:nth-child(5)"), $(".page3 li:nth-child(6)"));

for (var i = 0; i < len.length; i++) {
    var $cc = len1[i];
    $cc.on("click", function () {
        $(this).addClass("sgy-avtiveLi").siblings().removeClass("sgy-avtiveLi");
    });
};

function xuqiushow2(lin) {
    lin.on('click',function () {
        $(".xiuqiu-msg-2").fadeOut(300);
        $(".xiuqiu-msg-1").fadeIn(300);
    })
};

function xiuqiushow3(lin) {
    lin.on('click',function () {
        $(".xiuqiu-msg-1").fadeOut(300);
        $(".xiuqiu-msg-2").fadeIn(300);
    })
};


xuqiushow2($(".page2 li:nth-child(2)"));
xuqiushow2($(".page2 li:nth-child(4)"));
xuqiushow2($(".page2 li:nth-child(6)"));

xiuqiushow3($(".page2 li:nth-child(3)"));
xiuqiushow3($(".page2 li:nth-child(5)"));

xuqiushow2($(".page3 li:nth-child(2)"));
xuqiushow2($(".page3 li:nth-child(4)"));
xuqiushow2($(".page3 li:nth-child(6)"));

xiuqiushow3($(".page3 li:nth-child(3)"));
xiuqiushow3($(".page3 li:nth-child(5)"));

function xiuqiushow(linstart,linend) {
    linstart.on('click',function () {
        $(".page2").show();
        $(".page3").hide();
    });

    linend.on('click',function () {
        $(".page3").show();
        $(".page2").hide();
    });
}

xiuqiushow($(".page2 li:nth-child(1)"),$(".page2 li:nth-child(7)"));
xiuqiushow($(".page3 li:nth-child(1)"),$(".page3 li:nth-child(7)"));

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