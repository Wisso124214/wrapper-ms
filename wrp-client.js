const { grpc, protoService } = require('./wrp-config.js');
const config_client = require('./config-client.js');

const grpcCredentials = config_client.grpcCredentials === undefined || config_client.grpcCredentials === 'insecure' ? grpc.credentials.createInsecure() : config_client.grpcCredentials;

const client = new protoService[config_client.serviceName](config_client.clientHost + ':' + config_client.clientPort, grpcCredentials);

const methods = Object.keys(config_client.methods);

methods.forEach(method => {
  const request = config_client.methods[method].request;
  const foo = config_client.methods[method].foo;

  // Research if all methods contains the (request, function) parameters 
  client[method](request, (err, res) => {
    if (err) {
      console.error('Error: ', err);
      return;
    }
    foo(res);
  });
});