function main() {
// console.log(document.getElementById('tiger').value);
// console.log(document.getElementById('dog').value);
// console.log(document.getElementById('lion').value);
// console.log(document.getElementById('brown').value);
// console.log(document.getElementById('walks').value);
// console.log(document.getElementById('num').value);
// console.log(document.getElementById('speed').value);
// console.log(document.getElementById('quote').value);

		localStorage.setItem("name1", document.getElementById('tiger').value);	
		localStorage.setItem("name2", document.getElementById('lion').value);
		localStorage.setItem("name3", document.getElementById('dog').value);
		localStorage.setItem("name4", document.getElementById('speed').value);
		localStorage.setItem("name5", document.getElementById('walks').value);
		// localStorage.setItem("name6", document.getElementById('num').value);
		localStorage.setItem("name7", document.getElementById('quote').value);
		localStorage.setItem("name8", document.getElementById('alarm').value);
		localStorage.setItem("name9", document.getElementById('mean').value);
		localStorage.setItem("name10", document.querySelector("input[name='choose']:checked").value);


}

function animal()
{
	var elem=document.querySelectorAll('.nuly');
	for (var i = 0; i < elem.length; i++) 
		elem[i].innerHTML=localStorage.getItem("name1");
var elem2=document.querySelectorAll('.nuly2');
	for (var i = 0; i < elem2.length; i++) 
		elem2[i].innerHTML=localStorage.getItem("name2");

	var elem3=document.querySelectorAll('.nuly4');
	for (var i = 0; i < elem3.length; i++) 
		elem3[i].innerHTML=localStorage.getItem("name5");

	
	document.getElementById('nuly9').innerHTML = localStorage.getItem("name3");
	document.getElementById('nuly3').innerHTML = localStorage.getItem("name4");
	// // alert(name4);
	document.getElementById('nuly5').innerHTML = localStorage.getItem("name7");
	document.getElementById('nuly6').innerHTML = localStorage.getItem("name8");
	document.getElementById('nuly7').innerHTML = localStorage.getItem("name9");
	document.getElementById('nuly8').innerHTML=localStorage.getItem("name10");
}
	
 
// }


// document.getElementById("result2").innerHTML = localStorage.getItem("name2");
// document.getElementById("result3").innerHTML = localStorage.getItem("name3");
// document.getElementById("result4").innerHTML = localStorage.getItem("name4");
// document.getElementById("resul5t").innerHTML = localStorage.getItem("name5");
// document.getElementById("result6").innerHTML = localStorage.getItem("name6");
// document.getElementById("result7").innerHTML = localStorage.getItem("name7");
// document.getElementById("result8").innerHTML = localStorage.getItem("name8");