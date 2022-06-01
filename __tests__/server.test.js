'use strict';
const server = require('../src/sever');
const supertest = require('supertest');
const req = supertest(server.app);

describe('API Server', () => {
    test('Home Page Test', async () => {
        const response = await req.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('Hello World');
    });

    it('handle not found request', async () => {
        const res = await req.get('/prson');
        expect(res.status).toBe(404);
        expect(res.method).toBe(req.method);
    });
    
    it('handle server internal errors', async () => {
        const res = await req.get('/person?name=');
        expect(res.status).toEqual(500);
    })
})