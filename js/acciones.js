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
	$('#btnguardar').on('tap'),(function(){
		var nombre=$('#nombre_contacto').val();
		var ap_pater=$('#apellido_paterno').val();
		var ap_mater=$('#apellido_materno').val();
		var cp=$('#codigo_postal').val();
		var correo=$('#correo_electronico').val();
		var fecha_na=$('#fecha_nacimiento').val();
		var direc=$('#direccion').val();
		basedatos.transaction(function(consulta){
			consulta.executeSql("INSERT INTO contactos VALUES (id, nombre, ap_pater, apmater, cp, correo, fecha_na, direc")
	});
}); 
});
});
