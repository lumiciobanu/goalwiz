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

module.exports = router;