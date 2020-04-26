const handlers_mod = require("./handlers_mod.js");
const path = require("path");


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