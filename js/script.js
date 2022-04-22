
async function connectDevice() {
    
    //let dateNow=Date.now();
    
    navigator.bluetooth.requestDevice({
      filters: [{
        name: 'Pay'
      }],
      optionalServices: ['Pay controller'] // Required to access service later.
    })
    .then( device => {
          
    }
         )
    .catch(error => { console.error(error); });
          
          
    //let data = {name: 'DelftStack'};
     
//           fetch("https://gateway.biandianxia.com", {
//             method: "POST", 
//             body: JSON.stringify({
//                       UUID: '003C120K0fEQDRR01',
//                       device_id: '52312',
//                       charge_id: dateNow,
//                       minute: '1'
//             })
//           }).then(res => {
//             characteristic.writeValue(res);
//           });
}
