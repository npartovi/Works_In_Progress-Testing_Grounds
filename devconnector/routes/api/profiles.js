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

// @route POST api/profiles
// @desc create/edit user profile
// @access Private

router.get('/', passport.authenticate('jwt', {session: false}), (req, res) =>{

    //Get Fields
    const profileFields = {}

    profileFields.user = req.user.id
    if(req.body.handle) profileFields.handle = req.body.handle;
    if(req.body.company) profileFields.company = req.body.company;
    if(req.body.website) profileFields.website = req.body.website;
    if(req.body.location) profileFields.location = req.body.location;
    if(req.body.bio) profileFields.bio = req.body.bio;
    if(req.body.status) profileFields.status = req.status.handle;
    if(req.body.githubusername) profileFields.githubusername = req.body.githubusername;

    // Skills - split into array
    if(typeof req.body.skills !== undefined){
        profileFields.skills = req.body.skills.split(",")
    }
    // Social
    profileFields.social = {}
    if(req.body.youtube) profileFields.social.youtube = req.body.youtube
    if(req.body.twitter) profileFields.social.twitter = req.body.twitter
    if(req.body.facebook) profileFields.social.facebook = req.body.facebook
    if(req.body.linkedin) profileFields.social.linkedin = req.body.linkedin
    if(req.body.instagram) profileFields.social.instagram = req.body.instagram

    Profile.findOne({user: req.user.id})
        .then((profile) => {
            if(profile){
                //Update
                Profile.findOneAndUpdate(
                    {user: req.user.id}, 
                    {$set: profileFields}, 
                    {new: true}
                )
                .then(() => res.json(profile))
            }else {
                //Create

                //Check if handle exists
                Profile.findOne({handle: profileFields.handle})
                    .then(profile => {
                        if(profile){
                            errors.handle = "That handle already exists"
                            res.status(400).json(errors)
                        }
                    })

                // Save Profile
                new Profile(profileFields).save().then((profile) => res.json(profile))
            }
        })
        
        
});


module.exports = router