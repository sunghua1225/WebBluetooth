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
            {services: [002C00]},
            {name: 'Pay controller'}
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
        
        let txt = 'connectDevice entered\n';
        document.getElementById('targetB').innerHTML = txt;
    
        navigator.bluetooth.requestDevice(options)
        .then(device => {
            txt += 'Connecting to GATT Server...\n';
            document.getElementById('targetB').innerHTML = txt;
            return device.gatt.connect();
        })
        .then(server => {
            txt += 'Getting Battery Service...\n';
            document.getElementById('targetB').innerHTML = txt;
            return server.getPrimaryService('battery_service');
        })
        .then(service => {
            txt += 'Getting Battery Level Characteristic...\n';
            document.getElementById('targetB').innerHTML = txt;
            return service.getCharacteristic('battery_level');
        })
        .then(characteristic => {
            txt += 'Reading Battery Level...\n';
            document.getElementById('targetB').innerHTML = txt;
            return characteristic.readValue();
        })
        .then(value => {
            let batteryLevel = value.getUint8(0);
            txt += '> Battery Level is ' + batteryLevel + '%\n';
            document.getElementById('targetB').innerHTML = txt;
        })
        .catch(error => {
            txt += 'Argh! ' + error
            document.getElementById('targetB').innerHTML = txt;
        }
    );
}

