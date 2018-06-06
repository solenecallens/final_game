(function($){

    $(document).ready(function () {
        // var player, enemy, point, score;
        var nbEnemies;
        var randomPosX = Math.random() * $(window).width();
        var randomPosY = Math.random() * $(window).height();


        //Création des éléments du jeu
        // 	function createGameElements()
        // 	{


        //Créer enmies
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


        //Créer les éléments à récolter
        // Créer les obstacles

        // 	}


        // // Initialisation du jeu
        // 	function initGame ()
        // 	{
        // 		//Déclarer les variables
        // 		//Positionner le joueur à sa position initiale
        // 	}

        //Déplacer le player
        $(window).keyup(function(event){
            bougerPerso(event);
        });


        afficheBonbon();
    });


    var gameWidth = $("#gameContainer").width();
    var gameHeight = $("#gameContainer").height();

    var playerWidth = $("#player").width();
    var playerHeight = $("#player").height();

    // Faire bouger le perso en fonction de la touche appuyee
    function bougerPerso(ev){
        var speed = 50;

        var currentPosX = $("#player").offset().left;
        var currentPosY = $("#player").offset().top;

        var newPosRight = currentPosX + speed;
        var newPosLeft = currentPosX - speed;
        var newPosTop = currentPosY - speed;
        var newPosDown = currentPosY + speed;



        // Déplacer vers la droite
        if (ev.keyCode == 39) {
            if ((newPosRight + playerWidth) > gameWidth) {
                newPosRight = gameWidth - playerWidth;
            }
            $("#player").css({left: newPosRight + "px"});
        }

        // Déplacer vers la gauche
        if (ev.keyCode == 37) {
            if (newPosLeft < 0) {
                newPosLeft = 0;
            }
            $("#player").css({left: newPosLeft + "px"});
        }

        // Déplacer vers la haut
        if (ev.keyCode == 38) {
            if (newPosTop < 0) {
                newPosTop = 0;
            }

            $("#player").css({top: newPosTop + "px"});
        }

        // Déplacer vers la bas
        if (ev.keyCode == 40) {

            if ((newPosDown + playerWidth) > gameHeight) {
                newPosDown = gameHeight - playerHeight;
            }

            $("#player").css({top: newPosDown + "px"});
        }

        var offsetPlayer = $("#player").offset();

        detectCollision(offsetPlayer);
    }


    // Affiche un bonbon aléatoirement
    function afficheBonbon() {
        var candyType = Math.floor(Math.random() * 3);

        switch (candyType) {
            case 0:
                var $bonbon = $("#bonbon");
                var bonbonWidth = $bonbon.width();
                var bonbonHeight = $bonbon.height();

                var randomPosX = Math.floor(Math.random() * ($(window).width() - bonbonWidth));
                var randomPosY = Math.floor(Math.random() * ($(window).height() - bonbonHeight));

                $bonbon.addClass("currentBonbon");
                $bonbon.css({
                    top: randomPosY + "px",
                    left: randomPosX + "px"
                });
                break;

            case 1:
                var $bonbon = $("#coeur");
                var bonbonWidth = $bonbon.width();
                var bonbonHeight = $bonbon.height();

                var randomPosX = Math.floor(Math.random() * ($(window).width() - bonbonWidth));
                var randomPosY = Math.floor(Math.random() * ($(window).height() - bonbonHeight));

                $bonbon.addClass("currentBonbon");
                $bonbon.css({
                    top: randomPosY + "px",
                    left: randomPosX + "px"
                });
                break;

            case 2:
                var $bonbon = $("#guimauve_rose");
                var bonbonWidth = $bonbon.width();
                var bonbonHeight = $bonbon.height();

                var randomPosX = Math.floor(Math.random() * ($(window).width() - bonbonWidth));
                var randomPosY = Math.floor(Math.random() * ($(window).height() - bonbonHeight));
                $bonbon.addClass("currentBonbon");
                $bonbon.css({
                    top: randomPosY + "px",
                    left: randomPosX + "px"
                });
                break;

            default:
                break;
        }
    }

    function moveEnemies (){
        //mise à jour de la position des ennemis
    }

    function refreshGame(){
        //Appel à la fonction moveEnnemies()
        //Vérifier collision : appel à la fonction detectCollision
    }

    var score = 0;

    function detectCollision (positionPerso){
        var $currentBonbon = $(".currentBonbon");
        var bonbonWidth = $currentBonbon.width();
        var bonbonHeight = $currentBonbon.height();
        var positionBonbon = $currentBonbon.offset();

        console.log(positionBonbon.left, positionPerso.left, positionBonbon.left + bonbonWidth);

        if(positionBonbon.left <= positionPerso.left && positionPerso.left <= positionBonbon.left + bonbonWidth){
            if(positionBonbon.top <= positionPerso.top && positionPerso.top <= positionBonbon.top + bonbonHeight){
                // Bonbon touché
                $currentBonbon.removeClass("currentBonbon");
                score++;
                $(".currentScore").html(score);

                afficheBonbon();
            }
        }


    }

    function setScore (){

    }

})(jQuery);

