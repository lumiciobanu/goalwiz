const express = require('express');
const router = express.Router();
const goalsData = require('../data/goals.json')


//GET / goals
router.get('/', (req, res) => {
    const goalDataList = goalsData.map (goal => {
        return {
            id: goal.id,
            title: goal.title
        }
    })

    res.status(200).json(goalsData);
})


//GET /:goalId

router.get('/:goalId', (req, res) => {
    let goalDetails = goalsData.find(goals => goal.id === req.params.goalId);
    if (goalDetails) {
        res.status(200).json(goalDetails);
    } else {
        res.status(400).json({success: false, error: "no goal with that id exists"});
    }
});


// DELETE

router.delete('/:goalId', (req, res) => {
    let goalToDelete = goalsData.findIndex(goals => goal.id === req.params.goalId )
    goalToDelete >= 0?
    res.status(200).json(goalsDaTA.splice(goalToDelete, 1)):
    res.status(400).json({success: false, error: "Cannot delete, item not exist"});
});


//POST 
router.post('/', (req, res) => {
    
    const newGoal = {
        id: req.body.id,
        title: req.body.title
    };
    console.log(req.body);
    goalsData.push(newGoal);
    res.status(201).json(newGoal);
});

module.exports = router;