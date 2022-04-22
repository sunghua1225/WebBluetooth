
async function connectDevice() {
//     navigator.bluetooth.requestDevice({
//       filters: [{
//         services: ['00002A05-0000-1000-8000-00805F9B34FB']
          
          
//           //00002A05-0000-1000-8000-00805F9B34FB
//       }]
//     })
//     .then(device => { /* … */ })
//     .catch(error => { console.error(error); });
    
    let dateNow=Date.now();
    
    navigator.bluetooth.requestDevice({
      filters: [{
        name: 'Pay'
      }],
      optionalServices: ['Pay controller'] // Required to access service later.
    })
    .then(device => {
          fetch("https://gateway.biandianxia.com", {
            method: "POST", 
            body: JSON.stringify({
                      UUID: '003C120K0fEQDRR01',
                      device_id: '52312',
                      charge_id: dateNow,
                      minute: '1'
            })
          }).then(res => {
            characteristic.writeValue(res);
          });
    })
    .catch(error => { console.error(error); });
          
          
    //let data = {name: 'DelftStack'};
     
          fetch("https://gateway.biandianxia.com", {
            method: "POST", 
            body: JSON.stringify({
                      UUID: '003C120K0fEQDRR01',
                      device_id: '52312',
                      charge_id: dateNow,
                      minute: '1'
            })
          }).then(res => {
            characteristic.writeValue(res);
          });
}


function postData(path, name, value){
          document.getElementById("formField").name  = name;
   	document.getElementById("formField").value = value;
    
    document.getElementById("form").action = path;
    document.getElementById("form").submit();
    
    //postData("https://www.wikipedia.org/","Writer","Jim Collins");
}

