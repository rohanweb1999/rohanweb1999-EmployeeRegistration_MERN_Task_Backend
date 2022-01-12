const express = require("express");
const router = express.Router();
const Employee = require('../model/empSchema');


router.get('/getEmployees', async (req, res) => {
    try {
        const employees = await Employee.find()
        res.send((employees));
    }
    catch (err) {
        console.log("error: ", err)
        res.send("error" + err);
    }
});

router.post('/addEmployee', async (req, res) => {
    const employee = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        contact: req.body.contact,
        profession: req.body.profession,
        salary: req.body.salary,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,

    })
    try {
        const e1 = await employee.save();
        res.send((e1))
    }
    catch (err) {
        console.log("error: ", err)
        res.send("error" + err)
    };
});

router.get('/getEmployee/:id', async (req, res) => {

    try {
        const employee = await Employee.findById(req.params.id)
        console.log("get request for a emp", employee);
        res.send(employee)
    }
    catch (err) {
        console.log("error: ", err)
        res.send("error" + err)
    };
});

router.put('/updateEmployee/:id', async (req, res) => {

    try {
        const employee = await Employee.findById(req.params.id);
        employee.firstName = req.body.firstName;
        employee.lastName = req.body.lastName;
        employee.email = req.body.email;
        employee.contact = req.body.contact;
        employee.profession = req.body.profession;
        employee.salary = req.body.salary;
        employee.password = req.body.password;
        employee.confirmPassword = req.body.confirmPassword;

        const e1 = await employee.save();
        res.send((e1));
    }
    catch (err) {
        console.log("error: ", err)
        res.send("error" + err)
    };
});

router.delete('/:id', async (req, res) => {

    try {
        const employee = await Employee.findById(req.params.id);
        const e1 = employee.remove();
        res.send(e1)
    }
    catch (err) {
        console.log("error: ", err)
        res.send("error" + err)
    };
});


module.exports = router;