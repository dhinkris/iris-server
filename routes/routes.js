module.exports.configure = function (app) {
    var express = require("express");
    const fs = require('fs');
    var cors = require('cors')


    var subject = require('../controller/subjects');
    app.use(cors());
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/', function(req, res) {
        res.render('Promotional/index', { title: 'Home' });
    });


    app.get('/privacy-policy', function(req, res) {
        res.render('Promotional/privacy-policy-index', { title: 'Privacy Policy' });
    });

    app.get('/terms-and-conditions', function(req, res) {
        res.render('Promotional/terms-index', { title: 'Terms and conditions' });
    });

    app.get('/api/subjectslist', subject.getSubjectsInfo)
}