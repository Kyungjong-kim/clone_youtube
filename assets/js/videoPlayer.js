const videoContainer = document.getElementById('jsVideoPlayer');
let videoPlayer;
function init() {
  videoPlayer = videoContainer.querySelector("video");
};

if(videoContainer){
  init();
}