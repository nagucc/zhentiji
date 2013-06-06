$('#h1').click( function() {
    $('#paper_body').insertAtCursor('# ');
});
$('#h2').click( function() {
    $('#paper_body').insertAtCursor('## '); 
});
$('#h3').click( function() {
    $('#paper_body').insertAtCursor('### '); 
});
$('#bold').click( function() {
    $('#paper_body').insertAroundCursor('**','**'); 
});
$('#italic').click( function() {
    $('#paper_body').insertAroundCursor('*','*'); 
});
$('#link').click( function() {
    $('#paper_body').insertAroundCursor('[','](http://)'); 
});
$('#list').click( function() {
    $('#paper_body').insertAtCursor('1. ');
});		
$('#pic').click( function() {
    $('#paper_body').insertAroundCursor('![','](http://)');
});
$('#c1').click( function() {
    $('#paper_body').insertAtCursor('> ');
});
$('#c2').click( function() {
    $('#paper_body').insertAtCursor('>> '); 
});
$('#c3').click( function() {
    $('#paper_body').insertAtCursor('>>> '); 
});