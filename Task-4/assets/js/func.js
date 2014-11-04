    $(document).ready(function() {
      ShapeShift();  
    })
    $(window).load(function() {
      ShapeShift();  
    })

    function ShapeShift(){
       $(".container").shapeshift({
            minColumns: 3,
            autoHeight: false
      });
    }