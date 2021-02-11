// Validar el formulario de  login  (deberá tener un  campo email  y otro de contraseña):

// condiciones: Los  campos email  y contraseña deberán ser obligatorios. El email  deberá seguir
// el formato estándar  de los email  (Hay mucha documentación)

window.onload = function () {
	// obteniendo el email del DOM
	function validateLogin(e) {
		let errorMsj = document.getElementById("errorMsj");
		const email = document.getElementById("email").value,
			password = document.getElementById("password").value;
		const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (email === "" || password === "") {
			e.preventDefault();
			console.log("* Debe llenar los campos email y password!");
			errorMsj.innerHTML = "* Debe llenar los campos email y password!";
			errorMsj.style.display = "block";
		} else if (regexEmail.test(email) === false) {
			e.preventDefault();
			errorMsj.innerHTML = "* Correo electronico invalido o no existe!";
			errorMsj.style.display = "block";
			console.log("* Correo electronico invalido o no existe!");
		}
	}

	document
		.getElementById("btn-submit")
		.addEventListener("click", validateLogin);
};
