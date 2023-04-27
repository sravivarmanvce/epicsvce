
      (function ($) {"use strict";
      
      $(function () {
        var header = $(".start-style");
        $(window).scroll(function () {
          var scroll = $(window).scrollTop();
    
          if (scroll >= 10) {
            header.removeClass('start-style').addClass("scroll-on");
          } else {
            header.removeClass("scroll-on").addClass('start-style');
          }
        });
      });
    
      //Animation
    
      $(document).ready(function () {
        $('body.hero-anime').removeClass('hero-anime');
      });
    
      //Menu On Hover
    
      $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
        if ($(window).width() > 750) {
          var _d = $(e.target).closest('.nav-item');_d.addClass('show');
          setTimeout(function () {
            _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
          }, 1);
        }
      });
    
    
    
    })(jQuery);

// Blank Target External Links
$(document.links).filter(function() {
return this.hostname != window.location.hostname;
}).attr('target', '_blank');


/*gallery*/


var grid = document.querySelector('.grid');
var msnry;
// element selectors
var imgAll = document.querySelectorAll('.grid-item');
var imgNy = document.querySelectorAll('.newYork');
var imgFlowers = document.querySelectorAll('.flowers');
var imgOthers = document.querySelectorAll('.others');
// buttons
const tabsUl = document.getElementById('buttonGroup');
const lis = tabsUl.children;
const gridItems = grid.children;


imagesLoaded(grid, function(){
	msnry = new Masonry( grid, {
		//options
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});
});

//element & class name
function toggleClass(parentElem, childElems, className){
	for(let i = 0; i <childElems.length; i++){
		if(childElems[i]==parentElem){
			childElems[i].classList.add(className);
		}
		else{
			childElems[i].classList.remove(className);
		}
	}
}

function showImages(showImg, hideImg1, hideImg2){
	for(let i = 0; i < showImg.length; i++){
			showImg[i].style.display = "block";
		}
		for(let i = 0; i < hideImg1.length; i++){
			hideImg1[i].style.display = "none";
		}
		for(let i = 0; i< hideImg2.length; i++){
			hideImg2[i].style.display = "none";
		}
}


tabsUl.addEventListener('click', (event) =>{
	let tabLi = event.target.parentNode;
	
	toggleClass(tabLi, lis, 'is-active');
	
	//show all images
	if(event.target.id == "all"){
		for(let i = 0; i< imgAll.length; i++){
			imgAll[i].style.display = "block";
		}
	}
	
	//show ny images
	if(event.target.id == "newYork"){
		showImages(imgNy, imgFlowers, imgOthers);
	}
	
	// show flowers
	if(event.target.id == "flowers"){
		showImages(imgFlowers, imgNy, imgOthers);
	}
	
	// show other images
	if(event.target.id == "others"){
		showImages(imgOthers, imgFlowers, imgNy);
	}
	
	msnry.layout();
	
});

grid.addEventListener('click',function(event){
	let imgContainer = event.target.parentNode;
	toggleClass(imgContainer, gridItems, 'grid-item__expanded');
	msnry.layout();
});

