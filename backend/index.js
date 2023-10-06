/*
1. initialize express server(required cors and body0parser)
2. initialize mongoose
3. create connection with database
4. create schema to store the data 
5. perform crud operation

echo "# dbUserTesting" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/002jenish/dbUserTesting.git
git push -u origin main
*/

const express = require('express');  //to start express server
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://jenish1234:jenish_1234@todo.8jbdgxm.mongodb.net/');
  console.log('db connected')
}
const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('User', userSchema);

const server = express();

server.use(cors());
server.use(bodyParser.json());

// CRUD - Create
server.post('/demo',async (req,res)=>{
    //create query
    try {
        let user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
        const doc = await user.save();

        console.log(doc);
        res.json(doc);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while saving the user.' });
    }
})

//read query
server.get('/demo',async (req,res)=>{
    const docs = await User.find({});
    res.json(docs)
})


server.listen(8080,()=>{
    console.log('server started')
})