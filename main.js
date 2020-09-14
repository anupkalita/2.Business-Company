// Adding Google Map Code
function initMap() {

    const loc = {
        lat: 25.908501,
        lng: 91.877701
    };
    const map = new google.maps.Map(document.getElementById("map"), {
      center: loc,
      zoom: 8
    });

    const marker = new google.maps.Marker({
        position: loc,
        map: map
    })
  }


  // Smooth Scrolling
  $('#nav-bar a, #landing-section a').on('click', function(event){
    if((this.hash!=='')){
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top -100
      },
      700
      );
    }
  });

  // Sticky Menu Background
  window.addEventListener('scroll', function(){
    if(window.scrollY > 150){
      document.querySelector('#nav-bar').style.opacity = 0.9;
    }else{
      document.querySelector('#nav-bar').style.opacity = 1;
    }
  });