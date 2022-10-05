var player;
var frame = document.querySelector("#video-frame");
var cookieConsent = document.querySelector("#accept");
var firstScriptTag = document.querySelector("script");
var tag = document.createElement("script");
tag.id = "iframe-demo";
tag.src = "https://www.youtube.com/iframe_api";
frame.setAttribute("height", Math.floor(frame.clientWidth * 0.6));

cookieConsent.addEventListener("click", () => {
  player.seekTo(0);
  player.unMute();
});

function onYouTubeIframeAPIReady() {
  player = new YT.Player("video-frame");
}

firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

document.head = document.head || document.getElementsByTagName('head')[0];

const changeFavicon = link => {
  let $favicon = document.querySelector('link[rel="icon"]')
  // If a <link rel="icon"> element already exists,
  // change its href to the given link.
  if ($favicon !== null) {
    $favicon.href = link
  // Otherwise, create a new element and append it to <head>.
  } else {
    $favicon = document.createElement("link")
    $favicon.rel = "icon"
    $favicon.href = link
    document.head.appendChild($favicon)
  }
}

function hide() {
  player.unMute();
  setTimeout(function () {
    // delay for video to start
    document.title = "Get Rickrolled!";
    changeFavicon('https://cdn.glitch.global/e53a2255-5e5e-4df1-a15d-47250e916490/rickastley.ico?v=1664885959721');
    const overlay = document.getElementById("permission");
    overlay.style.display = "none";
  }, 500);
}
