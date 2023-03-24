const video = document.getElementById('video');
const button = document.getElementById('button');


// Prompt to select media stream, pass to video element, thent play
async function selectMediaStream(){
  try{
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play();
    };
  }catch(err){
    console.log('ohhhh nooooo:', err)
  }
}

// Event Listener
button.addEventListener('click', async () => {
  // Disable button
  button.disabled = true;
  // Start Picture in Picture
  await video.requestPictureInPicture();
  // Reset button
  button.disabled = false;
});

// On Load
selectMediaStream();