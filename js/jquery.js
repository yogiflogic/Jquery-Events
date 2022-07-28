// qery 3.5.0 Version
//$(selector).event({params},speed,callback);

// html / innerHTML kalau di JS murni
$( "button.continue" ).html("Jqery 3.6.0 Version");

// hide
$("#hide").on("click",function(){
    $(".box").hide();
});

// show
$("#show").on("click",function(){
    $(".box").show();
});

// fadein
$("#fadeIn").on("click",function(){
    $(".kotak1").fadeIn(1000);
});

// fadeout
$("#fadeOut").on("click",function(){
    $(".kotak1").fadeOut(1000);
});

$("#fadeTo").on("click",function(){
    $(".kotak2").fadeTo("slow",0.2,function(){
        alert("Tiga Parameter");
      });
});

// toggle
$("#toggle").on("click",function(){
    $(".kotak3").toggle(1000);
});
 