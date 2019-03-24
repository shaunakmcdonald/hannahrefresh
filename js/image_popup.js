$(document).ready(function(){

  $('.about').click(function (e) {
    e.preventDefault();
    $('.about_black').show();
    $('.about_orange').hide();
  });

  $('#movingImages').click(function (e) {
    e.preventDefault();
    $('.stillImages').hide();
    $('.projects').hide();
    $('.movingImagesProjects').show();
    $('.movingImages').show();
  });

  $('#projects').click(function (e) {
    e.preventDefault();
    $('.stillImages').hide();
    $('.projects').show();
    $('.movingImagesProjects').show();
    $('.movingImages').hide();
  });

  $('#stillImages').click(function (e) {
    e.preventDefault();
    $('.stillImages').show();
    $('.projects').hide();
    $('.movingImages').hide();
    $('.movingImagesProjects').hide();
  });
});

$(document).ready(function() {
  $('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    },
    gallery: {
      enabled: true,
      preload: [0,2], // Will preload 0 - before current, and 1 after the current image
      navigateByImgClick: true
    }
  });

  $('.image-popup-fit-width').magnificPopup({
    type: 'image',
    image: {
      verticalFit: false
    },
    gallery: {
      enabled: true,
      preload: [0,2], // Will preload 0 - before current, and 1 after the current image
      navigateByImgClick: true
    }
  });

  $('.image-popup-no-margins').magnificPopup({
    type: 'image',
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    gallery: {
      enabled: true,
      preload: [0,2], // Will preload 0 - before current, and 1 after the current image
      navigateByImgClick: true
    }
  });

});

$(document).ready(function() {
    var $header = $("header"),
        $clone = $header.before($header.clone().addClass("clone"));
    
    $(window).on("scroll", function() {
        var fromTop = $(window).scrollTop();
        $("body").toggleClass("down", (fromTop > 400));
    });
});

/* Declaring the global variables */
    var mouseX;
    var mouseY;
    var imageOne;
    var imageTwo;
    var imageThree;
    var imageFour;
    var imageFive;
    
    /* Calling the initialization function */
    $(init);
    
    /* The images need to re-initialize on load and on resize, or else the areas
     * where each image is displayed will be wrong. */
    $(window).load(init);
    $(window).resize(init);
    
    /* Setting the mousemove event caller */
    $(window).mousemove(getMousePosition);
    
    /* This function is called on document ready, on load and on resize
     * and initiallizes all the images */
    function init(){
        
        /* Instanciate the mouse position variables */
        mouseX = 0;
        mouseY = 0;
        
        /* Instanciate a HeadImage class for every image */
        imageOne = new HeadImage("one");
        imageTwo = new HeadImage("two");
        imageThree = new HeadImage("three");
        imageFour = new HeadImage("four");
        imageFive = new HeadImage("five");
    }
    
    /* This function is called on mouse move and gets the mouse position. 
     * It also calls the HeadImage function to display the correct image*/
    function getMousePosition(event){
        
        /* Setting the mouse position variables */
        mouseX = event.pageX;
        mouseY = event.pageY;
        
        /*Calling the setImageDirection function of the HeadImage class
         * to display the correct image*/
        imageOne.setImageDirection();
        imageTwo.setImageDirection();
        imageThree.setImageDirection();
        imageFour.setImageDirection();
        imageFive.setImageDirection();
    }


