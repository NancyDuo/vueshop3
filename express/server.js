const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const bodyParser = require('body-parser');
// const qs = require('qs-stringify')

// connect to database
const db_url = 'mongodb://localhost:27017/test'
mongoose.connect(db_url)
mongoose.connection.on('connected', () => {
    console.log('success to mongodb')
})
const Schema = mongoose.Schema

app.use(express.json());
app.use(express.urlencoded())


//login model
const loginModel = mongoose.model('users', new Schema({
    username: String,
    password: String,
}))
//login
app.post('/login', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    loginModel.find({
        username: req.body.username,
        password: req.body.password
    }, function (err, doc) {
        if (err) {
            console.log(err)
        } else {
            if (doc.length) {
                res.json({
                    status: 200
                })
            } else {
                res.json({
                    status: 404,
                    msg: 'not existed'
                })

            }

        }
    })
})

//user list model
const userModel = mongoose.model('test1', new Schema({
    name: String,
    age: Number,
}))
//get userlist
app.get('/users', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    let searchName = req.query.pageInfo
    if (searchName === '') {
        userModel.find((err, doc) => {
            let dataStart = (req.query.pageNum - 1) * (req.query.pageSize)
            let dataTo = (req.query.pageNum) * (req.query.pageSize)
            let totalPage = Math.floor((doc.length) / (req.query.pageSize))
            let users = doc.slice(dataStart, dataTo)
            res.json({
                queryData: users,
                pageTotal: totalPage
            })
        })
    } else {
        userModel.find({ name: searchName }, (err, doc) => {
            if (doc.length > 1) {
                let dataStart = (req.query.pageNum - 1) * (req.query.pageSize)
                let dataTo = (req.query.pageNum) * (req.query.pageSize)
                let totalPage = Math.floor((doc.length) / (req.query.pageSize))
                let users = doc.slice(dataStart, dataTo)
                res.json({
                    queryData: users,
                    pageTotal: totalPage
                })
            } else {
                res.json({
                    queryData: doc,
                    pageTotal: 1
                })
            }
        })
    }
})

// stock search
const stockModel = mongoose.model('inventories', new Schema({
    item: String,
    qty: String,
    size: Object,
    status: String
}))
stockModel.find({}, (err, doc) => {
    app.get('/stock', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.send(doc)
    })

})

app.listen(8100, (err) => {
    if (!err) console.log('port 8100 is ready')
})