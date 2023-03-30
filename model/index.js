const db = require('../config');

 // Timelines
class Timeline {
    fetchTimelines(req, res) {
        const fetchAllTimelines = `SELECT id, prodName, prodDesc, price, category, quantity, image, shipPrice FROM Timelines;`;

        db.query(fetchAllTimelines, (err, results) => {
            if (err) throw err, console.log(err);
            res.status(200).json({
                results: results
            });
        });
    };
    fetchTimeline(req, res) {
        const fetchTimelineQuery = `SELECT id, prodName, prodDesc, price, category, quantity, image, shipPrice FROM Timelines WHERE id = ?;`;

        db.query(fetchTimelineQuery, [req.params.id], (err, results) => {
            if (err) throw err, console.log(err);
            res.status(200).json({
                results: results
            });
        });
    };
    addTimeline(req, res) {
        const addTimelineQuery = `INSERT INTO Timelines SET ?;`;

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
        const updateQuery = `UPDATE Timelines SET ? WHERE id = ?;`;

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
        const deleteQuery = `DELETE FROM Timelines WHERE id = ?;`;

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
        const fetchAllTestimonials = `SELECT id, prodName, prodDesc, price, category, quantity, image, shipPrice FROM Testimonials;`;

        db.query(fetchAllTestimonials, (err, results) => {
            if (err) throw err, console.log(err);
            res.status(200).json({
                results: results
            });
        });
    };
    fetchTestimonial(req, res) {
        const fetchTestimonialQuery = `SELECT id, prodName, prodDesc, price, category, quantity, image, shipPrice FROM Testimonials WHERE id = ?;`;

        db.query(fetchTestimonialQuery, [req.params.id], (err, results) => {
            if (err) throw err, console.log(err);
            res.status(200).json({
                results: results
            });
        });
    };
    addTestimonial(req, res) {
        const addTestimonialQuery = `INSERT INTO Testimonials SET ?;`;

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
        const updateQuery = `UPDATE Testimonials SET ? WHERE id = ?;`;

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
        const deleteQuery = `DELETE FROM Testimonials WHERE id = ?;`;

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
        const fetchAllProjects = `SELECT id, prodName, prodDesc, price, category, quantity, image, shipPrice FROM Projects;`;

        db.query(fetchAllProjects, (err, results) => {
            if (err) throw err, console.log(err);
            res.status(200).json({
                results: results
            });
        });
    };
    fetchProject(req, res) {
        const fetchProjectQuery = `SELECT id, prodName, prodDesc, price, category, quantity, image, shipPrice FROM Projects WHERE id = ?;`;

        db.query(fetchProjectQuery, [req.params.id], (err, results) => {
            if (err) throw err, console.log(err);
            res.status(200).json({
                results: results
            });
        });
    };
    addProject(req, res) {
        const addProjectQuery = `INSERT INTO Projects SET ?;`;

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
        const updateQuery = `UPDATE Projects SET ? WHERE id = ?;`;

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
        const deleteQuery = `DELETE FROM Projects WHERE id = ?;`;

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
        const fetchAllContacts = `SELECT id, prodName, prodDesc, price, category, quantity, image, shipPrice FROM Contacts;`;

        db.query(fetchAllContacts, (err, results) => {
            if (err) throw err, console.log(err);
            res.status(200).json({
                results: results
            });
        });
    };
    fetchContact(req, res) {
        const fetchContactQuery = `SELECT id, prodName, prodDesc, price, category, quantity, image, shipPrice FROM Contacts WHERE id = ?;`;

        db.query(fetchContactQuery, [req.params.id], (err, results) => {
            if (err) throw err, console.log(err);
            res.status(200).json({
                results: results
            });
        });
    };
    addContact(req, res) {
        const addContactQuery = `INSERT INTO Contacts SET ?;`;

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
        const deleteQuery = `DELETE FROM Contacts WHERE id = ?;`;

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