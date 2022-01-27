$('.cricle_bg').click(function() {  
    var a = $(this).attr('id');
      $("#center_h").html("");
    $("#center_p").html("");
    
    if(a == 'circle_cri_2'){
        $("#center_h").html("Sell");
        $("#center_p").html("We strive to provide you with the best possible price in the shortest time.");
    }
    else if(a == 'circle_cri_3'){
        $("#center_h").html("Rent");
        $("#center_p").html("Living in and around East London and Essex and having extensive experience spanning over 30 years we are more than familiar with the residential property market.");
    }
    else if(a == 'circle_cri_4'){
        $("#center_h").html("Landlords");
        $("#center_p").html("If you are interested in letting your property, which may possibly be one of your valuable assets, our Lettings Department is tailored to take the worry out of letting.");
    }
    else if(a == 'circle_cri_5'){
        $("#center_h").html("Overseas");
        $("#center_p").html("With over 30 years experience living and working in the local and surrounding areas we are able to provide advice on whatever your requirements.");
    }
    else if(a == 'circle_cri_6'){
        $("#center_h").html("Project<br>Management");
        $("#center_p").html("With over 30 years experience living and working in the local and surrounding areas we are able to provide advice on whatever your requirements");
    }
    else{
        $("#center_h").html("Concept");
        $("#center_p").html("With over 30 years experience living and working in the local and surrounding areas we are able to provide advice on whatever your requirements");
    }
});