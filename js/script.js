
async function connectDevice() {
    
    
    navigator.bluetooth.requestDevice({
//       filters: [{
//         name: 'Pay'
//       }],
        acceptAllDevices: true,
      optionalServices: ['Pay controller'] // Required to access service later.
    })
    .then(device => { /* … */ })
    .catch(error => { console.error(error); });
          
     
}
