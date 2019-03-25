function addItem() {
     var item = document.createElement("item");
     var li = document.createElement("li");
     item.innerText = document.getElementById("value").value;
	 
	 if(document.getElementById("important").checked) {
		 item.style.color = "red";
	 }
	 if(document.getElementById("groceries").checked) {
		 item.style["text-decoration"] = "underline";
	 }
	 
	 li.appendChild(item);
	 document.getElementById("list").appendChild(li);
	 document.getElementById("value").value='';
	 
 }
 
 function removeItem() {
	 var list = document.getElementById("list");
	 var number = document.getElementById("removeItem").value;
	 list.removeChild(list.childNodes[number]);
 }