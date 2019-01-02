function getViewCode()
{
	var date= new Date();
	var time=date.getMonth()+date.getDate()+date.getHours();
	var addr=returnCitySN['cip'];
	var code=hex_md5(encodeURIComponent(time+addr));
	return code;
}