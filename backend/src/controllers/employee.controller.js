const employeeCtrl = {}
const Employee = require('../models/employee.model')

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find()
    res.json(employees)
}

employeeCtrl.insEmployee = async (req, res) => {   
    try {
        const employee = new Employee(
            {
                name: req.body.name,
                position: req.body.position,
                office: req.body.office,
                salary: req.body.salary
            }
        )
        await employee.save().catch()        
    } catch (e) {
        res.json({
            status: 400,
            message:'Server error!!'
        })
    } finally {
        res.json({
            status: 500,
            message:'Employee Saved Success'
        })
    }
}

employeeCtrl.updEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json({status: 'Employee Updated'});
}

employeeCtrl.delEmployee = async (req, res) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({status: 'Employee Deleted'});
}

employeeCtrl.getEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    res.json(employee);
}

module.exports = employeeCtrl