let { app, protocol, BrowserWindow } = require("electron");
let { readFile } = require("fs");
let { extname } = require("path");
let { URL } = require("url");

let createProtocol = (scheme, normalize = true) => {
	protocol.registerBufferProtocol(scheme,
		(request, respond) => {
			let pathName = new URL(request.url).pathname;

			pathName = decodeURI(pathName);

			readFile(__dirname + "/" + pathName, (error, data) => {
				let extension = extname(pathName).toLowerCase();
				let mimeType = "";
				if (extension === ".js") {
					mimeType = "text/javascript";
				} else if (extension === ".html") {
					mimeType = "text/html";
				} else if (extension === ".css") {
					mimeType = "text/css";
				} else if (extension === ".svg" || extension ===
					".svgz") {
					mimeType = "image/svg+xml";
				} else if (extension === ".json") {
					mimeType = "application/json";
				}
				respond({
					mimeType,
					data
				});
			});
		},
		(error) => {
			if (error) {
				console.error(`Failed to register ${scheme} protocol`,
					error);
			}
		}
	);
}

protocol.registerSchemesAsPrivileged([{
    scheme: 'app',
    privileges: { standard: true, secure: true, supportFetchAPI: true },
}]);


app.on("ready", () => {
	createProtocol("app");
	let browserWindow = new BrowserWindow({
		webPreferences: {
			preload: `${__dirname}/preload.js`,
			nodeIntegration: false,
			contextIsolation: true
		}
	});
	browserWindow.loadFile("index.html");
});
