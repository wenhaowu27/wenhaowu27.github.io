
  $( document ).ready(function() {
    
    project = [
        {
        img: "./assets/project_img/CrystallCollectionGuessingGame.png",
        link: "https://wenhaowu27.github.io/unit-4-game/",
        name: "Crystal Collection"
        },
        {
          img: "./assets/project_img/4digits_Game.png",
          link:"https://wenhaowu27.github.io/4digit_game/",
          name: "Bulls & Cows"
        },
        {
          img: "./assets/project_img/passwpordGenerator.png",
          link: "https://wenhaowu27.github.io/password_generator/",
          name: "Password Generator"
        },
        {
          img: "./assets/project_img/survey.jpg",
          link: "https://immense-beyond-03179.herokuapp.com/survey",
          name: "Friend Finder"
        },
        {
          img: "./assets/project_img/bamazon_nodejs.jpg",
          link: "https://wenhaowu27.github.io/bamazon/",
          name: "Bamazon"
        },
        {
          img: "./assets/project_img/giftastic.png",
          link: "https://wenhaowu27.github.io/Giftastic/",
          name: "GiFtastic"
        },
        {
          img: "./assets/project_img/liri_nodejs.jpg",
          link: "https://wenhaowu27.github.io/unit-10-liri-nodejs/",
          name: "Liri-NodeJs"
        },
        {
          img:"./assets/project_img/onecommunity.jpg",
          link:"https://one-community.herokuapp.com/",
          name:"One Community"
          },
          {
          img:"./assets/project_img/reactbooksearch.jpg",
          link:"https://stark-anchorage-35537.herokuapp.com/",
          name:"React-Book Search"
          },
          {
          img:"./assets/project_img/reactclickygame.jpg",
          link:"https://warm-mountain-34639.herokuapp.com/",
          name:"React-Clicky Game"
          },
          {
          img:"./assets/project_img/Scrap_mongo_handlebars.jpg",
          link:"https://secure-hamlet-27486.herokuapp.com/",
          name:"All the News That's Fit to Scrape"
          },
          {
          img:"./assets/project_img/Eat-Da-Burger.jpg",
          link:"https://peaceful-badlands-67350.herokuapp.com/",
          name:"Eat-The-Burger"
          },
          {
          img:"./assets/project_img/triviagame.jpg",
          link:"https://wenhaowu27.github.io/TriviaGame/",
          name:"Trivia Game"
          },
          {
          img:"./assets/project_img/wonderkitchen.png",
          link:"https://wonderktich.herokuapp.com/login",
          name:"Wonder Kitchen"
          },
          {
          img:"./assets/project_img/wordguessinggame.jpg",
          link:"https://wenhaowu27.github.io/Word-Guess-Game/",
          name:"Word Guessing Game"
          },
          {
            img:"./assets/project_img/imageaggregator.png",
            link:"https://wenhaowu27.github.io/ImageAggregator/",
            name: "Image Aggregator"
          }
      ]

      for (let i = 0; i < project.length; i++){     
        var newflip = $("<div>");
        var newcard = $("<div class='flip-card-inner'>");
        var newcardFront = $("<div class='flip-card-front'>");
        var newcardBack = $("<div class='flip-card-back newprojimg'>")
       //create image dynamically
        var newimg = $("<img>");
        newflip.addClass("flip-card project_img")
        newimg.addClass("newprojimg");
        newimg.attr("src", project[i].img);
        //attach image t0 flip side
        newcardBack.append(newimg);
        //create link dynamically
        var newLink = $("<a>").attr("href", project[i].link) ;
        var newText = $("<div>");
        newText.text(project[i].name).css("color","white");
        //attach link to image
        newimg.wrap(newLink)
        newcardBack.append(newLink);
        newcardFront.append(newText);
        newcard.append(newcardFront, newcardBack);
        newflip.append(newcard);
        $("#projects").append(newflip);
      
      } 

  });
  
  