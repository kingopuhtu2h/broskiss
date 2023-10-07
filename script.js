let localStream;
let rtcPeerConnection;

async function joinRoom() {
    const roomCode = document.getElementById('room-code').value;

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localStream = stream;

        const localVideo = document.getElementById('local-video');
        localVideo.srcObject = stream;

        // Handle joining the room and establishing WebRTC connection
        // This is where you would implement the necessary WebRTC code
        // For simplicity, we're not implementing this in the example
        console.log('Joining room:', roomCode);

    } catch (error) {
        console.error('Error accessing media devices:', error);
    }
}
