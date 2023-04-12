const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const route = express.Router();
const {Timeline} = require('../model');
const {Testimonial} = require('../model');
const {Project} = require('../model');
const {Contact} = require('../model');
const timeline = new Timeline();
const project = new Project();
const testimonial = new Testimonial();
const contact = new Contact();

// USERS ROUTES

route.get('^/$|/Portfolio', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
});
// Testimonials ROUTES

route.get('/testimonials', (req, res) => {
    testimonial.fetchTestimonials(req, res);
});

route.get('/testimonial/:id', (req, res) => {
    testimonial.fetchTestimonial(req, res);
});

route.post('/testimonial', bodyParser.json(), (req, res) => {
    testimonial.addTestimonial(req, res);
});

route.put('/testimonial/:id', bodyParser.json(), (req, res) => {
    testimonial.updateTestimonial(req, res);
});

route.delete('/testimonial/:id', (req, res) => {
    testimonial.deleteTestimonial(req, res);
});
// Timeline ROUTES

route.get('/timelines', (req, res) => {
    timeline.fetchTimelines(req, res);
});

route.get('/timeline/:id', (req, res) => {
    timeline.fetchTimeline(req, res);
});

route.post('/timeline', bodyParser.json(), (req, res) => {
    timeline.addTimeline(req, res);
});

route.put('/Timeline/:id', bodyParser.json(), (req, res) => {
    timeline.updateTimeline(req, res);
});

route.delete('/timeline/:id', (req, res) => {
    timeline.deleteTimeline(req, res);
});

// Projects
route.post('/project', bodyParser.json(), (req, res) => {
    project.addProject(req, res);
});
route.get('/project/:id', (req, res) => {
    project.fetchProject(req, res);
});
route.get('/projects', (req, res) => {
    project.fetchProjects(req, res);
});
route.put('/project/:id', bodyParser.json(), (req, res) => {
    project.updateProject(req, res);
});
route.delete('/project/:id', (req, res) => {
    project.deleteProject(req, res);
});

// Contacts
route.post('/contact', bodyParser.json(), (req, res) => {
    contact.addContact(req, res);
});
route.delete('/contact/:id', (req, res) => {
    contact.deleteContact(req, res);
});
route.get('/contact/:id', (req, res) => {
    contact.fetchContact(req, res);
});
route.get('/contacts', (req, res) => {
    contact.fetchContacts(req, res);
});

module.exports = route;