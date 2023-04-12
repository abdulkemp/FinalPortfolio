const db = require('../config');

 // Timelines
class Timeline {
    fetchTimelines(req, res) {
        const fetchAllTimelines = `SELECT idtimeline, timeName, timeSetDate, timeDesc, FROM timelines;`;

        db.query(fetchAllTimelines, (err, results) => {
            if (err) throw err, console.log(err);
            res.status(200).json({
                results: results
            });
        });
    };
    fetchTimeline(req, res) {
        const fetchTimelineQuery = `SELECT idtimeline, timeName, timeSetDate, timeDesc, FROM timelines WHERE idtimeline = ?;`;

        db.query(fetchTimelineQuery, [req.params.id], (err, results) => {
            if (err) throw err, console.log(err);
            res.status(200).json({
                results: results
            });
        });
    };
    addTimeline(req, res) {
        const addTimelineQuery = `INSERT INTO timelines SET ?;`;

        db.query(addTimelineQuery, [req.body], (err) => {
            if (err) {
                res.status(400).json({
                    err: 'Unable to insert a new record.'
                }), console.log(err);;
            } else {
                res.status(200).json({
                    msg: 'Timeline saved'
                });
            };
        });
    };
    updateTimeline(req, res) {
        const updateQuery = `UPDATE timelines SET ? WHERE idtimeline = ?;`;

        db.query(updateQuery, [req.body, req.params.id], (err) => {
            if (err) {
                console.log(err);
                res.status(400).json({
                    err: 'Unable to update a record.'
                });
            } else {
                res.status(200).json({
                    msg: 'Timeline updated'
                });
            };
        });
    }
    deleteTimeline(req, res) {
        const deleteQuery = `DELETE FROM timelines WHERE idtimeline = ?;`;

        db.query(deleteQuery, [req.params.id], (err) => {
            if (err) res.status(400).json({
                err: 'The record was not found.'
            });
            res.status(200).json({
                msg: 'A Timeline was deleted'
            });
        });
    };
};
// Testimonials
class Testimonial {
    fetchTestimonials(req, res) {
        const fetchAllTestimonials = `SELECT idtest, testName, testSpeech, testImage, FROM testimonials;`;

        db.query(fetchAllTestimonials, (err, results) => {
            if (err) throw err, console.log(err);
            res.status(200).json({
                results: results
            });
        });
    };
    fetchTestimonial(req, res) {
        const fetchTestimonialQuery = `SELECT idtest, testName, testSpeech, testImage, FROM testimonials WHERE idtest = ?;`;

        db.query(fetchTestimonialQuery, [req.params.id], (err, results) => {
            if (err) throw err, console.log(err);
            res.status(200).json({
                results: results
            });
        });
    };
    addTestimonial(req, res) {
        const addTestimonialQuery = `INSERT INTO testimonials SET ?;`;

        db.query(addTestimonialQuery, [req.body], (err) => {
            if (err) {
                res.status(400).json({
                    err: 'Unable to insert a new record.'
                }), console.log(err);;
            } else {
                res.status(200).json({
                    msg: 'Testimonial saved'
                });
            };
        });
    };
    updateTestimonial(req, res) {
        const updateQuery = `UPDATE testimonials SET ? WHERE idtest = ?;`;

        db.query(updateQuery, [req.body, req.params.id], (err) => {
            if (err) {
                console.log(err);
                res.status(400).json({
                    err: 'Unable to update a record.'
                });
            } else {
                res.status(200).json({
                    msg: 'Testimonial updated'
                });
            };
        });
    }
    deleteTestimonial(req, res) {
        const deleteQuery = `DELETE FROM testimonials WHERE idtest = ?;`;

        db.query(deleteQuery, [req.params.id], (err) => {
            if (err) res.status(400).json({
                err: 'The record was not found.'
            });
            res.status(200).json({
                msg: 'A Testimonial was deleted'
            });
        });
    };
};
// Projects
class Project {
    fetchProjects(req, res) {
        const fetchAllProjects = `SELECT idprojects, projName, github, liveLink, image, FROM projects;`;

        db.query(fetchAllProjects, (err, results) => {
            if (err) throw err, console.log(err);
            res.status(200).json({
                results: results
            });
        });
    };
    fetchProject(req, res) {
        const fetchProjectQuery = `SELECT idprojects, projName, github, liveLink, image, FROM projects WHERE idprojects = ?;`;

        db.query(fetchProjectQuery, [req.params.id], (err, results) => {
            if (err) throw err, console.log(err);
            res.status(200).json({
                results: results
            });
        });
    };
    addProject(req, res) {
        const addProjectQuery = `INSERT INTO projects SET ?;`;

        db.query(addProjectQuery, [req.body], (err) => {
            if (err) {
                res.status(400).json({
                    err: 'Unable to insert a new record.'
                }), console.log(err);;
            } else {
                res.status(200).json({
                    msg: 'Project saved'
                });
            };
        });
    };
    updateProject(req, res) {
        const updateQuery = `UPDATE projects SET ? WHERE idprojects = ?;`;

        db.query(updateQuery, [req.body, req.params.id], (err) => {
            if (err) {
                console.log(err);
                res.status(400).json({
                    err: 'Unable to update a record.'
                });
            } else {
                res.status(200).json({
                    msg: 'Project updated'
                });
            };
        });
    }
    deleteProject(req, res) {
        const deleteQuery = `DELETE FROM projects WHERE idprojects = ?;`;

        db.query(deleteQuery, [req.params.id], (err) => {
            if (err) res.status(400).json({
                err: 'The record was not found.'
            });
            res.status(200).json({
                msg: 'A Project was deleted'
            });
        });
    };
};
// Contacts
class Contact{
    fetchContacts(req, res) {
        const fetchAllContacts = `SELECT idcontact, conName, conEmail, conNo, conText FROM contacts;`;

        db.query(fetchAllContacts, (err, results) => {
            if (err) throw err, console.log(err);
            res.status(200).json({
                results: results
            });
        });
    };
    fetchContact(req, res) {
        const fetchContactQuery = `SELECT idcontact, conName, conEmail, conNo, conText FROM contacts WHERE idcontact = ?;`;

        db.query(fetchContactQuery, [req.params.id], (err, results) => {
            if (err) throw err, console.log(err);
            res.status(200).json({
                results: results
            });
        });
    };
    addContact(req, res) {
        const addContactQuery = `INSERT INTO contacts SET ?;`;

        db.query(addContactQuery, [req.body], (err) => {
            if (err) {
                res.status(400).json({
                    err: 'Unable to insert a new record.'
                }), console.log(err);;
            } else {
                res.status(200).json({
                    msg: 'Contact saved'
                });
            };
        });
    };
    deleteContact(req, res) {
        const deleteQuery = `DELETE FROM contacts WHERE idcontact = ?;`;

        db.query(deleteQuery, [req.params.id], (err) => {
            if (err) res.status(400).json({
                err: 'The record was not found.'
            });
            res.status(200).json({
                msg: 'A Contact was deleted'
            });
        });
    };
};

module.exports = {
   Timeline,
   Testimonial,
   Project,
   Contact
};