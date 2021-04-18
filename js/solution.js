$(document).ready(function(){
	// slide
	var n=1;
	var t=7000;
	$("#slider ul:nth-child("+(n)+")").attr("style","opacity:1");
	$("#slider ul:nth-child("+(n+1)+")").attr("style","opacity:1;left:920px;");
	var idTimeOut = setInterval(function(){
		if(n==3) {
			$("#slider ul:nth-child("+n+")").animate({left:"-920px"},1000,function(){});
			n=1;
			$("#slider ul:nth-child("+(n)+")").attr("style","opacity:1;left:920px;");
			$("#slider ul:nth-child("+n+")").animate({left:"0px"},1000,function(){});
			$("#slider ul:nth-child("+(n+1)+")").attr("style","opacity:1;left:920px;");
			return;
		}
		$("#slider ul:nth-child("+(n)+")").attr("style","opacity:1");
		$("#slider ul:nth-child("+(n+1)+")").attr("style","opacity:1;left:920px;");
		$("#slider ul:nth-child("+n+")").animate({left:"-920px"},1000,function(){
		});
		$("#slider ul:nth-child("+(n+1)+")").animate({left:"0px"},1000,function(){
			$("#slider ul:nth-child("+(n-1)+")").attr("style","opacity:0");
		});
		n++;
	},t);
	$(".next").click(function(){
		clearInterval(idTimeOut);
		$(".next").hide();
		if(n==3) {
			$("#slider ul:nth-child("+n+")").animate({left:"-920px"},1000,function(){});
			n=1;
			$("#slider ul:nth-child("+(n)+")").attr("style","opacity:1;left:920px;");
			$("#slider ul:nth-child("+n+")").animate({left:"0px"},1000,function(){});
			$("#slider ul:nth-child("+(n+1)+")").attr("style","opacity:1;left:920px;");
			setTimeout(function(){
			$('.next').show();
			},1100)
			return;
		}
		$("#slider ul:nth-child("+(n)+")").attr("style","opacity:1");
		$("#slider ul:nth-child("+(n+1)+")").attr("style","opacity:1;left:920px;");
		$("#slider ul:nth-child("+n+")").animate({left:"-920px"},1000,function(){
		});
		$("#slider ul:nth-child("+(n+1)+")").animate({left:"0px"},1000,function(){
		});
		n++;
		setTimeout(function(){
			$('.next').show();
		},1100)
	})
	$(".prev").click(function(){
		clearInterval(idTimeOut);
		$(".prev").hide();
		if(n==1) {
			$("#slider ul:nth-child("+n+")").animate({left:"920px"},1000,function(){});
			n=3;
			$("#slider ul:nth-child("+(n)+")").attr("style","opacity:1;left:-920px;");
			$("#slider ul:nth-child("+n+")").animate({left:"0px"},1000,function(){});
			$("#slider ul:nth-child("+(n-1)+")").attr("style","opacity:1;left:-920px;");
			setTimeout(function(){
			$('.prev').show();
			},1100)
			return;
		}
		$("#slider ul:nth-child("+(n-1)+")").attr("style","opacity:1");
		$("#slider ul:nth-child("+(n-1)+")").attr("style","opacity:1;left:-920px;");
		$("#slider ul:nth-child("+(n)+")").animate({left:"920px"},1000,function(){
		});
		$("#slider ul:nth-child("+(n-1)+")").animate({left:"0px"},1000,function(){
		});
		n--;
		setTimeout(function(){
			$('.prev').show();
		},1100)
	});
	// slide
});