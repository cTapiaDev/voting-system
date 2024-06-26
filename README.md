# Sistema de Votación

Aplicación web que permite llenar un formulario de votación. Los datos (el voto) son almacenados en una base de datos, dejando constancia de que una persona natural solo puede ejercer su derecho a voto una sola vez.

## Lenguajes y Tecnologías

* **HTML5** 
* **CSS3** 
* **JavaScript** 
* **PHP** 
* **MySQL** 
* **MAMP** *(Apache Server & MySQL Server)*

## Validaciones

El sistema cuenta con algunas validaciones que sirven para facilitar la interacción del usuario a la hora de ingresar sus datos.

* Los campos **Nombre y Apellido** & **Alias** solo permite ingresar por teclado datos de tipo de string.
* El campo **Rut** solo acepta datos números, a excepción de la letra K que si puede ser ingresada. También tiene un *maxlength* pre-establecido, para evitar que se ingresen más números de los requeridos.
* El input de **Email** solo permite ingresar un correo que cumpla con los estandares básicos. Ya el campo de input de por si trae su propia validación, y además en el backend en PHP se encuentra la segunda validación para corroborar que efectivamente se esté enviando un email valido.
* El campo select de **Región** trae los datos por defecto (todos sacados del json en *data.js*). Lo dinamico, es que al momento de generar una región, los campos de **Comuna** y **Candidato** muestran los datos que están relacionados a la región que se encuentra seleccionada.