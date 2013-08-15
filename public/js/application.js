$(document).ready(function(){

  $('#get_color').on('click', function(){

    // var current_colors = $('ul li').css('color');
    // console.log(current_colors);

    $.ajax({
      type: 'POST',
      url: '/color',
    }).done(function(response){
      console.log(response); //why isn't this json? post request?
        console.log($("#color_me"));
      // change html/css with jquery
    });
  });

});
