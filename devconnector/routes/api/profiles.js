const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

// Load Profile Model

const Profile = require('../../models/Profile')

//Load User Profile

const User = require('../../models/User')

// @route GET api/profiles/test
// @desc Tests profiles route
// @access Public
router.get('/test', (req, res) => res.json({msg: 'Profile Works'}))

// @route GET api/profiles
// @desc Get current users profile
// @access Private

router.get('/', passport.authenticate('jwt', {session: false}), (req, res) =>{

    const errors = {}
    Profile.findOne({user: req.user.id})
        .then((profile) => {
            if(!profile){
                errors.noprofile = "there is no profile for the user"
                return res.status(404).json(errors)
            }
            res.json(profile)
        })
        .catch((err) => {
            return res.status(404).json(err)
        })
});


module.exports = router