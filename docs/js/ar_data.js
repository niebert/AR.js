//---function converts a geolocation string into an array and return the map center array for openlayers

function docel(id) {
    return document.getElementById(id);
};

function doccr(pTagID) {
  	return document.createElement(pTagID);
};


function getModel3D(pVar) {
	var vRet = "";
	if (localStorage.getItem(pVar) === null) {
		debugLog("LocalStorage","Variable '"+pVar+"' was undefined in LocalStorage!");
		vRet = getDefaultModelAR();
	} else {
		vRet = localStorage.getItem(pVar);
	};
	return vRet;
};

//----- function return the current zoom factor of the map
function getDefaultModelAR() {
	var vOut = "";
	vOut += "<a-box position='2 2.5 2' material='color: green;opacity: 0.5'></a-box>";
	return vOut;
};

function parseJSON3D(p3Dmodel) {
	var vJSON = [];
	try {
		vJSON = JSON.parse(p3Dmodel);
	}
	catch (e) {
		alert("JSON Error: " + e);
		vJSON = [];
	};
	console.log("parseJSON3D()\n"+JSON.stringify(vJSON,null,2));
	return vJSON;
};

function toDOM3D(pRootNode,pJSON) {
	var x = null;
	var a = null;
	for (var i = 0; i < pJSON.length; i++) {
		x = pJSON[i];
		// create DOM element "a"
		a = doccr(x.tag);
		// set all attributes for "a" with x.attr
		for (var att in x.attr) {
			if (x.hasOwnProperty(attr)) {
				a.setAttribute(att,x.attr[att]);
			};
		};
		// append all childNodes
		if (x.hasOwnProperty(child)) {
			for (var i = 0; i < x.child.length; i++) {
				toDOM3D(a,x.child[i])
			}
		};
		pRootNode.appendChild(a);
	};
}

function saveModel3D(pModel3D) {
	localStorage.setItem("html3d",pModel3D);
	console.log("3D Model saved and stored in LocalStorage");
}
