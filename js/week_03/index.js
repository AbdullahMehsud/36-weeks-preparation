const express = require('express');
const users = require('./MOCK_DATA.json')
const fs = require('fs')
const app = express();
const PORT = 5000;
// route for html
// app.get('/users', (req, res) => {
//     const html = 
//     `<ul>
//     ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
//     </ul>`
//     res.send(html)
// })

app.use(express.urlencoded({extended: false}))
// Basic route
app.get('/api/users', (req, res) => {
  return res.json(users)
});

// get user by id 
app.post('/api/users', (req, res) => {
    const user = req.body
    users.push({...user, id: users.length + 1})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
      return res.json({status: "success"})
    })
})
app.route('/api/users/:id')
.get( (req, res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id)
    return res.json(user)
})
.patch((req, res) => {
    //TODO: edit user
    const id = Number(req.params.id)
    const userIndex = users.findIndex(user => user.id === id)
    const updateUser = {...users[userIndex], ...req.body}
    console.log(updateUser);
    
    users[userIndex] = updateUser

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        
      return res.json({status: "success", user: updateUser})
    })
    
    
})
.delete((req, res) => {
    //TODO: delete user
    const id = Number(req.params.id)
    const usserIndex = users.findIndex(user => user.id === id)
    const update = users.splice(usserIndex, 1)
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({status: "success"})
    })
    // return res.json({status: "success", user: update })
})

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
