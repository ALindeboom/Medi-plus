function header_func() {
	const header = document.getElementById("myStaticHeader");
	const sticky = header.offsetTop;
		if (window.pageYOffset > sticky) {
				header.classList.add("sticky");
		} else {
				header.classList.remove("sticky");
		}
};

window.addEventListener("scroll", function(e) {
 	header_func();
});