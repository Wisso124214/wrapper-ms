const protoPath = ['proto', 'books.proto'];

const protoConfig = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const packageName = 'books';

module.exports = {
  protoPath,
  protoConfig,
  packageName,
};