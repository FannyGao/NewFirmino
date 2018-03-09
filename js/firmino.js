/**
 * Created by Admin on 2018/3/9.
 */
window.onload=function () {
    $(window).scroll(function () {
        let roll=$(window).scrollTop();
        if(roll>=30){
            $('.notempty').addClass('fixed');
        }
        else {
            $('.notempty').removeClass('fixed');
        }
        if(roll>=73){
            $('.header_logo_2').hide();
        }
        else {
            $('.header_logo_2').show();
        }
    })

    let i=0;
    function banner() {
        i++;
        if(i>=$('.banner_bg li').length){
            i=0;
        }
        $('.banner_bg li').eq(i).addClass('active').siblings().removeClass('active')
    }
    let time=setInterval(banner,2000);
    $('.banner').mouseenter(function () {
        clearInterval(time);
    }).mouseleave(function () {
        time=setInterval(banner,2000);
    })
    $('.jt_right').click(function (e) {
        e.preventDefault();
        i++;
        if(i>=$('.banner_bg li').length){
            i=0;
        }
        $('.banner_bg li').eq(i).addClass('active').siblings().removeClass('active')
    });
    $('.jt_left').click(function (e) {
        e.preventDefault();
        i--;
        if(i<0){
            i=$('.banner_bg li').length-1;
        }
        $('.banner_bg li').eq(i).addClass('active').siblings().removeClass('active')
    })

    function hidden(a,b) {
        $(a).mouseenter(function () {
            t=setTimeout(function () {
                $(b).slideDown('normal','linear');
            },500)
            $(this).find('a').addClass('background')
        }).mouseleave(function () {
            clearTimeout(t);
            $(b).slideUp('normal','linear');
            $(this).find('a').removeClass('background')
        })
    }
    hidden('.paces','.paces_hidden');
    hidden('.gallery','.gallery_hidden');
    hidden('.blog','.blog_hidden');

}

