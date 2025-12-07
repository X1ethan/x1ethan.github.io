
function displayDate(){
	document.getElementById("date_demo").innerHTML=Date();
}


// 单行注释

/*
多行注释：
使用 window.alert() 弹出警告框。
使用 document.write() 方法将内容写到 HTML 文档中。
使用 innerHTML 写入到 HTML 元素。
使用 console.log() 写入到浏览器的控制台。

*/

function inputCheck() {
    var x, text;

    // 获取 id="numb" 的值
    x = document.getElementById("numb").value;

    // 如果输入的值 x 不是数字或者小于 1 或者大于 10，则提示错误 Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "输入错误";
    } else {
        text = "输入正确";
    }
    document.getElementById("inputdemo").innerHTML = text;
}


function validateForm(){
var x=document.forms["myForm"]["fname"].value;
if (x==null || x==""){
  alert("姓必须填写");
  return false;
  }
}


