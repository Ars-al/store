$('.slider-single').slick({
    slidesToShow: 3,
    // slidesToScroll: 4,
    arrows: false,
    dots: false,
    fade: false,
    adaptiveHeight: true,
    infinite: true,
    useTransform: true,
    speed: 400,
    autoplay: false,
    swipeToSlide: true,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    responsive: [{
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 3,
        // slidesToScroll: 5,
        autoplay: true,
      }
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow: 3,
        // slidesToScroll: 5,
        autoplay: true,
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        // slidesToScroll: 5,
        autoplay: true,
      }
    },
    {
      breakpoint: 425,
      settings: {
        arrows: false,
        slidesToShow: 1,
        
        autoplay: true,
      }
    },
    ]
  });
$('.slider-small').slick({
    slidesToShow: 9,
    // slidesToScroll: 4,
    arrows: false,
    dots: false,
    fade: false,
    adaptiveHeight: true,
    infinite: true,
    useTransform: true,
    speed: 400,
    autoplay: false,
    swipeToSlide: true,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    responsive: [{
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 7,
        // slidesToScroll: 5,
        autoplay: true,
      }
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow: 6,
        // slidesToScroll: 5,
        autoplay: true,
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 5,
        // slidesToScroll: 5,
        autoplay: true,
      }
    },
    {
      breakpoint: 425,
      settings: {
        arrows: false,
        slidesToShow: 3,
        
        autoplay: true,
      }
    },
    ]
  });


  const minusEl = document.getElementById("minus");
const increamentEl = document.getElementById("increament");
const plusEl = document.getElementById("plus");
  const minusEl1 = document.getElementById("minus1");
const increamentEl1 = document.getElementById("increament1");
const plusEl1 = document.getElementById("plus1");

count = 0;
  plusEl.onclick = function() {
  count ++;
  increamentEl.innerHTML =  count;
};
  count = 0;
  minusEl.onclick = function() {
  count --;
  if(count <= 0){
    count = 0;
  }
  increamentEl.innerHTML =  count;
};
count = 0;
  plusEl1.onclick = function() {
  count ++;
  increamentEl1.innerHTML =  count;
};
  count = 0;
  minusEl1.onclick = function() {
  count --;
  if(count <= 0){
    count = 0;
  }
  increamentEl1.innerHTML =  count;
};



//   const minusEl1 = document.getElementById("minus1");
// const increamentEl1 = document.getElementById("increament1");
// const plusEl1 = document.getElementById("plus1");

// count = 0;
//   plusEl1.onclick = function() {
//   count ++;
//   increamentEl1.innerHTML =  count;
// };
//   count = 0;
//   minusEl1.onclick = function() {
//   count --;
//   if(count <= 0){
//     count = 0;
//   }
//   increamentEl1.innerHTML =  count;
// };



// js 2 start

// const minusEl2 = document.getElementById("minus2");
// const increamentEl2 = document.getElementById("increament2");
// const plusEl = document.getElementById("plus2");

// count = 0;
//   plusEl2.onclick = function() {
//   count ++;
//   increamentEl2.innerHTML =  count;
// };
//   count = 0;
//   minusEl2.onclick = function() {
//   count --;
//   if(count <= 0){
//     count = 0;
//   }
//   increamentEl2.innerHTML =  count;
// };


// js 2 end


// Check active classes
var checkClass = function() {
  if ( $('.item').hasClass('hide') ) {
    $('.item').removeClass('hide');
  }
};

// Category filters
$('.category-1').click( function() {
  checkClass();
  $('.item:not(.category-1)').toggleClass('hide');
});
$('.category-2').click( function() {
  checkClass();
  $('.item:not(.category-2)').toggleClass('hide');
});
$('.category-3').click( function() {
  checkClass();
  $('.item:not(.category-3)').toggleClass('hide');
});
$('.category-4').click( function() {
  checkClass();
  $('.item:not(.category-4)').toggleClass('hide');
});
$('.category-5').click( function() {
  checkClass();
  $('.item:not(.category-5)').toggleClass('hide');
});


// Active tag
$('.category-1-btn').click(function(){
  $('.category-1-btn').removeClass('active');
  $(this).addClass('active');
});
$('.category-2-btn').click(function(){
  $('.category-2-btn').removeClass('active');
  $(this).addClass('active');
});
$('.category-3-btn').click(function(){
  $('.category-3-btn').removeClass('active');
  $(this).addClass('active');
});
$('.category-4-btn').click(function(){
  $('.category-4-btn').removeClass('active');
  $(this).addClass('active');
});



function heartFunction(id) {
   var element = document.getElementById(id);
   element.classList.toggle("fa-solid");
   element.classList.toggle('text-danger')
}
function eyeFunction(id) {
   var element = document.getElementById(id);
   element.classList.toggle("fa-eye");
  //  element.classList.toggle('text-danger')
}

function cartfun(id) {
  let element = document.getElementById('icons');
  // let element2 = document.getElementById('img-2');
  let element3 = document.getElementById('cart-1');
  element.classList.toggle('fa-cart-shopping')
  element3.classList.toggle('icon-div-3')
  // if(element.style.display="none"){
  //   element.style.display="block"
  //   element2.style.display="none"
  // }else if (element2.style.display="none"){
  //   element.style.display="none"
  //   element2.style.display="block"
  // }
  

}




// filters


