function openwindow(){
    str="http://www.baidu.com/";
	var X=confirm("是否打开？");
	if (X==true) {
		newwindow=prompt("输入链接：",str);
		window.open(str,'_blank','width=200px,height=200px');
	} else{
		document.write("您不打开连接或打开的连接失败！");
	};
}	

