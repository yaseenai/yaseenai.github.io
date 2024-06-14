$(document).ready(function () {
    $('.third-button').on('click', function () {
  
      $('.sidenav').toggleClass('close');
      $('.animated-icon3').toggleClass('open');
    });

    $('.nav-link-m').on('click', function () {
  
        $('.sidenav').toggleClass('close');
        $('.animated-icon3').toggleClass('open');
      });
});

// Scroll behaviour
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    if (window.screen.availWidth < 992) {
      document.getElementById("header").style.top = "-62px";
    } else {
      document.getElementById("header").style.top = "-88px";
    }
  }
  prevScrollpos = currentScrollPos;
}

// to open client review image in a new popup window
function showPopup(imageUrl) {
    var img = new Image();
    img.src = imageUrl;
    img.onload = function() {
        var width = img.width;
        var height = img.height;
        var left = (screen.width - width) / 2;
        var top = (screen.height - height) / 2;
        var popup = window.open("", "ImagePopup", `width=${width},height=${height},left=${left},top=${top}`);
        popup.document.write("<html><head><title>Client Review</title></head>");
        popup.document.write("<body style='margin:0; padding:0; display:flex; align-items:center; justify-content:center;'><img src='" + imageUrl + "'></body></html>");
        popup.document.close();
    };
}