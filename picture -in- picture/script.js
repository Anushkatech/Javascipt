 const videoElement = document.getElementById('video');
 const button = document.getElementById('button');

//  Prompt to select media stream, pass to video element them stream

async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch(error)
    {
        // Catch Error Here
        console.log('whoops, error here:', error);
    }

}

button.addEventListener('click', async () => {
// Disable Button
button.disabled = true;
// Start picture in picture
await videoElement.requestPictureInPicture();
// Reset Button
button.disabled = false;

});

// on load
selectMediaStream();