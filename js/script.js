
async function connectDevice() {
//     navigator.bluetooth.requestDevice({
//       filters: [{
//         services: ['00002A05-0000-1000-8000-00805F9B34FB']
          
          
//           //00002A05-0000-1000-8000-00805F9B34FB
//       }]
//     })
//     .then(device => { /* … */ })
//     .catch(error => { console.error(error); });
    
    
    navigator.bluetooth.requestDevice({
      filters: [{
        name: 'Pay controller'
      }],
      optionalServices: ['battery_service'] // Required to access service later.
    })
    .then(device => { /* … */ })
    .catch(error => { console.error(error); });
}

