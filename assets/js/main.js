
document.getElementById("btn-enviar").addEventListener('click', function(){
	event.preventDefault();
	
	//Se borra los textos creados cada vez que se aprete el boton-send
	document.querySelectorAll("small").forEach(function(small) {small.remove()});

	var inputNombre = document.getElementById('name');
	var inputEmail = document.getElementById('email');
	var inputTexto = document.getElementById('caja-texto');

	
	var Correo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	validarNombre(inputNombre);
	validarEmail(inputEmail);
	validarTexto(inputTexto);

});


function validarNombre(inputNombre) { 
	var letrasNombre = /^[A-Za-z]+$/;   
	if(inputNombre.value.match(letrasNombre)){  
		return true;  
	} else {  
		inputNombre.value = "";
		var rellenarText = document.createTextNode("Please fill out this field");
		var labelError = document.createElement('small');
		labelError.classList.add('error');
		labelError.appendChild(rellenarText);
		document.getElementById("nombre1").appendChild(labelError);
	}  
} 

function validarEmail(inputEmail){  
	var formatoCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(inputEmail.value.match(formatoCorreo)){  
		return true;  
	} else {  
		inputEmail.value = "";
		var rellenarText = document.createTextNode("Please fill out this field");
		var labelError = document.createElement('small');
		labelError.classList.add('error');
		labelError.appendChild(rellenarText);
		document.getElementById("email1").appendChild(labelError);
	}  
} 

function validarTexto(inputTexto){
	var valueTexto = inputTexto.value.length;
	if(valueTexto == 0){
		inputTexto.value = "";
		var rellenarText = document.createTextNode("Please fill out this field");
		var labelError = document.createElement('small');
		labelError.classList.add('error');
		labelError.appendChild(rellenarText);
		document.getElementById("texto1").appendChild(labelError);
		
	} else{
		return true;
	}
}

