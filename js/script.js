// document.getElementById('arduinoButton').onclick = function (event) {
//      if (navigator.bluetooth) {
//         talkToArduino();
//     } else {
//         alert('WebBluetooth not supported.');
//     }
// };

document.getElementById('arduinoButton').onclick = function (event) {
    talkToArduino();
};
/*
navigator.usb.addEventListener('connect', event => {
    // Add |event.device| to the UI.
    document.getElementById('targetA').innerHTML = 'Device added: ' + event.device.name;
});

navigator.usb.addEventListener('disconnect', event => {
    // Remove |event.device| from the UI.
    document.getElementById('targetA').innerHTML = 'Device removed: ' + event.device.name;
});
*/

async function talkToArduino() {
    try {
        navigator.bluetooth.requestDevice({
            filters: []
        })
            .then(device => {
            document.getElementById('targetA').innerHTML = 'Received: ' + device.name;
        })
        .catch(error => {
            document.getElementById('targetB').innerHTML = "Error: " + error;
        });
    } catch (error) {
        document.getElementById('targetB').innerHTML = error;
    }
}
