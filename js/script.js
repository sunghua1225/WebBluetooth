let button = document.getElementById("connect");

let options = {
  filters: [
    {services: ['heart_rate']},
    {services: [0x1802, 0x1803]},
    {services: ['c48e6067-5295-48d3-8d5c-0395f61792b1']},
    {name: 'ExampleName'},
    {namePrefix: 'Prefix'}
  ],
  optionalServices: ['battery_service']
}


button.addEventListener("click", async () => { 
    navigator.bluetooth.requestDevice(options).then(function(device) {
      console.log('Name: ' + device.name);
      // Do something with the device.
    })
    .catch(function(error) {
      console.log("Something went wrong. " + error);
    });
});

