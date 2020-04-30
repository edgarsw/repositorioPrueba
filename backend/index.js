"use strict";
const cors = require("cors");
const express = require('express')
const morgan = require('morgan')
const app = express()
const { mongoose } = require('./database')
//Otra forma de llamar las rutas
//const routerEmployee = require('./src/routes/employee.routes')

//Settings
app.set('port', process.env.PORT || 3000)

//Middleware
app.use(cors());
app.use(morgan('dev'))
app.use(express.json())

//Routes
//app.use(routerEmployee)
app.use('/api/employees',require('./src/routes/employee.routes'))

// Starting server
app.listen(app.get('port'), () => {
    console.log(`Server listen on port ${app.get('port')}`)
})