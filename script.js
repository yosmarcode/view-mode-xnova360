// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);

// Load model from URL parameter
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const modelUrl = urlParams.get('model');

if (modelUrl) {
  const modelViewer = document.querySelector('model-viewer');
  modelViewer.src = modelUrl;
}