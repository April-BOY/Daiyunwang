let btn = document.querySelector('input[type=button]');
btn.onclick = function() {
	let username = document.getElementById("input-username").value;
	let firstname = document.getElementById("input-firstname").value;
	let lastname = document.getElementById("input-lastname").value;
	let email = document.getElementById("input-email").value;
	let telephone = document.getElementById("input-telephone").value;
	let fax = document.getElementById("input-fax").value;
	let password = document.getElementById("input-password").value;
	let confirm = document.getElementById("input-confirm").value;
	let subscribe = document.querySelector("input[type=radio]").value;
	let xhr = new XMLHttpRequest();
	xhr.open('post', '/user/reg');
	xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");
	xhr.send(
		`username=${username}&firstname=${firstname}&lastname=${lastname}&email=${email}&telephone=${telephone}&fax=${fax}&password=${password}&confirm=${confirm}&subscribe=${subscribe}`
	);
	xhr.onreadystatechange = function() {
		if (xhr.status == 200 && xhr.readyState == 4) {
			console.log(xhr.responseText);
		}
	};
};
