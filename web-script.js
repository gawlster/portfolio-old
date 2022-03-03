function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

window.addEventListener("scroll", function(event) {
    let scroll = this.scrollY;
    let navbar = document.querySelector("#home .navbar");
    let resumeLink = document.querySelector(".resume #resume-link");
    if (scroll > window.innerHeight - 50) {
        navbar.style.backgroundColor = "#333333";
        resumeLink.style.borderWidth = "1px";
    } else {
        navbar.style.backgroundColor = "rgba(128, 128, 128, 0.589)";
        resumeLink.style.borderWidth = "2px";
    }
});

function contactFormSubmit() {
    //next couple lines to get the values from the input boxes
    // if any of them are empty, dont display the thank you alert
    let first_name = document.getElementById("firstName").value;
    let last_name = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    
    
    if (first_name.length != 0 && last_name.length != 0 && email.length != 0 && !("@" in email)) {
        let alert_message = "Thank you, " + first_name + " for submitting! I will get back to you as soon as possible. In the meantime, you will be redirected to my form's host server for human verification."
        alert(alert_message);
    }
}

function loaded() {
    disableScroll();
    let loader = document.getElementById("preloader");
    let loader_outer = document.getElementById("preloader-outer");
    window.scrollTo(0,0);
    delay(1000).then(() => loaded_done(loader, loader_outer));
}
function loaded_done(loader, loader_outer) {
    removeFadeOut(loader, 200);
    removeFadeOut(loader_outer, 2000);
    //loader.style.display = "none";
    delay(700).then(() => enableScroll());
    delay(2100).then(() => loader_outer.style.display = "none");
}










function removeFadeOut( el, speed ) {
    var seconds = speed/1000;
    el.style.transition = "opacity "+seconds+"s ease";
    el.style.opacity = 0;
    setTimeout(function() {
        el.parentNode.removeChild(el);
    }, speed);
}








// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}