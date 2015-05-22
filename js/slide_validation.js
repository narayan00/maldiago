$(document).ready(function() {
                $('#slider').rhinoslider({
                    controlsPlayPause: false,
                    showControls: 'always',
                    showBullets: 'always',
                    controlsMousewheel: false,
                    prevText: 'Back',
                    nextText:'Continue',
		    slidePrevDirection: 'toRight',
		slideNextDirection: 'toLeft'
                });


                $(".rhino-prev").hide();
                $('.rhino-next').after('<a class="form-submit" href="javascript:void(0);" >Continue</a>');
                $(".rhino-next").hide();




                //var info = ["PERSONAL DETAILS","ACCOUNT DETAILS","CONTACT DETAILS","higher"];
                var images = ["personal-details-icon.png","account-details.png","contact-details.png","contact-details.png"];
                $('.rhino-bullet').each(function(index){
                    $(this).html('<p style="margin: 0pt; font-size: 13px; font-weight: bold;"><img src="./img/'+
                        images[index]+'"></p><p class="bullet-desc">'+info[index]+'</p></a>');
                });





            });

            $('.form-submit').live("click",function(){

                $('.form-error').html("");

                var current_tab = $('#slider').find('.rhino-active').attr("id");

                switch(current_tab){
                    case 'rhino-item0':
                        step1_validation();
                        break;
                    case 'rhino-item1':
                        step2_validation();
                        break;
                    case 'rhino-item2':
                        step3_validation();
                        break;
						
					case 'rhino-item3':
					step4_validation();
					break;
					
					case 'rhino-item4':
					step5_validation();
					break;
					
					
					case 'rhino-item5':
					step6_validation();
					break;
					
					case 'rhino-item6':
					step7_validation();
					break;
					
					case 'rhino-item7':
					step8_validation();
					break;
					
					case 'rhino-item8':
					step9_validation();
					break;
					
					case 'rhino-item9':
					step10_validation();
					break;
					
					case 'rhino-item10':
					step11_validation();
					break;
					
					case 'rhino-item11':
					step12_validation();
					break;
					
					case 'rhino-item12':
					step13_validation();
					break;
						
						
                }
				
				
            });

            var step1_validation = function(){

                var err = 0;

              if($('input[name="where_you_are"]:checked').length==0){
                   // $('.field_where_you').parent().parent().find('.form-error').html("Please select where you are");
				   alert("Please select where you are");
                    err++;
                }
                
                if(err == 0){
                    $(".rhino-active-bullet").removeClass("step-error").addClass("step-success");
                    $(".rhino-next").show();
                    $('.form-submit').hide();
                    $('.rhino-next').trigger('click');
                }else{
                    $(".rhino-active-bullet").removeClass("step-success").addClass("step-error");
                }


            };

            var step2_validation = function(){
                var err = 0;

                  if($('input[name="purpose"]:checked').length==0){
                    //$('.feildset-purpose').parent().parent().find('.form-error').html("Please select purpose");
					alert("Please select purpose");
                    err++;
                }
                
                
                if(err == 0){
                    $(".rhino-active-bullet").removeClass("step-error").addClass("step-success");
                    $(".rhino-next").show();
                    $('.form-submit').hide();
                    $('.rhino-next').trigger('click');
                }else{
                    $(".rhino-active-bullet").removeClass("step-success").addClass("step-error");
                }

            };

            var step3_validation = function(){
                var err = 0;

                if($('input[name="property_type"]:checked').length==0){
                    //$('#property_type').parent().parent().find('.form-error').html("Please select property type");
					alert("please select property type");
                    err++;
                }
                if(err == 0){
                    $(".rhino-active-bullet").removeClass("step-error").addClass("step-success");
                    $(".rhino-next").show();
                    $('.form-submit').hide();
                    $('.rhino-next').trigger('click');
                }else{
                    $(".rhino-active-bullet").removeClass("step-success").addClass("step-error");
                }

            };
			
			
			 var step4_validation = function(){
                var err = 0;

                if($('#no_day_stay').val() == ''){
                    //$('#no_day_stay').parent().parent().find('.form-error').html("Please enter no of days");
					alert("please select property type");
                    err++;
                }
                if(err == 0){
                    $(".rhino-active-bullet").removeClass("step-error").addClass("step-success");
                    $(".rhino-next").show();
                    $('.form-submit').hide();
                    $('.rhino-next').trigger('click');
                }else{
                    $(".rhino-active-bullet").removeClass("step-success").addClass("step-error");
                }

            };
			
			
			 var step5_validation = function(){
                var err = 0;

                if($('#budget_price').val() == ''){
                    $('#budget_price').parent().parent().find('.form-error').html("Please enter budget price");
                    err++;
                }
                if(err == 0){
                    $(".rhino-active-bullet").removeClass("step-error").addClass("step-success");
                    $(".rhino-next").show();
                    $('.form-submit').hide();
                    $('.rhino-next').trigger('click');
                }else{
                    $(".rhino-active-bullet").removeClass("step-success").addClass("step-error");
                }

            };
			
			
			
			var step6_validation = function(){
                var err = 0;

                if($('#from_date').val() == '' && $('#to_date').val() == ''){
                    $('#from_date').parent().parent().find('.form-error').html("Please enter budget price");
                    err++;
                }
                if(err == 0){
                    $(".rhino-active-bullet").removeClass("step-error").addClass("step-success");
                    $(".rhino-next").show();
                    $('.form-submit').hide();
                    $('.rhino-next').trigger('click');
                }else{
                    $(".rhino-active-bullet").removeClass("step-success").addClass("step-error");
                }

            };
			
			
			   var step7_validation = function(){
                var err = 0;

                if($('input[name="thins_to_do"]:checked').length==0){
                    $('#thins_to_do').parent().parent().find('.form-error').html("Please select property type");
                    err++;
                }
                if(err == 0){
                    $(".rhino-active-bullet").removeClass("step-error").addClass("step-success");
                    $(".rhino-next").show();
                    $('.form-submit').hide();
                    $('.rhino-next').trigger('click');
                }else{
                    $(".rhino-active-bullet").removeClass("step-success").addClass("step-error");
                }

            };
			
			 var step8_validation = function(){
                var err = 0;

                if($('input[name="flight_assistance"]:checked').length==0){
                    $('#flight_assistance').parent().parent().find('.form-error').html("Please select option");
                    err++;
                }
                if(err == 0){
                    $(".rhino-active-bullet").removeClass("step-error").addClass("step-success");
                    $(".rhino-next").show();
                    $('.form-submit').hide();
                    $('.rhino-next').trigger('click');
                }else{
                    $(".rhino-active-bullet").removeClass("step-success").addClass("step-error");
                }

            };
			
			var step9_validation = function(){
                var err = 0;

                if($('input[name="airport_transfer"]:checked').length==0){
                    $('#airport_transfer').parent().parent().find('.form-error').html("Please select transfer type");
                    err++;
                }
                if(err == 0){
                    $(".rhino-active-bullet").removeClass("step-error").addClass("step-success");
                    $(".rhino-next").show();
                    $('.form-submit').hide();
                    $('.rhino-next').trigger('click');
                }else{
                    $(".rhino-active-bullet").removeClass("step-success").addClass("step-error");
                }

            };
			
			var step10_validation = function(){
                var err = 0;

                if($('input[name="resort_type"]:checked').length==0){
                    $('#resort_type').parent().parent().find('.form-error').html("Please select resort type");
                    err++;
                }
                if(err == 0){
                    $(".rhino-active-bullet").removeClass("step-error").addClass("step-success");
                    $(".rhino-next").show();
                    $('.form-submit').hide();
                    $('.rhino-next').trigger('click');
                }else{
                    $(".rhino-active-bullet").removeClass("step-success").addClass("step-error");
                }

            };
			
			
			var step11_validation = function(){
                var err = 0;

                if($('input[name="type_of_room"]:checked').length==0){
                    $('#type_of_room').parent().parent().find('.form-error').html("Please select type of room");
                    err++;
                }
                if(err == 0){
                    $(".rhino-active-bullet").removeClass("step-error").addClass("step-success");
                    $(".rhino-next").show();
                    $('.form-submit').hide();
                    $('.rhino-next').trigger('click');
                }else{
                    $(".rhino-active-bullet").removeClass("step-success").addClass("step-error");
                }

            };
			
			
			var step12_validation = function(){
                var err = 0;

                if($('input[name="meal_plan_type"]:checked').length==0){
                    $('#meal_plan_type').parent().parent().find('.form-error').html("Please select meal type");
                    err++;
                }
                if(err == 0){
                    $(".rhino-active-bullet").removeClass("step-error").addClass("step-success");
                    $(".rhino-next").show();
                    $('.form-submit').hide();
                    $('.rhino-next').trigger('click');
                }else{
                    $(".rhino-active-bullet").removeClass("step-success").addClass("step-error");
                }

            };
			
			
			var step13_validation = function(){
                var err = 0;

                if($('input[name="meal_plan_category"]:checked').length==0){
                    $('#meal_plan_category').parent().parent().find('.form-error').html("Please select meal category");
                    err++;
                }
                if(err == 0){
                    $(".rhino-active-bullet").removeClass("step-error").addClass("step-success");
                    $(".rhino-next").show();
                    $('.form-submit').hide();
                    $('.rhino-next').trigger('click');
                }else{
                    $(".rhino-active-bullet").removeClass("step-success").addClass("step-error");
                }

            };