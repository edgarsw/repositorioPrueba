const expresss = require('express')
const router = expresss.Router()
const employeeCtl = require('../controllers/employee.controller')

//ruta base
router.get('/',employeeCtl.getEmployees)//get para recuperar
router.post('/',employeeCtl.insEmployee)//post para agregar
router.get('/:id',employeeCtl.getEmployee)
router.put('/:id',employeeCtl.updEmployee)//put es para actualizar
router.delete('/:id',employeeCtl.delEmployee)

module.exports = router;