$(function() {
  var text1 = $(".text1");
  var check=0;
  var check1=0;
  var check2=0;
  var check3=0;
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 500) 
    {
      text1.removeClass("hidden");
    } 
    else 
    {
      text1.addClass("hidden");
    }
    if(scroll>=1200 && check==0)
   {
	check=1;
	var tl = new TimelineLite({delay: 1}),
    	firstBg = document.querySelectorAll('.text__first-bg'),
    	secBg = document.querySelectorAll('.text__second-bg'),
    	word  = document.querySelectorAll('.text__word');
  
  tl
    .to(firstBg, 0.2, {scaleX:1})
    .to(secBg, 0.2, {scaleX:1})
    .to(word, 0.1, {opacity:1}, "-=0.1")  
    .to(firstBg, 0.2, {scaleX:0})
    .to(secBg, 0.2, {scaleX:0});
     }
if(scroll>=4000 && check1==0)
   {
	check1=1;
	var tl = new TimelineLite({delay: 1}),
    	firstBg = document.querySelectorAll('.text51__first-bg'),
    	secBg = document.querySelectorAll('.text51__second-bg'),
    	word  = document.querySelectorAll('.text51__word');
  
  tl
    .to(firstBg, 0.2, {scaleX:1})
    .to(secBg, 0.2, {scaleX:1})
    .to(word, 0.1, {opacity:1}, "-=0.1")  
    .to(firstBg, 0.2, {scaleX:0})
    .to(secBg, 0.2, {scaleX:0});
     }
if(scroll>=5600 && check2==0)
   {
	check2=1;
	var tl = new TimelineLite({delay: 1}),
    	firstBg = document.querySelectorAll('.text52__first-bg'),
    	secBg = document.querySelectorAll('.text52__second-bg'),
    	word  = document.querySelectorAll('.text52__word');
  
  tl
    .to(firstBg, 0.2, {scaleX:1})
    .to(secBg, 0.2, {scaleX:1})
    .to(word, 0.1, {opacity:1}, "-=0.1")  
    .to(firstBg, 0.2, {scaleX:0})
    .to(secBg, 0.2, {scaleX:0});
     }
if(scroll>=6600 && check3==0)
   {
	check3=1;
	var tl = new TimelineLite({delay: 1}),
    	firstBg = document.querySelectorAll('.text53__first-bg'),
    	secBg = document.querySelectorAll('.text53__second-bg'),
    	word  = document.querySelectorAll('.text53__word');
  
  tl
    .to(firstBg, 0.2, {scaleX:1})
    .to(secBg, 0.2, {scaleX:1})
    .to(word, 0.1, {opacity:1}, "-=0.1")  
    .to(firstBg, 0.2, {scaleX:0})
    .to(secBg, 0.2, {scaleX:0});
     }

  });
});


window.onload = function(){
  
}