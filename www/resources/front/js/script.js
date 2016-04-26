var lib = [
  	"../resources/front-vendor/jquery-ui.min.js",
   	"../resources/front-vendor/bootstrap.min.js",
	"../resources/front/js/wrap/module-modal-box.js",
	"../resources/front/js/wrap/module-modal-box.setting.js",
	"../resources/front/js/wrap/module-scroll-lock.js",
	"../resources/front/js/wrap/module-smoothscroll.js",
	"../resources/front/js/wrap/common.js",
	"../resources/front/js/wrap/app.js"
];

for(var idx in lib)
	document.write('<script src="' + lib[idx] + '"></script>');