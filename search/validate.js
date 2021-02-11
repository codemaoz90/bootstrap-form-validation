//  Condiciones: La palabra introducida deberá ser obligatoria y contener más de 3 caracteres.
window.onload = () => {
	function validateSearch(e) {
		// e.preventDefault();
		var inputSearch = document.getElementById("search").value;
		let msj = document.getElementById("msjError");
		const regex = /\w{4,}/;
		if (inputSearch == "") {
			e.preventDefault();
			msj.innerHTML = "*El campo no puede estar vacio";
			return;
		} else if (regex.test(inputSearch) === false) {
			e.preventDefault();
			msj.innerHTML = "* Debe al menos tener  3 caracteres";
			return;
		} else {
			msj.innerHTML = "Todo ok";
		}
	}

	document
		.getElementById("btn-submit")
		.addEventListener("click", validateSearch);
};
