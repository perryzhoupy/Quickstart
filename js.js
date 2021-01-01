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
function yandex(){
	$.cookie('engine','yandex',{expires:7});
}
function duckduckgo(){
	$.cookie('engine','duckduckgo',{expires:7});
}
function dogedoge(){
	$.cookie('engine','dogedoge',{expires:7});
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
	}else if(se=='yandex'){
		window.open('//yandex.com/search/?text=' + wd);
	}else if(se=='duckduckgo'){
		window.open('//duckduckgo.com/?q=' + wd);
	}else if(se=='dogedoge'){
		window.open('//www.dogedoge.com/results?q=' + wd);
	}
}

function rLS(){
	var text=$('#textBox').val();
	$.cookie('text',text,{expires:7});
}
function rLSStart(){
	$('#textBox').val($.cookie('text'));
	$('#rememberText')[0].checked = 'true';
}
function setGoogleWarn(){
		if($('#google').hasClass('mdui-tab-active')){
			$('#googleWarn').css('display','');
		}else{
			$('#googleWarn').css('display','none');
		}
		
	}
	function setDdgWarn(){
		if($('#duckduckgo').hasClass('mdui-tab-active')){
			$('#ddgWarn').css('display','');
		}else{
			$('#ddgWarn').css('display','none');
		}
		
	}
	
function saveSettings(){
	$.cookie('settingRememberText',$('#rememberText')[0].checked,{expires:1145141919810});
}
	
$(document).ready(function(){
	
	if(window.screen.availHeight * window.screen.availWidth < 200000){
		$('#yandex').hide();
		$('#duckduckgo').hide();
		$('#dogedoge').hide();
		$('#google').hide();
	}else if(window.screen.availHeight * window.screen.availWidth < 600000){
		$('#yandex').hide();
		$('#duckduckgo').hide();
		$('#dogedoge').hide();
	}
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
	setDdgWarn();
	if($.cookie('settingRememberText')=='true'){
		
		rLSStart();
	}
	
	var inst = new mdui.Fab('#fab');
	addEventListener('change',rLS);
});
