const handlers_mod = require("./handlers_mod.js");
const path = require("path");

exports.pideDorsal = (req, res)=>{
	res.sendFile("dorsal.html", {root: path.join(__dirname, "../../public")});
}

exports.muestraDorsal = async (req, res)=>{
	var datos = await handlers_mod.muestraDorsal(req.cuerpo);
	if (datos) {
		res.send("existe el usuario");
	} else {
		res.redirect("/");
	}
}

exports.error404 = (req, res)=>{
	//let url = "http://" + req.hostname + ":" + port + req.path;
	let url = `${req.protocol}://${req.hostname}:${req.app.get("port")}${req.path}`
	res.status(404);
	res.render("404", {url: url});
}

exports.error500 = (err, req, res, next)=>{
	res.status(500);
	res.render("500",{error : err.message});
}