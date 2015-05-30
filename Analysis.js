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



/**
	Generates dynamically sized table for displaying hardware data
	Unknown parameters (if any)
	Unknown return values (if any)
**/
function tablegen(){
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
function requestTable(province, subDepartment, status){
	return
}

/**
	Parses json and returns/updates global variables containing parsed data.
	Parameters: jsonObject - a JSON object
	Unknown return values (if any)
**/
function parseJSON(jsonObject){
	return
}

