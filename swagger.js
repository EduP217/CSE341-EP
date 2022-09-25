const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'CSE 341 | Web Services',
    description: 'CSE 341 Personal assignments',
  },
  host: 'cse341-ep-render.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });