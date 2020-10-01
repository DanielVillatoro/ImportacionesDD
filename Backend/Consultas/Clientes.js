var db = require ('../db');
exports.getClientes = function (req,resp) {
	var instruction = "execute SP_ConsultaCliente ";

	if (req.body.cliente == "") {instruction+="null,";}
	else {instruction+="'";instruction+=req.body.cliente+"',"}
	if (req.body.categoria == "") {instruction+="null,";}
	else {instruction+="'";
	instruction+=req.body.categoria+"',"}

	if (req.body.entrega == "") {instruction+="null";}
	else { instruction+="'";
	instruction+=req.body.entrega+"'"}
    
	console.log(instruction);
	db.executeSQL(instruction,function(data,err) {
		if(err) {
			console.log("[ERROR]:[Ocurrió un error en la consulta a la base de datos]")
			console.log(err)
		}else {
			console.log("[MENSAJE]:[Se realizó una consulta en la base de datos con exito]");
			console.log("	[TABLA]:[Sales.Customers]");
			resp.json(data.recordset)
		}
	});
};

// {"cliente":"PEPE","categoria":"BLOCK","entrega":"CAMION"}