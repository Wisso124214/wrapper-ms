const { grpc, protoService } = require('./wrp-config.js');
const config_server = require('./config-server.js');

const server = new grpc.Server();

const services = Object.keys(config_server.services);

services.forEach(service => {

  const serviceMethods = Object.keys(config_server.services[service]);
  serviceMethods.forEach(method => {
    server.addService(protoService[service].service, {
      [method]: config_server.services[service][method],
    });
  });
})

const grpcCredentials = config_server.grpcCredentials === undefined || config_server.grpcCredentials === 'insecure' ? grpc.ServerCredentials.createInsecure() : config_server.grpcCredentials;

server.bindAsync(config_server.grpcHost + ':' + config_server.grpcPort, grpcCredentials, (err, port) => {
  if (err) {
    console.error('Error binding server: ', err);
    return;
  }
  console.log('Server running at http://' + config_server.grpcHost + ':' + port);
});