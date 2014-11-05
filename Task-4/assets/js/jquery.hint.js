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

          var hintText = $self.data("hint");

          timeOut = setTimeout(function(){

            // add hint in DOM
            $self.append("<span class=hint>"+ hintText +"</span>");
            $self.css("position", "relative");

            if (!$self.is(":hover")) {
              return false;
            }
             
            // Check exist data-attribute data-hint
            if ($self.data("hint")){
              // Hint text
              

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
          ElHeight = el.outerHeight(), //height hover element
          ElWidth = el.outerWidth(); //width hover element

      var posElLeft = el.offset().left,
          posElTop = el.offset().top;

      hint.on('mouseenter', function() {
        $(this).remove();
      });

      hint.css({"top": ElHeight+5, "margin-left": -widthHint/2});

      // if hint out of screen border's
      var rightScreenBorder = $(window).width() - (hint.offset().left + widthHint),
          leftScreenBorder = hint.offset().left,
          bottomScreenBorder = $(window).height() - (hint.offset().top + heightHint);
      
      if(leftScreenBorder < 0){
        hint.addClass("posRight");
        hint.css({"left": ElWidth+5, "top": "50%", "margin-top": -heightHint/2});
      }
      if (rightScreenBorder < 0){
        hint.addClass("posLeft");
        hint.css({"top": "50%", "right": ElWidth+5, "left":"auto", "margin-top": -heightHint/2});
      }
      if(bottomScreenBorder < 0){
        hint.addClass("posBottom");
        hint.css("top",-heightHint-5);
      }
  }
})(jQuery);




