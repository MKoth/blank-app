var module = ons.bootstrap('my-app', ['onsen']);

module.filter('trustUrl', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
});

module.controller('appController', function($scope, $http, $sce) {
	ons.ready(function() {
		
		
	});
});

function onSuccess(imageURI) {
    // here we can upload imageData to the server
	//alert(imageURI);
	var image = document.getElementById("myImg");
	image.src = "data:image/jpeg;base64,"+imageURI;
}
 
function onFail(message) {
    alert('Failed because: ' + message);
}