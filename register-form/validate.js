// Validar el formulario de  login  (deberá tener un  campo email  y otro de contraseña):

// condiciones: Los  campos email  y contraseña deberán ser obligatorios. El email  deberá seguir
// el formato estándar  de los email  (Hay mucha documentación)

window.onload = function () {
	// obteniendo el email del DOM
	function validateLogin(e) {
		let lista = document.getElementById("lista");
		// console.log(lista);
		let errorMsj = document.getElementById("errorMsj");
		const email = document.getElementById("email").value,
			password = document.getElementById("password").value,
			repeatpwd = document.getElementById("repeatpwd").value,
			provincia = document.getElementById("provincia").value;

		const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
		if (email === "" || password === "" || repeatpwd == "") {
			e.preventDefault();
			const msj = document.createElement("li");

			msj.innerHTML = "No puede haber campos vacios.";
			lista.appendChild(msj);
			errorMsj.style.display = "block";
		} else if (regexEmail.test(email) === false) {
			e.preventDefault();
			const msj = document.createElement("li");

			msj.innerHTML = "Correo electronico invalido o no existe!";
			lista.appendChild(msj);
			errorMsj.style.display = "block";
		} else if (provincia == "") {
			e.preventDefault();
			const msj = document.createElement("li");

			msj.innerHTML = "* Debe seleccionar el campo provincia";
			lista.appendChild(msj);
			errorMsj.style.display = "block";
		} else if (regexPassword.test(password) === false) {
			e.preventDefault();

			const arrayMensajes = [
				"La contraseña debe contenener:",
				"Minimo 1 mayuscula",
				"Minimo un numero",
				"Minimo 8 caracteres ",
			];

			arrayMensajes.map((m) => {
				var li = document.createElement("li");
				li.innerText = m;
				lista.appendChild(li);
			});
			console.log(lista);
			errorMsj.style.display = "block";
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
