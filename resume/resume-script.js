function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function loaded() {
    disableScroll();
    let loader = $("#preloader");
    let loader_outer = $("#preloader-outer");
    let resume = $(".resume");
    window.scrollTo(0,0);
    delay(1000).then(() => loaded_done(loader, loader_outer, resume));
}
function loaded_done(loader, loader_outer, resume) {
    removeFadeOut(loader, 200);
    removeFadeOut(loader_outer, 2000);
    //loader.style.display = "none";
    delay(700).then(() => enableScroll());
    delay(2100).then(() => loader_outer.css("display", "none"));
}










function removeFadeOut( el, speed ) {
    var seconds = speed/1000;
    let opacityStatement = "opacity "+seconds+"s ease"
    el.css("transition", opacityStatement);
    el.css("opacity", "0");
}







/*------------------For the preloader fade out transition------------------*/

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