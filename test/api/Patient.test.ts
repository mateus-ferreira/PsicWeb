const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('CRUD tests', () => {
   describe('Create tests', () => {
       it('Should be able create a patient', async() => {
          const data =  chai.request('http://localhost:3000')
              .get('/patient');
          console.info(data);
       });
   });
});