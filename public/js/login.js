let btn = document.querySelector('input[type=button]');
btn.onclick = function() {
	let username = document.getElementById("input-email").value;
	let password = document.getElementById("input-password").value;
	let xhr = new XMLHttpRequest();
	xhr.open('post', '/user/login');
	xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");
	xhr.send(
		`username=${username}&&password=${password}`
	);
	xhr.onreadystatechange = function() {
		if (xhr.status == 200 && xhr.readyState == 4) {
      let json = JSON.parse(xhr.responseText);
      if(json.code){
        window.location = "../index.html";
      }
		}
	};
};
