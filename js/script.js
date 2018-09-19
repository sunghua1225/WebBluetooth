// document.getElementById('arduinoButton').onclick = function (event) {
//      if (navigator.bluetooth) {
//         talkToArduino();
//     } else {
//         alert('WebBluetooth not supported.');
//     }
// };

document.getElementById('arduinoButton').onclick = function (event) {
    talkToArduino();
    //checkBattery();
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
        //let options = {
        //  filters: [
        //    {services: ['heart_rate']},
        //    {services: [0x1802, 0x1803]},
        //    {services: ['c48e6067-5295-48d3-8d5c-0395f61792b1']},
        //    {name: 'OurService'},
        //    {namePrefix: 'Prefix'}
        //  ],
        //  optionalServices: ['battery_service']
        //  // OR: acceptAllDevices: true,
        //}
        let options = {
          filters: [
            {services: [0xABCD]},
            {name: 'OurService'}
          ],
          optionalServices: ['battery_service']
          // Or: acceptAllDevices: true
        }
        
        //navigator.bluetooth.requestDevice({
        //    acceptAllDevices: true,
        //    optionalServices: ['battery_service']
        //})
        navigator.bluetooth.requestDevice(options)
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

function checkBattery() {
    navigator.bluetooth.requestDevice(
        {filters: [{services: ['battery_service']}]})
        .then(device => {
            document.getElementById('targetB').innerHTML = 'Connecting to GATT Server...';
            return device.gatt.connect();
        })
        .then(server => {
            document.getElementById('targetB').innerHTML = 'Getting Battery Service...';
            return server.getPrimaryService('battery_service');
        })
        .then(service => {
            document.getElementById('targetB').innerHTML = 'Getting Battery Level Characteristic...';
            return service.getCharacteristic('battery_level');
        })
        .then(characteristic => {
            document.getElementById('targetB').innerHTML = 'Reading Battery Level...';
            return characteristic.readValue();
        })
        .then(value => {
            let batteryLevel = value.getUint8(0);
            document.getElementById('targetB').innerHTML = '> Battery Level is ' + batteryLevel + '%';
        })
        .catch(error => {
            document.getElementById('targetB').innerHTML = 'Argh! ' + error;
        }
    );
}

