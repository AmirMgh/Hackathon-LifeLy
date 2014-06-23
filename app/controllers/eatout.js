var eatingout_images = [
"picture-eatingout1.png",
"picture-eatingout2.png",
"picture-eatingout3.png",
"picture-eatingout4.png"
];

function get_randomimage(images) {
  var image_number = 0;
  var rand = 60/images.length;
  var currentdate = new Date();
  image_number = currentdate.getSeconds();
  image_number = Math.floor(image_number/rand);
  return (images[image_number]);
}

function change_eating() {
	document.getElementById("eatout_container").style.backgroundImage = 'url(/icons/'+ get_randomimage(eatingout_images) +')';
}

