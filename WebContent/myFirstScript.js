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

function toogleFM(){
	alert("clicked");
	var borders = document.getElementsByClass('formBloc');
	borders.forEach(function(borders){
		borders.style.borderColor="blue";
	})
}