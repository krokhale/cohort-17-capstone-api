var express = require('express');
var router = express.Router();

let models = require('../lib/models')

// RESTful API routes
// 1) Create a question
// POST http://localhost:3000/api/questions
// 2) Fetch all the questions
// GET http://localhost:3000/api/questions

// 3) Create an answer for a question
// POST http://localhost:3000/api/questions/45/answers // Create an answer for question number 45
// POST http://localhost:3000/api/questions/:questionId/answers // We will have access to :questionId using req.params.questionId
// models.Answer.create({questionId: req.params.questionId, questionText: req.body.questionText})
// 4) Get all the answers for a question
// GET http://localhost:3000/api/questions/:questionId/answers





// POST http://localhost:3000/api/questions
router.post('/questions', async function(req, res, next) {
    console.log('req.body are', req.body)
    console.log('req.query', req.query)
    let question = await models.Question.create({questionText: req.body.questionText, category: req.query.category})
    res.json(question)
});

// Get http://localhost:3000/api/questions
router.get('/questions', async function(req, res, next) {
    console.log('req.query', req.query)
    let questions = await models.Question.findAll({where: {category: req.query.category}})
    res.json(questions)
});



/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('this is the API home page!')
});

module.exports = router;
