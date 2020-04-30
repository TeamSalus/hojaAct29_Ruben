const handlers_mod = require("./handlers_mod.js");
const path = require("path");

exports.pideDorsal = (req, res) => {
	res.sendFile("dorsal.html", { root: path.join(__dirname, "../../public") });
};

exports.muestraDorsal = async (req, res) => {
	var dorsal = req.body.dorsal;
	if (!dorsal) {
		res.sendFile("dorsal2.html", {
			root: path.join(__dirname, "../../public"),
		});
	} else {
		var datos = await handlers_mod.muestraDorsal(req.body.dorsal);
		if (datos.length > 0) {
			res.render("jugadorDetectado", { registros: datos });
		} else {
			res.sendFile("dorsal2.html", {
				root: path.join(__dirname, "../../public"),
			});
		}
	}
};

exports.error404 = (req, res) => {
	//let url = "http://" + req.hostname + ":" + port + req.path;
	let url = `${req.protocol}://${req.hostname}:${req.app.get("port")}${
		req.path
	}`;
	res.status(404);
	res.render("404", { url: url });
};

exports.error500 = (err, req, res, next) => {
	res.status(500);
	res.render("500", { error: err.message });
};
