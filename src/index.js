const express   = require('express');
const rimu      = express();
const port      = 1991;

rimu.use(express.json());

// IMPORT ROUTER FILE
const { routerEmployee } = require('./router');

rimu.use(routerEmployee)

rimu.listen(port, () => {
    console.log("Running at ", port);
})