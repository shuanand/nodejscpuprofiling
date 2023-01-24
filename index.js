const express = require('express')
const app = express()
//const host = '0.0.0.0';
const port = process.env.PORT || 3001;

function calculate() {
  return nestedLoop();
}

function nestedLoop() {
  let result = 0;
  for(let i=0; i<1000; i++) {
    for(let j=0; j<1000; j++) {
      for(let k=0; k<1000; k++) {
        result = i + j + k + result;
      }
    }
  }
  console.log(result)
  return result;
}


app.get('/user', (req, res) => {
  calculate();
  res.send('Hello new user!')
})


app.get('/end', function(req, res){
    process.exit(0);
  });

  process.on('SIGUSR2', () => {
    process.exit(0);
  });


app.listen(port,()=>{
    console.log("app is running on new port"+port)
})