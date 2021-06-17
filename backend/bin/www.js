#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Normalize a port into a number, string, or false.
 */

const normalizePort = (portToNormalize) => {
  const normalizedPort = parseInt(portToNormalize, 10);

  if (Number.isNaN(normalizedPort)) {
    // named pipe
    return normalizedPort;
  }

  if (normalizedPort >= 0) {
    // port number
    return normalizedPort;
  }

  return false;
};

/**
 * Event listener for HTTP server "error" event.
 */

const getOnErrorHandler = (usedPort) => (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind =
    typeof usedPort === "string" ? `Pipe ${usedPort}` : `Port ${usedPort}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

/**
 * Event listener for HTTP server "listening" event.
 */
const getOnListeningHandler = (server, debug) => () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
};

/**
 * Module dependencies.
 */
const http = require("http");
const debug = require("debug")("backend:server");
const app = require("../app");

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || "3000");

app.set("port", port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", getOnErrorHandler(port));
server.on("listening", getOnListeningHandler(server, debug));
