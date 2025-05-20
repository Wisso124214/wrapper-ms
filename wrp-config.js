const config = require('./config.js');

const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = path.join(__dirname, path.join(...config.protoPath));

const packageDefinition = protoLoader.loadSync(PROTO_PATH, config.protoConfig);

const protoService = grpc.loadPackageDefinition(packageDefinition)[config.packageName];

module.exports = {
  grpc,
  protoService,
}