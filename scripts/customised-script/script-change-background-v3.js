window.onload = function() {
  var content = window.parent.window.parent.document.getElementsByClassName('main-container');
  content[0].style.width = "1300px";
};

(function(w){
	var content = window.document.getElementsByTagName('body');
	var container = window.document.getElementById("sas-relDiv_8544808");
	container.onload{
		//content[0].style.width = "1300px";
		alert(content.length);
	}
})(window.top);