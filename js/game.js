$(document).ready(function() 
{

	// var player, enemy, point, score;
	var nbEnemies;

	var randomPosX = Math.random()*$(window).width();
	var randomPosY = Math.random()*$(window).height();


// //Création des éléments du jeu 
// 	function createGameElements()
// 	{

		
		// //Créer enmies
		// var i;
		// var enemy;

		// for(i=0; i<=nbEnemies; i++) 
		// {
		// 	enemy = document.createElement("div");
		// 	enemy.setAttribute("id", "enemy_" + i);
		// 	enemy.setAttribute

		// } 

		// var randomPosX = Math.random()*$(window).width();
		// var randomPosY = Math.random()*$(window).height();

		// console.log("enemy")


// 		//Créer les éléments à récolter
// 		// Créer les obstacles

// 	}	


// // Initialisation du jeu
// 	function initGame ()
// 	{
// 		//Déclarer les variables
// 		//Positionner le joueur à sa position initiale
// 	}

	//Déplacer le player
	$(window).on("keyup", function(ev) {

		var speed = 50;
		var currentPosX = $("#player").offset().left;
		var currentPosY = $("#player").offset().top;
		var newPosRight = currentPosX + speed;
		var newPosLeft = currentPosX - speed;
		var newPosTop = currentPosY - speed;
		var newPosDown = currentPosY + speed;

		var gameWidth = $("#gameContainer").width();
		var gameHeight = $("#gameContainer").height();

		var playerWidth = $("#player").width();
		var playerHeight = $("#player").height();
		




		// alert(ev.keyCode);

			if(ev.keyCode == 39) 
			{
				if((newPosRight + playerWidth) > gameWidth) 
				{
					newPosRight = gameWidth - playerWidth;
				}

				newPosRight = $("#player").css({left: newPosRight + "px"});
				
			}

			if(ev.keyCode == 37) {

				if(newPosLeft < 0) 
				{
					newPosLeft = 0;
				}

				$("#player").css({left: newPosLeft + "px"});
			}

			if(ev.keyCode == 38) {

				if(newPosTop < 0) 
				{
					newPosTop = 0;
				}

				$("#player").css({top: newPosTop + "px"});
			}

			if(ev.keyCode == 40) {

				if((newPosDown + playerWidth) > gameHeight) 
				{
					newPosDown = gameHeight - playerHeight;
				}

				$("#player").css({top: newPosDown + "px"});
			}

		console.log("Offset du perso : ");
		console.log($("#player").offset());
		console.log(gameWidth);
		console.log(newPosTop);


	})

	//faire apparêtre les bonbons
	function afficheElements()
	{
		var randomPosX = Math.random()*$(window).width();
		var randomPosY = Math.random()*$(window).height();
		var candyType = Math.floor(Math.random()*3);


		switch(candyType){
			case 0: 
				$("#bonbon").css({top: randomPosY + "px"})
				$("#bonbon").css({left: randomPosX + "px"})
				break;
				

		}

		if(candyType == 0)
		{
			$("#bonbon").css({top: randomPosY + "px"})
			$("#bonbon").css({left: randomPosX + "px"})
		}
		else {
			$("#coeur").hide();
			$("#guimauve_rose").hide();
		}

		if(candyType == 1)
		{
			$("#coeur").css({top: randomPosY + "px"})
			$("#coeur").css({left: randomPosX + "px"})
		}
		else {
			$("#bonbon").hide();
		}

		if(candyType == 2)
		{
			$("#guimauve_rose").css({top: randomPosY + "px"})
			$("#guimauve_rose").css({left: randomPosX + "px"})

			else {
			$("#bonbon").hide();
			$("#coeur").hide();
			}

		}
	}

	afficheElements();






	
	
	
	// function moveEnemies ()
	// {
	// 	//mise à jour de la position des ennemis 
	// }

	// function refreshGame() 
	// {
	// 	//Appel à la fonction moveEnnemies()
	// 	//Vérifier collision : appel à la fonction detectCollision 
	// }




	// function detectCollision ()
	// {

	// }

	// function setScore ()
	// {

	// }






});