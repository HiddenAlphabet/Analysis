/**
	Analysis Module
	authors - PKU Team 1
	UNIVERSITY OF OREGON
	CIS 423 - Spring 2015
	
	progress:
	tablegen (David+spencer) - ? done

	graphgen (jeremy) - not done

	requestCalc (jeremy) - not done

	requestTable (David+spencer) - not done

	parseJSON (David+spencer) - not done
**/

/**
	T. Globals
**/
var JSON_raw = ""; //not typed
var calc_store = [];


/*Returns the the size of a JSON file based on number of keys in that file*/
Object.size = function(obj) {
	var size = 0, key;
	for(key in obj) {
		if(obj.hasOwnProperty(key)) size++;
	}
	return size;
}


/**
	Generates dynamically sized table for displaying hardware data
	Unknown parameters (if any)
	Unknown return values (if any)
**/
function tablegen(Department){

	var oldTable = document.getElementById("table"),
		newTable = oldTable.cloneNode(true);

	var json = requestTable(Department);

	var keys = Object.keys(json);

	for(i = 0; i < keys.length; i++) {

		var tr = document.createElement('tr');

		for(j = 0; j < Object.size(json[keys[i]]); j++) {

			var td = document.createElement('td');
			element = Object.keys(json[keys[i]]);
			node = json[keys[i]][element[j]];
			td.appendChild(document.createTextNode(node));
			tr.appendChild(td);
			td.style.width = '200px';
		}

		newTable.appendChild(tr);
	}

	oldTable.parentNode.replaceChild(newTable, oldTable);

	return
}

/**
	Generates new echarts graphs for given data
	Parameters: companyArray - array of length 2 arrays or tuple object array
	Unknown return values (if any)
**/
function graphgen(companyArray){
	return
}

/**
	Returns array of calculated data for the number of hardware elements within provinces, subDepartments, and percentiles.
	Return value: array of length 2 arrays or tuple object array

**/
function requestCalc(){
	return
}

/**
	Returns data to be displayed in the tables. May be called to receive fresh data.
	Parameters: province - 1st level hq, subDepartment - 2nd level hq, status - inactive or inactive hardware
	Return value: JSON of relevant info
**/
function requestTable(subDepartment, status){
	return
}


/** ==DEPRECATED==
	Parses json and returns/updates global variables containing parsed data.
	Parameters: jsonObject - a JSON object
	Unknown return values (if any)

function parseJSON(jsonObject){
	return
}

**/