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
function requestTable(Department){

	if(Department == "All")
		return JSON

	return
}

var JSON = {

	"entry0" : {
		"DeviceID" : "DeviceID",
		"UserName" : "UserName",
		"DomainName" : "DomainName",
		"OfficeID" : "OfficeID",
		"ClientVersion" : "ClientVersion",
		"Tel" : "Tel",
		"InfoID" : "InfoID",
		"OneDayValue" : "OneDayValue",
		"Registered" : "Registered",
		"DateRegistered" : "DateRegistered",
		"LastTime" : "LastTime",
		"LastOnlineTime" : "LastOnlineTime",
		"Department" : "Department",
		"OnlineMinutes" : "OnlineMinutes"
	},

	"entry1" : {
		"DeviceID" : "1290978",
		"UserName" : "NHD69971",
		"DomainName" : "DOMAIN",
		"OfficeID" : "OFFICE2201",
		"ClientVersion" : "VER 2.0",
		"Tel" : "190",
		"InfoID" : "89300291",
		"OneDayValue" : "OneDayValue",
		"Registered" : "1",
		"DateRegistered" : "5-19-00",
		"LastTime" : "5-19-15 6:00AM",
		"LastOnlineTime" : "5-19-15 8:00PM",
		"Department" : "HR",
		"OnlineMinutes" : "120"
	},

	"entry2" : {
		"DeviceID" : "1259038",
		"UserName" : "HND189938",
		"DomainName" : "DOMAIN",
		"OfficeID" : "OFFICE2203",
		"ClientVersion" : "VER 2.0",
		"Tel" : "198",
		"InfoID" : "8892029",
		"OneDayValue" : "OneDayValue",
		"Registered" : "1",
		"DateRegistered" : "3-18-14",
		"LastTime" : "5-28-15 12:00PM",
		"LastOnlineTime" : "5-28-15 6:00PM",
		"Department" : "HR",
		"OnlineMinutes" : "165"
	},

	"entry3" : {
		"DeviceID" : "2882918",
		"UserName" : "GND77381",
		"DomainName" : "DOMAIN",
		"OfficeID" : "OFFICE789",
		"ClientVersion" : "VER 2.0",
		"Tel" : "001",
		"InfoID" : "923892",
		"OneDayValue" : "OneDayValue",
		"Registered" : "0",
		"DateRegistered" : "NULL",
		"LastTime" : "NULL",
		"LastOnlineTime" : "NULL",
		"Department" : "ACCOUNTING",
		"OnlineMinutes" : "NULL"
	},

	"entry4" : {
		"DeviceID" : "8741098",
		"UserName" : "JNS180938",
		"DomainName" : "DOMAIN",
		"OfficeID" : "OFFICE789",
		"ClientVersion" : "VER 2.0",
		"Tel" : "177",
		"InfoID" : "1345645",
		"OneDayValue" : "OneDayValue",
		"Registered" : "1",
		"DateRegistered" : "1-19-05",
		"LastTime" : "3-14-10 8:00AM",
		"LastOnlineTime" : "3-14-10 5:00PM",
		"Department" : "ACCOUNTING",
		"OnlineMinutes" : "200"
	},

	"entry5" : {
		"DeviceID" : "982918",
		"UserName" : "KKJ129838",
		"DomainName" : "DOMAIN",
		"OfficeID" : "OFFICE201",
		"ClientVersion" : "VER 2.0",
		"Tel" : "110",
		"InfoID" : "93892",
		"OneDayValue" : "OneDayValue",
		"Registered" : "1",
		"DateRegistered" : "8-19-12",
		"LastTime" : "5-14-13 8:00AM",
		"LastOnlineTime" : "5-14-13 5:00PM",
		"Department" : "CLAIMS",
		"OnlineMinutes" : "320"
	}
	
};


/** ==DEPRECATED==
	Parses json and returns/updates global variables containing parsed data.
	Parameters: jsonObject - a JSON object
	Unknown return values (if any)

function parseJSON(jsonObject){
	return
}

**/