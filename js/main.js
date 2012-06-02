/* 
  Author: Matt Rothstein
  File: main.js
  Description: 
    Main script for this sample build project.
*/

function plopDiv( event ) {
  var plop_html = '<div class="plopped"></div>';
  var clickX = event.clientX;
  var clickY = event.clientY;
  var r = Math.floor( Math.random() * 255 ),
          g = Math.floor( Math.random() * 255 ),
          b = Math.floor( Math.random() * 255 ),
          o = Math.random();
        
  // var r = 150,
  //     g = 200,
  //     b = 93,
  //     o = .5;
      
  var new_div = $( plop_html );
  new_div.css( 'top', clickY - 75 );
  new_div.css( 'left', clickX - 75 );
  new_div.css( 'background', 'rgba(' + r + ',' + g + ',' + b + ',' + o + ')' );
  
  console.log( "placing a new div @ (" + clickX + "," + clickY + ") -- " +'rgba(' + r + ',' + g + ',' + b + ',' + o + ')'  );
  
  $( "#drop_area" ).append( new_div );
}

function addListeners() {
  $( "#drop_area" ).click( plopDiv );
}

$( document ).ready( function() {
  // set up the click listeners
  addListeners();
});