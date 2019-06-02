$(document).ready(function()
{  
        $('.carousel').carousel(
{
        interval:6000
});
    
    
    //show color option 
    
        $(".gear-check").click(function()
{
        
        
        $(".color-option").fadeToggle();
        
        
});
  
});





//loading screen


$(window).load(function()
{
   $(".loading-overlay .spinner").fadeOut(2000,
function()
{
        $("body").css("overflow","auto");
        $(this).parent().fadeOut(2000);
});             
                
});