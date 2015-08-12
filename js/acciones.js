// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){	
alert("dispositivo listo")
var basedatos=window.sqlitePlugin.opendatabase({name: "agenda.db",createFromLocation:1});
alert("despues de la base");
	cargarnombrecontacto();
	function cargarnombrecontacto ()
	{
		alert("despues de la carga");
		basedatos.transaction(function(ejecutar){
			var sql="sELECT nombre_contacto FROM contactos";
			ejecutar.excecuteSql(sql,undifined,function(ejecutar,resultado){
				var datoscontacto=resultado.rows.item(o);
				var nombre = datoscontacto.nombre_contacto;
				alert(nombre);
			});
		});
	}
	
}); 
});

