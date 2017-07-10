import "./style.scss";

$(document).ready(function() {

  // text to animate (firstName and surName)
  let name = $('h2.text_toAnimate');
  // set display: block for text, which will be animated
  name.css("display", "block");
  // text to type
  let h3 = $("h3");

  // menu handler function invoke
  menuHandler();
  // animated header function invoke
  spliter(name, "name_animate");
  // type text function invoke
  typeText(h3);

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
      speed: 95,
      lifeLike: true,
      autoStart: false
    });
  }

});
