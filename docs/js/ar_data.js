//---function converts a geolocation string into an array and return the map center array for openlayers
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
	vOut += "<a-marker preset=\"hiro\">";
	vOut += "<a-box position='0 0.5 0' material='color: red;opacity: 0.5'></a-box>";
	vOut += "</a-marker>";
	return vOut;
};


function saveModel3D(pModel3D) {
	localStorage.setItem("html3d",pModel3D);
	console.log("3D Model saved and stored in LocalStorage");
}
