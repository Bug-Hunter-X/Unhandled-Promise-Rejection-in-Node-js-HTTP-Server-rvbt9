const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }).catch(error => {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

async function someAsyncOperation() {
  //Simulate an error
  const random = Math.random();
  if(random < 0.5){
    throw new Error('Something went wrong!');
  }
  return 'Success';
}

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});