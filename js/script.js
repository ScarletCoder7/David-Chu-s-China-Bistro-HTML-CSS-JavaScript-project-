//document.addEventListener("DOMContentLoaded", function(){});
$(function(){
    
    //Same as document.querySelector("#navbarToggle").addEventListener("blur", function(event){});
    $("#navbarToggle").blur(function(event){    
        var screenWidth = window.innerWidth; 
        if(screenWidth < 728){
            $("#collapsable-nav").collapse("hide");
        }
    });
});
