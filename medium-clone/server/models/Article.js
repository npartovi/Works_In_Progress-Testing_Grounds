const mongoose = require('mongoose')

let ArticleSchema = new mongoose.Schema(

    text: String,
    title: String,
    description: String,
    feature_img: Number,
    claps: Number,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [
        {
            author:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            text: String
        }
    ]

)