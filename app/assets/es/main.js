'use strict';

import { Person, Student, LoadData } from './models';
import { ApplicationDbContext } from './services';
import { Utils } from './utils';

class App {
  constructor () {

  }

  init () {

    console.log('Initialization of the class App');

    const _ApplicationDbContext = new ApplicationDbContext();
    const loadData = new LoadData();

    _ApplicationDbContext.init('account');
    loadData.init();

    var url = window.location.href;

    this.nav();

    if (url.indexOf("login") > -1) {
      this.login();
    }
  
    if (url.indexOf("register") > -1) {
      this.register();
    }

    if (url.indexOf("contact") > -1) {
      this.geoMap();
    }
  }

  nav () {
    let navState = closed;
    const toggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const content = document.querySelector('.main');

    toggle.addEventListener('click', () => {
      if(navState == closed) {
        mobileMenu.style.left = "0";
        toggle.style.left = "265px";
        content.style.left = "250px";

        navState = open;
  
      } else {
        mobileMenu.style.left = "-250px";
        toggle.style.left = "15px";
        content.style.left = "0";

        navState = closed;
      }
    });
  }

  register () {
    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const studentNr = document.querySelector('#studentNr');
    const password = document.querySelector('#password');
    const passwordRepeat = document.querySelector('#passwordRepeat');


    const registerBtn = document.querySelector('#registerBtn');
    const inputIcon = document.querySelector('.input__icon');
    
    function bindEventListeners() {
      registerBtn.addEventListener('click', registerValidation, false);
      window.addEventListener('keydown', (ev) => {
        if(ev.keyCode === 13) {
          registerValidation();
        }
      }, false)
    }

    function registerValidation() {
      const usernameError = document.querySelector('#usernameError');
      const emailError = document.querySelector('#emailError');
      const studentNrError = document.querySelector('#studentNrError');
      const passwordError = document.querySelector('#passwordError');
      const passwordRepeatError = document.querySelector('#passwordRepeatError');

      let registerSucces;
      if(username.value.length <= 3) {
        usernameError.innerHTML = "Dit mag niet korter zijn dan 4 tekens.";
        registerSucces = false;
      } else {
        usernameError.innerHTML = null;
        registerSucces = true;
      }

      if(email.value.length <= 3) {
        emailError.innerHTML = "Geen geldig email adres";
        registerSucces = false;
      } else {
        emailError.innerHTML = null;
        registerSucces = true;
      }

      if(studentNr.value.length !== 5) {
        studentNrError.innerHTML = "Geen geldig studentennummer";
        registerSucces = false;
      } else {
        studentNrError.innerHTML = null;
        registerSucces = true;
      }

      if(password.value.length <= 3) {
        passwordError.innerHTML = "Dit mag niet korter zijn dan 4 tekens.";
        registerSucces = false;
      } else {
        passwordError.innerHTML = null;
        registerSucces = true;
      }

      if(passwordRepeat.value !== password.value) {
        passwordRepeatError.innerHTML = "Geef hetzelfde wachtwoord op";
        registerSucces = false;
      } else {
        passwordRepeatError.innerHTML = null;
        registerSucces = true;
      }
      
      if(registerSucces) {
        const _ApplicationDbContext = new ApplicationDbContext();
        _ApplicationDbContext.init('account');
        _ApplicationDbContext.addUser(username.value, password.value);

        location.href = "/index.html";

      }
    }

    function accountType() {
      const btns = document.getElementsByClassName("btn_account");
      const inputOptional = document.querySelector("#inputOptional");
      const studentInput = document.querySelector(".studentInput");

      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          const current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
      }
    }

    accountType();
    bindEventListeners();
  }

  login () {
    const loginBtn = document.querySelector('#loginBtn');
    const _ApplicationDbContext = new ApplicationDbContext();
    _ApplicationDbContext.init('account');
    
    
    function bindEventListeners() {
      loginBtn.addEventListener('click', loginValidation, false);
      window.addEventListener('keydown', (ev) => {
        if(ev.keyCode === 13) {
          loginValidation();
        }
      }, false)
    }
    
    function loginValidation() {
      const loginUsername = document.querySelector('#loginUsername');
      const loginPassword = document.querySelector('#loginPassword');

      for(let i = 0; i <= _ApplicationDbContext._dbData.users.length; i++) {
        if(_ApplicationDbContext._dbData.users[i].username == loginUsername.value && _ApplicationDbContext._dbData.users[i].password == loginPassword.value) {
          console.log('Succes!');
          loggedIn();
        } else {
          alert("Verkeerde combinatie!");
        }
      }

    }

    function loggedIn() {
      window.localStorage.setItem('loggedIn', true);
      window.location.href = "index.html";
    }

    bindEventListeners();
  }

  geoMap() {
    let googlemaps;

    google.maps.event.addDomListener(window, 'load', initMaps());
    
    function initMaps() {
        const divMap = document.getElementById('geoMap');
        const mapLatLng = {lat: 51.087354, lng: 3.668691};
        const mapOptions = {
            zoom: 14,
            center: mapLatLng,
            mapTypeControl: false,
            styles: [
              {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#bdbdbd"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#ffffff"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#fc9ece"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#dadada"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#c9c9c9"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#fc9ece"
                  },
                  {
                    "saturation": -70
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              }
            ]
        };
        
        googlemaps = new google.maps.Map(divMap, mapOptions);

        const marker = new google.maps.Marker({
          position: mapLatLng,
          map: googlemaps,
          animation: google.maps.Animation.DROP
        });

        marker.addListener('click', markerBounce);
    }

    function markerBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
  }

  like() {
    const likeIcon = document.getElementById('likeIcon');
    let liked = false;

    likeIcon.addEventListener('click', () => {
      console.log('Clicked!');
      if(!liked) {
        likeIcon.style.color = "#fc9ece";
        liked = true;
      } else {
        likeIcon.style.color = "#ababab";
        liked = false;
      }
    });

  }

  view() {
    const viewProject = document.getElementById('project');
    console.log(viewProject);
    const viewIcon = document.querySelector('#likeIcon');
    const viewSpan = document.querySelector(".fa-eye")
    let views = 0;

    viewProject.addEventListener('click', () => {
      views++;
      viewSpan.innerHTML = views;
    });
  }
}

window.addEventListener('load', (ev) => {
  const app = new App();
  app.init();
});
