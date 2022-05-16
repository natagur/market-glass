let element = [];
element[1] = [3,4]; 
$(document).on ('click', '.calculator__select_choice input', function(event){

  $('.calculator__block label').removeClass('invisible');
  // console.log($(this).parent() .data('id'))
  console.log($(this).parent() .find('label') .data('id'));
  $.each(element[$(this).parent() .find('label') .data('id')], function (i, e){
   
    $('.calculator__block label[data-id="' + e + '"]').addClass('invisible');
    console.log(e);
  })
  
  
  });
  