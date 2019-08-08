$(document).ready(function(){
 
  
  $("[name=myChoice]").click(function(){
              $('.toHide').hide();
              $("#blk-"+$(this).val()).show();
       });
      
      });