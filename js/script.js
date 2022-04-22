
async function connectDevice() {
    
    
    navigator.bluetooth.requestDevice({
      filters: [{
        name: 'Pay'
      }],
      optionalServices: ['Pay controller'] // Required to access service later.
    })
    .then(device => { /* … */ })
    .catch(error => { console.error(error); });
          
     
}
