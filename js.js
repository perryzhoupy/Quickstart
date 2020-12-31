function baidu(){
	$.cookie('engine','baidu',{expires:7});
}
function sogou(){
	$.cookie('engine','sogou',{expires:7});
}
function google(){
	$.cookie('engine','google',{expires:7});
}
function bing(){
	$.cookie('engine','bing',{expires:7});
}
function finderso(){
	$.cookie('engine','finderso',{expires:7});
}

function go(){
	var se=escape($.cookie('engine'));
	var wd=$('#textBox').val();
	if(se=='baidu'){
		window.open("//www.baidu.com/s?wd=" + wd);
	}else if(se=='sogou'){
		window.open("//www.sogou.com/web?query=" + wd);
	}else if(se=='google'){
		window.open("//www.google.com?search?q=" + wd);
	}else if(se=='bing'){
		window.open("//www.bing.com/search?q=" + wd);
	}else if(se=='finderso'){
		window.open('//finderso.cmdmemz.cn/s.php?keyword=' + wd);
	}
}
function setGoogleWarn(){
		if($('#google').hasClass('mdui-tab-active')){
			$('#googleWarn').css('display','');
		}else{
			$('#googleWarn').css('display','none');
		}
		
	}
$(document).ready(function(){
	$("#textBox").keyup(function(event){
		if(event.which == 13){
			go();
		}
	});
	
	if($.cookie('engine') === null){
		baidu();
	}
	var searchEngine = new mdui.Tab("#searchEngineSelect");
	searchEngine.show($.cookie('engine'));
	setGoogleWarn();
});
