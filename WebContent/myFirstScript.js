function validateMyForm(){
	var total ="";
	var infos = [];
	for(var i = 0 ; i<document.forms[0].elements.length ; i++){
		if(document.forms[0].elements[i].value==""){
			alert("VOUS AVEZ OUBLIE D'INDIQUER UNE INFORMATION");
			total=total+document.forms[0].elements[i].value;
			return false;
		}
		else{
			infos.push(document.forms[0].elements[i].value);
		}
	}
	alert("Vous vous appelez " + infos[0] + " " + infos[1] +", vous êtes nés le " + infos[2] + " et vous êtes un " + infos[3] + " ?");
	alert("coucou");
}

function toogleFM(checkId){
	var color ="";
	var hexa ="";
	if(checkId=="male"){
		color = "red";
		hexa= "#FFF3F3";
		h1 = "Hello Sir";
	}
	else{
		color= "blue";
		hexa= "#87CEEB";
		h1="Hello Madam";
	}
	
	var borders = document.getElementsByClassName('formBloc');
	[].forEach.call(borders, function(border){
		border.style.borderColor=color;
	})
	
	var titles = document.getElementsByClassName('formTitle');
	[].forEach.call(titles, function(title){
		title.style.color=color;
	})
	
	var rectangles = document.getElementsByClassName('rectangle');
	[].forEach.call(rectangles, function(rectangle){
		rectangle.style.backgroundColor=hexa;
		rectangle.style.borderColor=color;
	})
	
	var submit = document.getElementById('submit');
	submit.style.backgroundColor=hexa;
	submit.style.borderColor=color;
	
	var headTitle = document.getElementsByTagName('h1');
	[].forEach.call(headTitle, function(head){
		head.innerHTML = h1;
	})
	
}