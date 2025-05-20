const services = {
  MY_BOOK_SERVICES: {
    getAllBooks: (call, callback) => {
      const books = [
        { title: 'Book 1' },
        { title: 'Book 2' },
      ];
      
      const data = books.filter(book => book.title === call.request.title);
      callback(null, { data });
    },
  },
};

const grpcPort = '50051';
const grpcHost = '0.0.0.0';
const grpcCredentials = 'insecure';


module.exports = {
  services,
  grpcPort,
  grpcHost,
  grpcCredentials,
}