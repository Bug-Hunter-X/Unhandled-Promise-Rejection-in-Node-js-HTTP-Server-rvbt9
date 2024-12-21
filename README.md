# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js asynchronous programming: unhandled promise rejections. The `bug.js` file contains a simple HTTP server that performs an asynchronous operation.  If the asynchronous operation fails, it throws an error. Without proper error handling, this unhandled rejection will cause the server to crash.

The solution (`bugSolution.js`) shows how to correctly handle promise rejections within the server's response handling to prevent crashes and provide graceful error responses to clients.

## How to Reproduce the Bug

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.
4. Make several requests to `http://localhost:3000`. You'll notice that it will eventually throw an error and crash.