// Validar el formulario de  login  (deberá tener un  campo email  y otro de contraseña):

// condiciones: Los  campos email  y contraseña deberán ser obligatorios. El email  deberá seguir
// el formato estándar  de los email  (Hay mucha documentación)

window.onload = function () {
	// obteniendo el email del DOM
	function validateLogin(e) {
		let errorMsj = document.getElementById("errorMsj");
		const email = document.getElementById("email").value,
			password = document.getElementById("password").value,
			repeatpwd = document.getElementById("repeatpwd").value,
			provincia = document.getElementById("provincia").value;
		console.log(password, repeatpwd, provincia);
		const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (email === "" || password === "" || repeatpwd == "") {
			e.preventDefault();
			errorMsj.innerHTML = "* No puede haber campos vacios.";
			errorMsj.style.display = "block";
		} else if (regexEmail.test(email) === false) {
			e.preventDefault();
			errorMsj.innerHTML = "* Correo electronico invalido o no existe!";
			errorMsj.style.display = "block";
		} else if (provincia == "") {
			e.preventDefault();
			errorMsj.style.display = "block";
			errorMsj.innerHTML = "* Debe seleccionar el campo provincia";
		} else if (password !== repeatpwd) {
			e.preventDefault();
			errorMsj.style.display = "block";
			errorMsj.innerHTML = "* Verificar las constraseñas no coinciden";
		}
	}

	document
		.getElementById("btn-submit")
		.addEventListener("click", validateLogin);
};
