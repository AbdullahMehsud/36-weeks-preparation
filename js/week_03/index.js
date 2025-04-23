const express = require('express');
const users = require('./MOCK_DATA.json')
const app = express();
const PORT = 8000;
// route for html
// app.get('/users', (req, res) => {
//     const html = 
//     `<ul>
//     ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
//     </ul>`
//     res.send(html)
// })


// Basic route
app.get('api/users', (req, res) => {
  return res.json(users)
});

// get user by id 

app.route('/api/users/:id')
.get( (req, res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id)
    return res.json(user)
})
.patch((req, res) => {
    //TODO: edit user
    return res.json({status: "pending"})
})
.delete((req, res) => {
    //TODO: delete user
    return res.json({status: "pending"})
})

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
