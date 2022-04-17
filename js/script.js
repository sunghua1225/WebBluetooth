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
            {services: [0x2902]},
            {name: 'Pay controller'}
          ]
         }
        
        navigator.bluetooth.requestDevice({
           acceptAllDevices: true,
           optionalServices: ['battery_service']
        })
//         navigator.bluetooth.requestDevice(options)
//         .then(device => {
//             document.getElementById('targetA').innerHTML = 'Received: ' + device.name;
//         })
        .catch(error => {
            document.getElementById('targetB').innerHTML = "Error: " + error;
        });
    } catch (error) {
        document.getElementById('targetB').innerHTML = error;
    }
}

async function connectDevice() {
     navigator.bluetooth.requestDevice({ filters: [{ services: ['Pay controller'] }] })
    .then(device => device.gatt.connect())
    .then(server => server.getPrimaryService('Pay controller'))
    .then(service => service.getCharacteristic('Pay controller'))
    .then(characteristic => {
      // Writing 1 is the signal to reset energy expended.
      const resetEnergyExpended = Uint8Array.of(1);
      return characteristic.writeValue(resetEnergyExpended);
    })
    .then(_ => {
      console.log('Energy expended has been reset.');
    })
    .catch(error => { console.error(error); });
        
}

