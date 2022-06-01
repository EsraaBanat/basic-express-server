'use strict';
const server = require('../src/sever');
const supertest = require('supertest');
const req = supertest(server.app); 


describe('Validate the User Name', () => {
    test('Getting user name from /person route', async () => {
        let regex = /^[A-Za-z]{1,29}$/i;
        const res = await req.get('/person?name=esraa');
        expect(res.status).toEqual(200);
        expect(res.body).toEqual({ "name": "esraa" });
        expect(typeof res.body).toEqual('object');
        expect('Ahmad').toMatch(regex);
        expect('esraa').toMatch(regex);
        expect('tamara9').toEqual(expect.not.stringMatching(regex));
        expect('tama!').toEqual(expect.not.stringMatching(regex));
    });
})
