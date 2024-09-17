$("p").on("click", function(){
     $(this).slideToggle('slow');
})

$('button').click(function(){
    $('p').slideToggle('slow');
})