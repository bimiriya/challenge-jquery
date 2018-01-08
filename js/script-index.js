$(document).ready( function(){

	$(".hide").hide()

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	printNews()

	renderActivities(activities)

	renderActivity(activities)

});

function printNews() {
	$(".callout-news p").append("NUEVAS RECETAS")
}

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	for (var i = 0 ; i < recipesArray.length ; i++) {
		if (recipesArray[i].highlighted === true) {
			renderRecipe(recipesArray[i])
		}
	}
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	$(".list-recipes").append("<h2>" + recipe.title + "</h2><p>by " + recipe.source.name + "</p>")
}


/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activities) {
	console.log('Activities: ', activities);
	if (activities.length > 0) {
		$(".wrapper-message").remove()
	}
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	for (var i = 0 ; i < recipe.length ; i++) {
		var name = recipe[i].userName.indexOf(" ");
		$(".list-activities").append("<div><img src='" 
		+ recipe[i].userAvatar + "'><label>" 
		+ recipe[i].userName.slice(0,name) + "<span> made " 
		+ recipe[i].recipeName + "</span><p>: " 
		+ recipe[i].text + "</p><p>-" 
		+ recipe[i].place + "</p><img src='" + recipe[i].image + "'></div>")
	}
}


