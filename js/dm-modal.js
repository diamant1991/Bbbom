
$(document).ready(function(){
						   		   
$('.poplight').click(function(){
   		if($('.popup_block').css('display')=='none'){
	   		$('.popup_block').attr({'display':'block'})
	        $('#fade-2, .popup_block').show()
	        
	  	}
	  	else{
   			$('.form_mask').css({'display':'none'})
   		
   			$('.popup_block').attr({'display':'none'})
        	$('#fade-2, .popup_block').hide()
	  	}
	})
$(document).mouseup(function (e) {
    var container = $(".popup_block");
   	var form=$("#fade-2");
    if (container.has(e.target).length === 0){
        container.hide();
        form.hide();
       
    }
});
	
});