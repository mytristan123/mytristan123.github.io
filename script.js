function init(){
	
	let image = document.createElement("img");
	image.src = "flower2.png";
	document.getElementById("flower").appendChild(image);

	
	let spans = document.getElementById("rainbow").querySelectorAll(".color");
	let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

	for (var i = spans.length - 1; i >= 0; i--) {
	spans[i].style.color = colors[i];
}

	var changeSrc = function(event) {
	let filename = event.target.src.replace(/^.*[\\\/]/, '');
    if (filename == "flower1.png") {
    event.target.src = "flower2.png";
    }
	else{
	 event.target.src = "flower1.png";
	}
   };
	
   document.getElementById("event").addEventListener("mouseover", changeSrc);
	
	
}