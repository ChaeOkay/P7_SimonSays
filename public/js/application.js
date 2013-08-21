$(document).ready(function(){
  $('#get_color').on('click', function(){

    $.ajax({
      type: 'POST',
      url: '/color'

    }).done(function(response){
     $("ul li").eq(response.cell).css("background-color", response.color);

    }).success(function(data, textStatus, jqXHR){
      console.log(textStatus + " " + data.cell + " " + data.color);
    });

  });
});
