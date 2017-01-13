$(document).ready(function(){
    var quotes = [
    {
      author: "Elon Musk",
      quote: "When something is important enough, you do it even if the odds are not in your favor."
    },
    {
      author: "Julius Caesar",
      quote: "Name a salad after me."
    },
    {
      author: "Peter Drucker",
      quote: "The best way to predict the future is to create it."
    },
    {
      author: "H. Jackson Brown, Jr",
      quote: "The best preparation for tomorrow is doing your best today."
    },
    {
      author: "Jim Rohn",
      quote: "Happiness is not something you postpone for the future; it is something you design for the present."
    },
    {
      author: "Jimmy Dean",
      quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination."
    },
    {
      author: "Steve Jobs",
      quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it."
    },
    {
      author: "Walt Whitman", 
      quote: "Keep your face always toward the sunshine - and shadows will fall behind you."
    },
    {
      author: "Audrey Hepburn",
      quote: "Nothing is impossible, the word itself says 'I'm possible!'",
    },
    {
      author: "Buddha",
      quote: "What we think, we become.",
    },
    {
      author: "Vince Lombardi",
      quote: "Perfection is not attainable, but if we chase perfection we can catch excellence.",
    },
    {
      author: "Louis Iaeger",
      quote: "Everything I create, creates me. I work to create myself.",
    },
    {
      author: "Milton Berle",
      quote: "If opportunity doesn't knock, create a door.",
    },
    {
      author: "Charles R. Swindoll",
      quote: "Life is 10% what happens to you and 90% how you react to it.",
    },
    {
      author: "Bradley Whitford",
      quote: "Infuse your life with action. Don't wait for it to happen, make it happen.",
    },
    {
      author: "Nikos Kazanzakis",
      quote: "In order to success, we must first believe that we can.",
    },
    {
      author: "Og Mandino",
      quote: "Failure will never overtake me if my determination to succeed is strong enough.",
    },
    {
      author: "Aristotle",
      quote: "Quality is not an act, it is a habit.",
    },
    {
      author: "Ralph Marston",
      quote: "What you do today can improve all your tomorrows.",
    },
    
  ];
    var colors = [
      '#001f3f', 
      '#0074d9', 
      "#39CCCC",
      "#3D9970",
      "#2ECC40",
      "#FF851B",
      "#FF4136",
      "#85144b",
      "#F012BE",
      "#B10DC9",
      "#111111",
      "#AAAAAA"
    ];
  
    function getColor() {
      var randColor = colors[Math.floor(Math.random() * colors.length)];
      console.log("Current color: " + randColor);
      $("html").css("background-color", randColor);
      $(".tweet").css("background-color", randColor);
      $(".newQuote").css("background-color", randColor);
      $(".app").css("color", randColor);
    }
 
    function getQuote() {
      var randQuote = quotes[Math.floor(Math.random() * quotes.length)];
      var quoteTxt = randQuote.quote;
      var quoteAuthor = randQuote.author;
      $(".quoteTxt").animate({ opacity: 0 }, 500, function() {
        $(this).animate({ opacity: 1 }, 500);
        $(".quoteTxt").text(quoteTxt);  
      });
      
      $(".author").animate({ opacity: 0 }, 500, function() {
        $(this).animate({ opacity: 1 }, 500);
        $(".author").text(" - " + quoteAuthor);  
      });
      
      getColor();
    }
  
    function tweetIt() {
      var phrase =   $(".quoteTxt").text() + $(".author").text();
      var tweetUrl = 'https://twitter.com/intent/tweet?text=' +
    encodeURIComponent(phrase) +

    '.' +
    '&url=' + 'http://codepen.io/yaegz/pen/pRzzbO';
    
  window.open(tweetUrl);
    }
    
    $(".newQuote").on("click", function() {
      getQuote();
    });
  
    $(".tweet").on("click", function() {
      console.log("Tweet");
      tweetIt();
    });
  
    getQuote();
  
  });