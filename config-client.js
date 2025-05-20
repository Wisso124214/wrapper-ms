const clientHost = process.env.CLIENT_HOST || 'localhost';
const clientPort = process.env.CLIENT_PORT || '50051';

const serviceName = 'MY_BOOK_SERVICES';

const methods = {
  getAllBooks: {
    request: { title: 'Book 2', },
    foo: (res) => {
      const data = res.data;
      console.log('Books: ', data);
    },
  },
}

module.exports = {
  clientHost,
  clientPort,
  serviceName,
  methods,
};