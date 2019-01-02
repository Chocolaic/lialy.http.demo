var loader = new resLoader({
	resources : [
		'http://illyasviel.cc/assets/image/back_class_normal.png',
		'http://illyasviel.cc/assets/live2d/illya_basesuit/moc/ylia.moc',
		'http://illyasviel.cc/assets/live2d/illya_basesuit/moc/ylia.2048/texture_00.png',
		'http://illyasviel.cc/assets/live2d/illya/moc/ylia02.moc',
		'http://illyasviel.cc/assets/live2d/illya/moc/ylia02.2048/texture_00.png'
	],
	onStart : function(total){
		console.log('start:'+total);
	},
	onProgress : function(current, total){
		console.log(current+'/'+total);
		var percent = current/total*100;
		$('.progressbar').css('width', percent+'%');
		$('.progresstext .current').text(current);
		$('.progresstext .total').text(total);
	},
	onComplete : function(total){
		if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)))
		{
			window.location.href = "m_live2d.html?"+getViewCode();
		}else{
			window.location.href = "live2d.html?"+getViewCode();
		}
	}
});

loader.start();
