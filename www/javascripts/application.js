// Display the native navigation bar with the title "LifeLy"
steroids.view.navigationBar.show("LifeLy");

// Set the WebView background color to white (effective on iOS only)
steroids.view.setBackgroundColor("#FFFFFF");
steroids.view.setBackgroundImage("/icons/background.png");

$(document).ready(function() {

	steroids.view.removeLoading();
});

var slowAndLinearCurlDown = new steroids.Animation({
	transition: "curlDown",
	duration: 0.7,
	curve: "linear"
});


function goto_activity() {

	var webView = new steroids.views.WebView("/views/activity/index.html");
	//slowAndLinearCurlDown.perform()
  	steroids.layers.push({
    view: webView,
    animation: slowAndLinearCurlDown
  } );
}

function goto_eatingout() {

	var webView = new steroids.views.WebView("/views/eatout/index.html");
	//slowAndLinearCurlDown.perform()
  	steroids.layers.push({
    view: webView,
    animation: slowAndLinearCurlDown
  } );
}

function goto_cooking() {

	var webView = new steroids.views.WebView("/views/cooking/index.html");
	//slowAndLinearCurlDown.perform()
  	steroids.layers.push({
    view: webView,
    animation: slowAndLinearCurlDown
  } );
}


