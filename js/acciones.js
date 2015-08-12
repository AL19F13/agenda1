// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
var basedatos=window.sqlitePlugin.opendatabase({name: "agenda.db",createFromLocation:1});

	cargarnombrecontacto();
	function cargarnombrecontacto ()
	{
		basedatos.transaction(function(ejecutar){
			var sql="sELECT nombre_contacto FROM contactos";
			ejecutar.excecuteSql(sql,undifined,function(ejecutar,resultado){
				var datoscontacto=resultado.rows.item(o);
				var actual = datoscontacto.nombre_contacto;
				$(alert).text(actual);
			});
		});
	}
	
}); 
});

