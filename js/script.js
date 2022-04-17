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
    navigator.bluetooth.requestDevice({
      acceptAllDevices: true,
      optionalServices: ['Pay controller'] // Required to access service later.
    })
    .then(device => { /* … */ })
    .catch(error => { console.error(error); });
        
}

