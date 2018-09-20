async function talkToNRF() {
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
          ]
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

async function connectDevice() {
        let options = {
          filters: [
            {services: [0xF00D]},
            {name: 'OurCharacteristic'}
          ]
         }
        
        navigator.bluetooth.requestDevice(options)
        .then(device => {
            document.getElementById('targetB').innerHTML = 'Connecting to GATT Server...';
            return device.gatt.connect();
        })
        .then(server => {
            document.getElementById('targetB').innerHTML += 'Getting Battery Service...';
            return server.getPrimaryService('battery_service');
        })
        .then(service => {
            document.getElementById('targetB').innerHTML += 'Getting Battery Level Characteristic...';
            return service.getCharacteristic('battery_level');
        })
        .then(characteristic => {
            document.getElementById('targetB').innerHTML += 'Reading Battery Level...';
            return characteristic.readValue();
        })
        .then(value => {
            let batteryLevel = value.getUint8(0);
            document.getElementById('targetB').innerHTML += '> Battery Level is ' + batteryLevel + '%';
        })
        .catch(error => {
            document.getElementById('targetB').innerHTML = 'Argh! ' + error;
        }
    );
}

