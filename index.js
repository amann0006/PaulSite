var table;
function init(){
	table = document.getElementById("table");	
}

function addTask(){
	var date = new Date();
	var dd = date.getDate();
    var mm = date.getMonth()+1; //January is 0!
    var yyyy = date.getFullYear();
    if(dd<10) {
    dd = '0'+dd
    } 
    if(mm<10) {
    mm = '0'+mm
    } 
    date = mm + '/' + dd + '/' + yyyy;
	var taskDes = document.getElementById("taskDes").value;
	var taskDed = document.getElementById("taskDed").value;
	var taskCat = document.getElementById("taskCat").value;	
	var row = document.createElement("tr");
	var c1 = document.createElement("td");
	var c2 = document.createElement("td");
	var c3 = document.createElement("td");
	var c4 = document.createElement("td");
	var c5 = document.createElement("INPUT");
	
	console.log(date, taskDes, taskDed, taskCat);
	
	c1.innerHTML = date;
	c2.innerHTML = taskDes;
	c3.innerHTML = taskDed;
	c4.innerHTML = taskCat;
	c5.type = "checkbox";
	
	row.appendChild(c1);
	row.appendChild(c2);
	row.appendChild(c3);
	row.appendChild(c4);
	row.appendChild(c5);
	
	table.appendChild(row);
}