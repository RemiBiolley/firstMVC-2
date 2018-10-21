/**
 * 
 */

function f1(){
	jQuery(document).ready(function(){
		$('h1').html("Nouveau titre");
	})
}

function f2(){
	jQuery(document).ready(function(){
		$('div').html("Nouveau texte");
	})
}

function f3(){
	jQuery(document).ready(function(){
		$('div').append(" pour une nouvelle vie");
	})
}

function f4(){
	jQuery(document).ready(function(){
		$('title').html("Nouveau nom de page");
	})
}

function f5(){
	jQuery(document).ready(function(){
		$('div').toggle("fast");
	})
}
