$(document).ready(function(){
   
    $("#01").click(function(){
        $(this).hide();
    })
    $("#02").mouseenter(function(){
        alert("Not in my fate Obliviate");
    })
    $("#03").mouseleave(function(){
        alert("Pratice more mate");
    })
    $("#04").mousedown(function(){
        alert("As expected");
    })
    $("#05").mouseup(function(){
        alert("Mouse up");
    })
    $("#06").hover(function(){
        alert("See me now");
    },
    function(){
        alert("See me later");
    })
    $("p").on({
        mouseenter:function(){
            $(this).css("background-color","lightgrey");
        },
        mouseleave:function(){
            $(this).css("background-color","lightblue");
        },
        click:function(){
           $(this).css("background-color","blue"); 
        }
    })   
})


$(document).ready(function(){
    $("#08").click(function(){
        $("p").hide(1212);
    })
    $("#09").click(function(){
        $("p").show(1212);
    })
    $("#toggle").click(function(){
        $("p").toggle(2424);
    })
})


$(document).ready(function(){
    $("#b1").click(function(){
        $("#d1").fadeIn();
        $("#d2").fadeOut();
        $("#d3").fadeToggle();
        $("#d4").fadeTo("slow",0.3);   
    })
})

$(document).ready(function(){
    $("#slide_1").click(function(){
        $("#message_1").slideDown("slow");
    })
    $("#slide_2").click(function(){
        $("#message_2").slideUp("slow");
    })
    $("#slide_3").click(function(){
        $("#message_3").slideToggle("slow");
    })
})

$(document).ready(function(){
    $("#anime_2").click(function(){
        $("#anime_1").animate({left:"300px",opacity:"1.0",height:"+=150px",width:"+=150px"});
    })
})

$(document).ready(function(){
    $("#anime_3").click(function(){
        $("#anime_0").animate({height:"toggle",width:"toggle"});
    })
})