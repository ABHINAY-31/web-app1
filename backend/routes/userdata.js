// const router = require('express').Router();
// const UserData = require('../models/userdata.model');

// router.route('/').get((req, res) => {
//     UserData.find()
//     .then(usersData => res.json(usersData))
//     .catch(err => res.status(400).json('Error: ' + err));
// })

// router.route('/add').post((req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const address = req.body.address;
//     const itemName = req.body.itemName;
//     const itemQuantity = Number(req.body.itemQuantity);
//     const mobileNumber = Number(req.body.mobileNumber);

//     const newUserData = new UserData({
//         name, 
//         email,
//         address,
//         itemName,
//         itemQuantity,
//         mobileNumber,
//     });

//     newUserData.save()
//     .then(() => res.json('Data Added'))
//     .catch(err => res.status(400).json(`Error: ` + err));
// });

// router.route('/:id').get((req, res) => {
//     UserData.findById(req.params.id) 
//     .then(usersdata => res.json(usersdata))
//     .catch(err => res.status(400).json("Error : " + err));
// })

// router.route('/:id').delete((req, res) => {
//     UserData.findByIdAndDelete(req.params.id) 
//     .then(() => res.json("UserData deleted"))
//     .catch(err => res.status(400).json("Error : " + err));
// })

// router.route('/update/:id').post((req, res) => {
//     UserData.findById(req.params.id) 
//     .then(usersdata => {
//         usersdata.name = req.body.name;
//         usersdata.email = req.body.email;
//         usersdata.address = req.body.address;
//         usersdata.itemName = req.body.itemName;
//         usersdata.itemQuantity = Number(req.body.itemQuantity);
//         usersdata.mobileNumber = Number(req.body.mobileNumber);

//         usersdata.save()
//         .then(() => res.json("Updated Successfully"))
//         .catch(err => res.status(400).json("Error: " + err));
//     })
//     .catch(err => res.status(400).json("Error : " + err));
// });
// module.exports = router;






// routes/userdata.js

const router = require('express').Router();
const UserData = require('../models/userdata.model');

// GET all user data
router.route('/').get((req, res) => {
    UserData.find()
        .then(usersData => res.json(usersData))
        .catch(err => res.status(400).json('Error: ' + err));
});

// POST to add new user data
router.route('/add').post((req, res) => {
    const { name, email, address, itemName, itemQuantity, mobileNumber } = req.body;

    const newUserData = new UserData({
        name,
        email,
        address,
        itemName,
        itemQuantity: Number(itemQuantity),
        mobileNumber: Number(mobileNumber),
    });

    newUserData.save()
        .then(() => res.json('Data Added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// GET user data by ID
router.route('/:id').get((req, res) => {
    UserData.findById(req.params.id)
        .then(userData => res.json(userData))
        .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE user data by ID
router.route('/:id').delete((req, res) => {
    UserData.findByIdAndDelete(req.params.id)
        .then(() => res.json('UserData deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// POST to update user data by ID
router.route('/update/:id').post((req, res) => {
    UserData.findById(req.params.id)
        .then(userData => {
            // Update fields
            userData.name = req.body.name;
            userData.email = req.body.email;
            userData.address = req.body.address;
            userData.itemName = req.body.itemName;
            userData.itemQuantity = Number(req.body.itemQuantity);
            userData.mobileNumber = Number(req.body.mobileNumber);

            // Save the updated user data
            userData.save()
                .then(() => res.json('Updated Successfully'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
