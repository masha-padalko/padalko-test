(function($){
  jQuery.fn.hint = function(options){
        //options
        var options = $.extend({
          'delay': '1000',
          'colorThemes': 'basic',
          'animate': true
        }, options );
        var timeOut;
        $(this).on('mouseenter', function() {
          var $self = $(this);

          timeOut = setTimeout(function(){

            if (!$self.is(":hover")) {
              return false;
            }
             
            // Check exist data-attribute data-hint
            if ($self.data("hint")){
              // Hint text
              var hintText = $self.data("hint");

              // add hint in DOM
              $("body").append("<span class=hint style='display: none'>"+ hintText +"</span>");
              $('.hint').addClass(options.colorThemes);

              //check animate option
              if(options.animate){
                $('.hint').fadeIn(1000);
              } else {
                $('.hint').show();
              }

              // set position hit
              $(".hint").each(function(){
                  hintPosition($self);
              });
            }
          }, options.delay);
           
        }).on('mouseleave', function() {
            clearTimeout(timeOut);
            $(".hint").remove();
        });
        
  };
  function hintPosition(el) {
      var hint = $(".hint"),
          widthHint = hint.outerWidth(),
          heightHint = hint.outerHeight(),
          leftEl = el.offset().left,
          topEl = el.offset().top,
          ElHeight = el.outerHeight(), //height hover element
          ElWidth = el.outerWidth(); //width hover element

      var posElLeft = el.offset().left,
          posElTop = el.offset().top;

      hint.css({"top": topEl+ElHeight+5,"left": leftEl+ElWidth/2, "margin-left": -widthHint/2});

      // if hint out of screen border's
      var rightScreenBorder = $(window).width() - (hint.offset().left + widthHint),
          leftScreenBorder = hint.offset().left,
          bottomScreenBorder = $(window).height() - (hint.offset().top + heightHint);
      
      if(leftScreenBorder < 0){
        hint.addClass("posRight");
        hint.css({"left": leftEl+ElWidth+5, "top": topEl+ElHeight/2, "margin-top": -heightHint/2});
      }
      if (rightScreenBorder < 0){
        hint.addClass("posLeft");
        hint.css({"top": topEl+ElHeight/2, "left": leftEl-widthHint-5, "margin-top": -heightHint/2});
      }
      if(bottomScreenBorder < 0){
        hint.addClass("posBottom");
        hint.css({"left": leftEl+ElWidth/2, "top":topEl-heightHint-5});
      }
  }
})(jQuery);




