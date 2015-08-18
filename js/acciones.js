// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){	
alert("dispositivo listo");
var basedatos=window.sqlitePlugin.openDatabase({name: "agenda.db",createFromLocation:1});
alert("despues de la base");
	cargarnombrecontacto();
	function cargarnombrecontacto ()
	{
		alert("despues de la carga");
		basedatos.transaction(function(ejecutar){
			alert("basedatos.transaction");
			var sql="SELECT * FROM contactos;";
			alert("sql");
			ejecutar.executeSql(sql,undifined,function(ejecutar,resultado){
				alert("ejecutar");
				var datoscontacto=resultado.rows.item(0);
				var nombre = datoscontacto.nombre_contacto;
				alert(nombre);
			});
		});
	}
	
}); 
});

