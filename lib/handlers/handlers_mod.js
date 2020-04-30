const bd = require("mariadb");

exports.muestraDorsal = async (dorsal) => {
	let conn;
	try {
		conn = await require("../conn.js");
		var datos = conn.query(
			`SELECT nombre, apellido, dorsal, nacionalidad FROM datos_jugadores WHERE dorsal=${dorsal}`
		);
		return datos;
		console.log(datos);
	} catch (err) {
		throw err;
	} finally {
		if (conn) {
			conn.end();
		}
	}
};
