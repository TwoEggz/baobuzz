+(function($){$('.m-search').on('click',function(){$('.search-form').slideToggle(200,function(){if($('.m-search').css('display')=='block'){$('.search-form .form-control').focus()}})})
if($('body').hasClass('search-results')){var val=$('.search-form .form-control').val()
var reg=eval('/'+val+'/i')
$('.excerpt h2 a, .excerpt .note').each(function(){$(this).html($(this).text().replace(reg,function(w){return '<span style="color:#FF5E52;">'+w+'</span>'}))})}
$('.navmore').on('click',function(){$('body').toggleClass('navshows');})})(jQuery)
function so(){var word=$('.form-control').val();word=word.replace(/^\s+|\s+$/g,"");$('.search-form').attr('action','/so/'+word+'/0.html');$('.search-form').submit();}
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create','UA-76290221-4','auto');ga('send','pageview');