let element = [];
//стекло
element[1] = ['4a',8,9,'11a'];
element[3] = ['4a',8,9,'11a']; 
element[4] = ['4a',8,9,10,'11a',12]; 
element[5] = ['4a',8,9,10,'11a',12,16]; 
element[6] = ['4a',8,9,10,'11a',12,14,16]; 
element[7] = ['4a',8,9,10,'11a',12,14,16];
element[10] = ['4a',8,9,10,'11a',12,14,16]; 
element[11] = ['4a',8,9,10,'11a',12,14,16]; 
element[12] = ['4a',8,9,10,'11a',12,14,16]; 
element[13] = ['4a',8,9,10,'11a',12,14,16]; 
element[14] = ['4a',8,9,10,'11a',12,14,16]; 
element[15] = ['4a',8,9,10,'11a',12,14,16]; 
element[16] = ['4a',8,9,10,'11a',12,14,16]; 

//зеркало
element[2] = ['4',3,5,6]; 
element['4a'] = ['4',3,5,6,10,11,12,13,14,15,16]; 
element[7] = ['4',3,5,6,10,11,12,13,14,15,16]; 
element[8] = ['4',3,5,6,10,11,12,13,14,15,16]; 
element[9] = ['4',3,5,6,10,11,12,13,14,15,16]; 
element['11a'] = ['4',3,5,6,10,11,12,13,14,15,16]; 
$(document).on ('click', '.calculator__block input', function(event){

  $('.calculator__block label').parent().removeClass('invisible');
  $.each(element[$(this).parent() .find('label') .data('id')], function (i, e){
   
    $('.calculator__block label[data-id="' + e + '"]').parent().addClass('invisible');
    
  });

  $('.calculator__block').removeClass('invisible-bg');
  for (let i = 0;i < $(this).parents('.calculator__block').index()+2;i++){
    console.log( i );
    $('.calculator__block').eq(i).addClass('invisible-bg');
  }
  
  
  });
  