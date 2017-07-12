import "./style.scss";

$(document).ready(function() {

  // text to animate (firstName and surName)
  let name = $('h2.text_toAnimate');
  // text to type
  let h3 = $("h3");
  // animated arrow
  const arrow = $(".arrow_down");

  // menu handler function invoke
  menuHandler();
  // animated header function invoke
  spliter(name, "name_animate");
  // type text function invoke
  typeText(h3);

  // arrow Handler
  arrowHandler();

  function menuHandler(){
    $('#toggle').click(function() {
      $(this).toggleClass('toggle-active');
      $('#overlay').toggleClass('nav-active');
    });

    $('#overlay ul li a').click(function(event) {
      $('#toggle').toggleClass('toggle-active');
      $('#overlay').toggleClass('nav-active');
    });
  }


  function spliter(toSplit, spanClass) {
    // set display: block for text, which will be animated
    name.css("display", "block");
    let splitedText = toSplit.text().split("");
    toSplit.text("");
    for (let i = 0; i < splitedText.length; i++) {
      let span = $('<span class=' + spanClass + '><span>').text(splitedText[i]);
      toSplit.append(span);
    }
  }

  function typeText(textToType){
    textToType.typeIt({
      startDelay: 3000,
      speed: 90,
      lifeLike: true,
      autoStart: false
    });
  }


  function arrowHandler(){
    let timeoutID = setTimeout(function () {
      arrow.css("display", "block");
    }, 11000);

    // scroll effect to second section (ABOUT)
    arrow.on("click", function(){
      $('html,body').animate({
        scrollTop: $("#about").offset().top},
        1000);
      });
    }

  });
