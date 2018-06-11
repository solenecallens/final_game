(function($){
    var playerWidth;
    var playerHeight;
    var score = 0;


    var gameWidth = $("#gameContainer").width();
    var gameHeight = $("#gameContainer").height();

    console.log(gameWidth);

    playerWidth = $("#player").width();
    playerHeight = $("#player").height();

    $('.retry').hide();

    $(document).ready(function () {
        var nbEnemies;
        var randomPosX = Math.random() * $(window).width();
        var randomPosY = Math.random() * $(window).height();

        $(".ennemie").each(function(){
            $this = $(this);
            setpositionEnnemie($this);
            moveEnemies($this);
        });

        //Déplacer le player
        $(window).keyup(function(event){
            bougerPerso(event);
        });

        afficheBonbon();
    });



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

        // Déplacer vers le haut
        if (ev.keyCode == 38) {
            if (newPosTop < 0) {
                newPosTop = 0;
            }

            $("#player").css({top: newPosTop + "px"});
        }

        // Déplacer vers le bas
        if (ev.keyCode == 40) {
            if ((newPosDown + playerWidth) > gameHeight) {
                newPosDown = gameHeight - playerHeight;
            }

            $("#player").css({top: newPosDown + "px"});
        }

        var offsetPlayer = $("#player").offset();

        detectCollisionBonbon(offsetPlayer);
    }


    // Affiche un bonbon aléatoirement
    function afficheBonbon() {
    var candyType = Math.floor(Math.random() * 4);

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
                var $bonbon = $("#guimauve_jaune");
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

            case 3:
                var $bonbon = $("#pastille");
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


    // Donner une postion aléatoire de départ aux ennemies
    function setpositionEnnemie(ennemie){
        var ennemie;
        var ennemieWidth = ennemie.width();
        var ennemieHeight = ennemie.height();

        var randomPosX = Math.floor(Math.random() * ($(window).width() - ennemieWidth));
        var randomPosY = Math.floor(Math.random() * ($(window).height() - ennemieHeight));

        ennemie.css({
            top: randomPosY + "px",
            left: randomPosX + "px"
        });
    }


    // Faire descendre les ennemies
    function moveEnemies (ennemie){
        var ennemie;

        setInterval(function(){
            var ennemiePosition = ennemie.offset();
            var speed = 25;
            var direction = Math.floor(Math.random() * 4);
            var newPosition = ennemiePosition.top + speed;

            if(newPosition >= gameHeight){
                newPosition = 0;
                randomPosX = Math.floor(Math.random() * $(window).width());
                ennemie.css("left", randomPosX+'px');
            }

            ennemie.css("top", newPosition+'px');

            detectCollisionPerso(ennemiePosition);
        },  100);
    }



    // Detecte la collision si un ennemie touche le personnage
    function detectCollisionPerso(ennemiePos){
        var ennemiePos;
        var currentPosX = $("#player").offset().left;
        var currentPosY = $("#player").offset().top;
        var ennemieWidth = $(".ennemie").width();
        var ennemieHeight = $(".ennemie").height();
        var indiqueScore = "Vous avez récupéré"

        if(ennemiePos.left < currentPosX + playerWidth &&
            ennemiePos.left + ennemieWidth > currentPosX&&
            ennemiePos.top < currentPosY + playerHeight &&
            ennemiePos.top + ennemieHeight > currentPosY){

            if(score <= 1){
                $('.ennemie').hide();
                $('.candy').hide();
                $('.retry').show();
                $(".result").html("Vous avez récupéré " + score + " bonbon !");
                // alert("Perdu ! Vous avez récupéré " + score + " bonbon");


            }else{

                $('.ennemie').hide();
                $('.candy').hide();
                $('.retry').show();
                $(".result").html("Vous avez récupéré " + score + " bonbons !");
                // alert("Perdu ! Vous avez récupéré " + score + " bonbons");

            }
            

            score = 0;
            $(".currentScore").html(score);

        }
    }

    // detecte la collision si le personnage touche un bonbon
    function detectCollisionBonbon (positionPerso){
        var $currentBonbon = $(".currentBonbon");
        var bonbonWidth = $currentBonbon.width();
        var bonbonHeight = $currentBonbon.height();
        var positionBonbon = $currentBonbon.offset();

        if(positionBonbon.left < positionPerso.left + playerWidth &&
           positionBonbon.left + bonbonWidth > positionPerso.left &&
           positionBonbon.top < positionPerso.top + playerHeight &&
           positionBonbon.top + bonbonHeight > positionPerso.top){
                // Bonbon touché
                $currentBonbon.removeClass("currentBonbon");

                setScore();
                afficheBonbon();
        }
    }


    function setScore (){
        score++;
        $(".currentScore").html(score);
    }

})(jQuery);