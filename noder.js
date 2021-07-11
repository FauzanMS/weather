const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Fauzan's Calculator</title>
      <link rel="stylesheet" href="style.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,498&display=swap" rel="stylesheet">
  </head>
  <body>
      <div class="background">
          <div class="CalciBody">
              <div class="Company">designed by FAUZAN</div>
              <input type="text" name="screen" id="screen"><button id="btnerC" onclick="bnC()">C</button>
              <div class="butttons">
                  <div class="row">
                      <button id="btner7" onclick="bn7()">7</button>
                      <button id="btner8" onclick="bn8()">8</button>
                      <button  id="btner9" onclick="bn9()">9</button>
                     <button id="btnerd" onclick="bnd()">/</button>
                  </div>
                  <div class="row">
                      <button id="btner4"  onclick="bn4()">4</button>
                      <button  id="btner5" onclick="bn5()">5</button>
                      <button id="btner6"  onclick="bn6()">6</button>
                      <button id="btnerx" onclick="bnx()">X</button>
                  </div>
                  <div class="row">
                      <button id="btner1" onclick="bn1()">1</button>
                      <button id="btner2" onclick="bn2()">2</button>
                      <button id="btner3" onclick="bn3()">3</button >
                      <button id="btnermn" onclick="bnmn()">-</button>
                  </div>
                  <div class="row">
                      <button id="btner0" onclick="bn0()">0</button>
                      <button id="btnerdot" onclick="bndot()">.</button>
                      <button id="btnerplus" onclick="bnpl()">+</button>
                      <button id="btnereq" onclick="bneq()">=</button>
                  </div>
                  </div>
          </div>
      </div>
  <script src="main.js"></script>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});