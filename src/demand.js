/**
 * Demand main file.
 *
 */
(function(){

//@import "../utils/utils.js"
//@import "../demand/demand.js"
//@import "../demand/queue.js"
//@import "../languages/{language}.js"

	// Settings
	Demand.settings.set("cdnUrl", "http://localhost/demand/dist/packages/");

	// Registering the available packages
	Demand.registerPackage("jquery", "latest");

	var d = function(demandString, functionToCall)
	{
		var demand = this.demand.demandObject;

		return demand.execute(demandString, functionToCall);
	};

	d.demandObject = Demand;
	// This is our only global variable
	demand = d;

})();