$(function(){

    const $loading = $('.loading');
    $loading.children('p').delay(500).fadeOut();
    $loading.delay(600).fadeOut(500);

    $('a').on('mouseover',function(){
        $(this).css({
            cursor :'url(./etc/pointing_hand.cur),auto'
        });
    });

    const $visualLogo = $('article.visual > .visualTop > span.logo');
    const $visualCenT = $('.visual > .visualCen > .vsc-con > p');
    const $h2 = $('header > .header-con > h2 > a');
    const $gnb = $('header > .header-con > nav > .gnb');
    const $mnu = $('header > .header-con > nav > .gnb > li > a');
    const $submnu = $('header > .header-con > .sub > .sub-gnb > li > a');
    const $gnbBtn = $('header > .header-con >.btn-gnb');
    const $pfBtn = $('section.aboutMe > .profile > .profile-btn');
    const $pf = $('section.aboutMe > .profile > .profile-con >table');
    const $introduce = $('section.aboutMe > .introduce > p:nth-of-type(2) > i');

    const arrTopVal = [];
    let Idx = null;
    
    $(window).ready(function() {
   
        $visualCenT.delay(600).each(function(idx){
            $(this).delay(600*idx).animate({right:0},600);
        });
        $visualCenT.last().animate({
            letterSpacing : 8
        },700).animate({
            letterSpacing : 2
        },500)
        
        // 자동스크롤다운
        $('html,body').delay(5000).animate({
            scrollTop:$('header').offset().top
        },600);

        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth()+1;
        let date = now.getDate();
        const days = ['SUN',' M0N', 'TUE', 'WED', 'THU','FRI', 'SAT'];
        let day = days[now.getDay()]
        $('.visual>.visualTop>.date').text(year+'. '+month+'. '+date+'.'+day);
    });
    

    //스크롤 메뉴고정
    $(window).on('scroll',function(){        
        let scrollH= $(window).scrollTop();
    
        if(scrollH>1680){
            $('header').css({
                position:'fixed',  
                top:0
            });
            // console.log(scroll)
        }else if(scrollH<=1680){
            $('header').css({
                position:'absolute',
                top : 1680  
            });
        };
    }) 
    //메뉴 css
    $gnb.width($gnb.width()*1.3);
    $('.sub').height($(window).height());

    //메뉴 클릭이벤트
    for(let i=0;i<$mnu.length;i++){
        arrTopVal[i] = $('section').eq(i).offset().top;
    }
    $mnu.on('click',function(evt){
        evt.preventDefault();
        Idx = $mnu.index(this);
        $('html,body').stop().animate({
            scrollTop : arrTopVal[Idx]
        },800);
    });
    $(window).on('scroll',function(){
        let scrollTop = $(this).scrollTop();
        for(let i=0;i<$mnu.length;i++){
            if(scrollTop>=arrTopVal[i]){
                $mnu.eq(i).parent().addClass('on').siblings().removeClass('on');
            }else if(scrollTop<arrTopVal[0]){
                $mnu.parent().removeClass('on');
            }
        }
    })
    $submnu.on('click',function(evt){
        evt.preventDefault();
        Idx = $submnu.index(this);
        $('html,body').stop().animate({
            scrollTop : arrTopVal[Idx]
        },800);
    });
    

    //logo 이벤트
    $h2.on('click',function(evt){
        evt.preventDefault();
        $('html,body').stop().animate({
            scrollTop:0
        },1000)
    });
    $h2.on('mouseover',function(){
        $(this).text('SSONG SEO YEONG');
    });
    $h2.on('mouseout',function(evt){
        evt.preventDefault();
        $(this).text('SSY');
    });



    if($(window).width()<640){
        $gnb.width($('#wrap').width());
        $gnbBtn.on('click',function(evt){
            evt.preventDefault();
            $('.sub').css({display:'block'});
            if($(this).hasClass('on')){
                $('.sub').stop().animate({
                    left:'50%'
                },400)
                $(this).removeClass('on');
            }else{
                $('.sub').stop().animate({
                    left:'100%'
                },400)
                $(this).addClass('on')
            }
        })
        
    }
    
    //about me 버튼
    $pfBtn.on('click',function(evt){
        evt.preventDefault();
        Idx = $pf.index($pf)
        if($pf.eq(1).hasClass('on')){
            $pf.eq(1).fadeIn(400).removeClass('on').siblings().addClass('on').fadeOut(400);
        }else{
            $pf.eq(0).fadeIn(400).removeClass('on').siblings().addClass('on').fadeOut(400);
        }
    })
    $(window).on('scroll',function(){
        let scroll = $(this).scrollTop();
        if(scroll=$('section.aboutMe').offset().top){
            $introduce.css({
                animation: 'introduce 2s forwards',
                animationDelay: '1s'
            });
        }
    });

    //skill 이벤트
    const $skillText = $('.skill > h2 > span');
    const $skillBar = $('.skill > .score > span');
    const $skillPG = $('.skill > .programs > li');

    $(window).on('scroll',function(){
        let scroll= $(window).scrollTop();

        if(scroll>=$('.skill').offset().top){

            $skillText.parent().fadeIn(300);
            $skillPG.delay(500).fadeIn(300);
            $skillBar.delay(750).fadeIn(1200);

            $skillBar.eq(0).delay(2000).stop().animate({height:270},2500,'easeOutBack');
            $skillBar.eq(1).delay(2000).stop().animate({height:260},2500,'easeOutBack');
            $skillBar.eq(2).delay(2000).stop().animate({height:240},2500,'easeOutBack');
            $skillBar.eq(3).delay(2000).stop().animate({height:265},2500,'easeOutBack');
            $skillBar.eq(4).delay(2000).stop().animate({height:255},2500,'easeOutCubic');
            $skillBar.eq(5).delay(2000).stop().animate({height:280},2500,'easeOutCubic');
            $skillBar.eq(6).delay(2000).stop().animate({height:300},2500,'easeOutCubic');
            $skillBar.eq(7).delay(2000).stop().animate({height:270},2500,'easeOutCubic');
        }else{
            $skillText.parent().fadeOut(400);
            $skillPG.fadeOut(400);
            $skillBar.fadeOut(400);
            // $('.skill').find('span').css({display:'none'});
        }

    });


    //project 이벤트
    const $line = $('section.project > .project-con > .line');
    const $contents = $('section.project > .project-con > .contents');
    const $project = $('section.project > .project-con > .contents > ul>li>a')
    const $PJarticle = $('section.project > .pj-arti-con > article');
    const arrProject = [];
    $(window).on('scroll',function(){
        let scroll= $(window).scrollTop();
        if(scroll>=$('.project').offset().top){
            $line.stop().animate({
                width:'100%'
            },1600);
            $contents.delay(1600).fadeIn(400)
        }else{
            $line.stop().animate({
                width:'0%'
            },2000);
        }
    });
    for(let i=0;i<$project.length;i++){
        arrProject[i] = $PJarticle.eq(i).offset().top;
    }
    $project.on('click',function(evt){
        evt.preventDefault();
        IDX = $project.index(this)
        $('html,body').stop().animate({
            scrollTop : arrProject[IDX] - 60
        }); 
    });

    //clone css
    // const $clone = $('section.clone > .clone-con > .clone-contents > article > p > a');
    // const $cloneCon = $('section.clone > .clone-con > .clone-contents > article');

    // $clone.on('mouseover',function(){
    //     $cloneCon.css({
    //         backgroundColor :'#ccc'
    //     },200);
    // });

    //스크롤 맨위로
    const $aside = $('aside > .plus');
    const $asideUp = $('aside > .scrollup');

    $(window).on('scroll',function(){
        let scrollTop = $(this).scrollTop();
        const view = (scrollTop + $(this).height()) -$('.contact').offset().top
        if (view>0) {
            $('aside').css({
                marginBottom:view
            });
        }else{
            $('aside').css({
                marginBottom:0
            });
        }
        // $('aside').css({display:'none'})
        if(scrollTop>100){
            $('aside').css({display:'block'})
        }
    });

    $aside.on('click',function(evt){
        evt.preventDefault();
        if($(this).hasClass('on')){
            $asideUp.css({
                bottom:-35
            }).fadeOut(100);
            $(this).removeClass('on');
        }else{
            $asideUp.fadeIn(300).css({
                display:'block',
                bottom:10
            });
            $(this).addClass('on');
        }
    });
    $asideUp.on('click',function(evt){
        evt.preventDefault();
        $('html,body').stop().animate({
            scrollTop:0
        },500);
        $(this).css({
            bottom:-35
        }).fadeOut(100);
        $aside.removeClass('on');
    });

});