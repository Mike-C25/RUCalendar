$(document).ready(function() {
    
    $('glyphicon-collapse-up').removeClass('glyphicon-collapse-up').addClass('glyphicon-triangle-right');
    
    $('glyphicon-collapse-down').removeClass('glyphicon-collapse-down').addClass('glyphicon-triangle-right');
    
    
    $('#collapseCategory').on('show.bs.collapse', function() {
        $('glyphicon-collapse-down').removeClass('glyphicon-collapse-down').addClass('glyphicon-triangle-bottom');
    });
    $('#collapseCategory').on('hide.bs.collapse', function() {
        $('glyphicon-collapse-up').removeClass('glyphicon-collapse-up').addClass('glyphicon-triangle-right');
    });
});

/*
$('#collapseCategory').on('show.bs.collapse', function(){
$('a.accordion-toggle > i').removeClass('glyphicon-collapse-up').addClass('glyphicon-collapse-down');
});  
$('#collapseCategory').on('hide.bs.collapse', function(){
$('a.accordion-toggle > i').removeClass('glyphicon-collapse-down').addClass('glyphicon-collapse-up');
});   */  
