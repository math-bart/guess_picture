$(function() {
  var bg1 = 'url("images/background1.jpg")';
  var bg2 = 'url("images/background2.jpg")';
  var bg3 = 'url("images/background3.jpg")';
  var bg4 = 'url("images/background4.jpg")';
  var bg5 = 'url("images/background5.jpg")';
  var bg6 = 'url("images/background6.jpg")';
  var bg7 = 'url("images/background7.png")';
  var bg8 = 'url("images/background8.jpg")';
  var bg9 = 'url("images/background9.jpg")';
  var backgrounds = [bg1,bg2,bg3,bg4,bg5,bg6,bg7,bg8,bg9];
  var newPicture = $('#new');
  var ile = 48; 
  var timeoutID;
  
  function doAll() {
	var elementy = $('.part');
	i = 0;
	displayPart();
    function displayPart() {
	  timeoutID = window.setTimeout(function () { 
	    var los = Math.round(Math.random()*(elementy.length-1));
        var element = elementy[los];
        elementy.eq(los).css('background', 'transparent');
        i++;  
        elementy.splice(los, 1);	
        if (i < ile ) {            
          displayPart();        
        } 
      }, 500)
    }
  }
  
  newPicture.click(function() {
    var elementy = $('.part').css('background', '#000');
    var los = Math.round(Math.random()*(backgrounds.length-1));
    var newBackground = $('#board');
    var bgUrl = backgrounds[los];
    newBackground.css('background-image', bgUrl);
    backgrounds.splice(los, 1);
    window.clearTimeout(timeoutID);
    doAll();	 
  });
  
  doAll();
});
