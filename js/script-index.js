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
	/*$(".list-recipes").append("<a class='item-recipe' href='#'><span class='attribution'><span class='title-recipe'>" 
	+ recipe.title + "</span><span class='metadata-recipe'><span class='author-recipe'>" 
	+ recipe.source.name + "</span><span class='bookmarks-recipe'><span class='icon-bookmark'></span></span></span></span><img src='../img/recipes/640x480/" 
	+ recipe.source.url + ".jpg'></a>")*/

	$(".list-recipes").append("<h2>" + recipe.title + "</h2><p>by " + recipe.source.name + "</p><img src='img/recipes/640x480/" + recipe.name + ".jpg'>")
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
		$(".list-activities").append('<a href="#" class="item-activity"><span class="attribution"><span class="avatar"><img src="' 
		+ recipe[i].userAvatar + '" class="image-avatar"></span><span class="meta"><span class="author">' 
		+ recipe[i].userName.slice(0,name)  + '</span> made <span class="recipe">' 
		+ recipe[i].recipeName + '</span>:' + recipe[i].text + '<span class="location">' 
		+ recipe[i].place + '</span></span></span><div class="bg-image" style="background-image: url(' 
		+ recipe[i].image +');"></div></a>')
	}
}


