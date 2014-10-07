(function($){
  jQuery.fn.hint = function(options){
        //options
        var options = $.extend({
          'delay': '1000'
        }, options );
        $(this).on('mouseenter', function() {
          
          var self = this;
          
          setTimeout(function(){
             
            // Check exist data-attribute data-hint
            if ($(self).data("hint")){
              // Hint text
              var hintText = $(self).data("hint");

              // add hint in DOM
              $("body").append("<span class=hint>"+ hintText +"</span>");
              $(".hint").each(function(){
                var hint = $(".hint"),
                    widthHint = hint.outerWidth(),
                    heightHint = hint.outerHeight(),
                    leftEl = $(self).offset().left,
                    topEl = $(self).offset().top,
                    ElHeight = $(self).outerHeight(), //height hover element
                    ElWidth = $(self).outerWidth(); //width hover element

                var posElLeft = $(self).offset().left,
                    posElTop = $(self).offset().top;

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
                
              });
            }
          }, options.delay);
           
        }).on('mouseleave', function() {
            $(".hint").remove();
        });
        
  };
})(jQuery);



