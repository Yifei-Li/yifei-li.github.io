 $(function(){ 
     var navMain = $("#openbar");
     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
 });