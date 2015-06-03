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
function tablegen(){

	var oldTable = document.getElementById("table");
	oldTable.innerHTML = "";

	var	newTable = oldTable.cloneNode(true);

	var index = document.getElementById("department");
	Department = index[index.selectedIndex].value;

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
	Returns array of calculated data (registered/unregistered, active/inactive) for the number of hardware elements within departments.
	Parameters: graphType == 0 is registered/unregistered, graphType == 1 is active/inactive
	Return value: array of object value-pairs, one for each department
**/
function requestCalc(graphType){
	
	var dep_json = {};

	key = Object.keys(JSON);
	
	result = [];
	var departments = {};
	
	if (graphType == 0){

		for(k=0; k<key.length; k++){
			if(!(JSON[key[k]].Department in departments)){
				departments[JSON[key[k]].Department] = JSON[key[k]].Department;
				result.push({department: JSON[key[k]].Department, registered:0, unregistered:0});
			}
		}
		
		for(i=0; i<key.length; i++){
			for(j=0; j<result.length; j++){
				if(JSON[key[i]].Department == result[j].department){
					if(JSON[key[i]].Registered == "1"){
						result[j].registered+=1;
					} else {
						result[j].unregistered+=1;
					}
				}
			}
		}

		return result;
	} else {
	
		for(k=0; k<key.length; k++){
			if(!(JSON[key[k]].Department in departments)){
				departments[JSON[key[k]].Department] = JSON[key[k]].Department;
				result.push({department: JSON[key[k]].Department, active:0, inactive:0});
			}
		}
		
		for(i=0; i<key.length; i++){
			for(j=0; j<result.length; j++){
				if(JSON[key[i]].Department == result[j].department){
				
					var dateString = JSON[key[i]].LastTime;
					dateString = dateString.split(' ').join('T');
					
					var lastTime = new Date(dateString);
					lastTime = lastTime.getTime();
					var today = new Date();
					today = today.getTime()
					
					if(JSON[key[i]].Registered == "1" && ((today - lastTime) < 2678000000)){ //31 days
						result[j].active+=1;
					} else {
						result[j].inactive+=1;
					}
				}
			}
		}
		
		return result;
	}
	
}

//count total registered/unregistered by department
	//returns registered unregistered by department ex: [ {department:"HR", registered:5, unregistered:3}, {department:"Accounting", registered:3, unregistered:1} ]

//count total active/inactive: inactive = Registered equipment - equipment active in the last month
	//returns active/inactive by department ex: [ {department:"HR", active:5, inactive:2}, {department:"Accounting", active:5, inactive:0} ]

/**
	Returns data to be displayed in the tables. May be called to receive fresh data.
	Parameters: province - 1st level hq, subDepartment - 2nd level hq, status - inactive or inactive hardware
	Return value: JSON of relevant info
**/
function requestTable(Department){

	var dep_json = {};

	key = Object.keys(JSON);

	if(Department == "All")
		return JSON

	else {
		for(i = 0; i < key.length; i++) {
			if(JSON[key[i]].Department == Department || JSON[key[i]].Department == "Department") {
				dep_json[key[i]] = JSON[key[i]];
			}
		}

		return dep_json
	}


	return
}

var JSON = {

	// "entry0" : {
		// "DeviceID" : "DeviceID",
		// "UserName" : "UserName",
		// "DomainName" : "DomainName",
		// "OfficeID" : "OfficeID",
		// "ClientVersion" : "ClientVersion",
		// "Tel" : "Tel",
		// "InfoID" : "InfoID",
		// "OneDayValue" : "OneDayValue",
		// "Registered" : "Registered",
		// "DateRegistered" : "DateRegistered",
		// "LastTime" : "LastTime", // YYYY-MM-DD HH:MM:SS
		// "LastOnlineTime" : "LastOnlineTime",
		// "Department" : "Department",
		// "OnlineMinutes" : "OnlineMinutes"
	// },

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
		"LastTime" : "2015-05-19 06:00:00", 
		"LastOnlineTime" : "2015-05-19 20:00:00",
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
		"LastTime" : "2015-05-28 12:00:00", 
		"LastOnlineTime" : "2015-05-28 18:00:00",
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
		"LastTime" : "2010-03-14 08:00:00",
		"LastOnlineTime" : "2010-03-14 17:00:00",
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
		"LastTime" : "2013-05-13 08:00:00",
		"LastOnlineTime" : "2013-05-13 17:00:00",
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