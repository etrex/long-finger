document.querySelector('body').addEventListener("mousemove", function(e){
	var target = e.target;
	var cursor = window.getComputedStyle(target,null).getPropertyValue("cursor");
	if(cursor == "pointer"){
		target.classList.add("longFinger");
	}
});
