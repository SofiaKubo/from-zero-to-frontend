const openButton = document.querySelector('.card__video-button');
const closeButton = document.querySelector('.dialog__close');
const dialog = document.querySelector('.dialog');
const videoIframe = document.querySelector('.dialog iframe');

openButton.addEventListener('click', () => {
  window['video-dialog'].showModal();
});

closeButton.addEventListener('click', () => {
  toggleVideo(videoIframe, 'hide');
  window['video-dialog'].close();
});

document.addEventListener('click', (e) => {
  if (e.target === dialog || dialog.contains(e.target)) {
    toggleVideo(videoIframe, 'hide');
    window['video-dialog'].close();
  }
});

function toggleVideo(videoIframe, state) {
  const iframeWindow = videoIframe.contentWindow;
  func = state == 'hide' ? 'pauseVideo' : 'playVideo';
  iframeWindow.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}
