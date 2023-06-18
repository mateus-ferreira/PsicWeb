import supertest from 'supertest';

describe('Patient funcional tests', () => {
   it('Should return patient data', async() => {
      const { body, status } = await supertest(app).get('/patient');
      expect(status).toBe(200);
      expect(body).toBe([{
          "name": "Mateus Ferreira",
          "age": "23"
      }]);
   });
});