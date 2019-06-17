const rimuDB = require('../database');

module.exports = {
    // SHOW ALL EMPLOYEES
    employeeShow : (req, res) => {
        // input query sql
        var sql = `select * from karyawan`;
        // akses database dengan perintah query
        rimuDB.query(sql, (error, result) => {
            // kalau error
            if(error) return res.send(error.sqlMessage);
            // kalau berhasil
            res.send(result);
        });
    },

    // ADD employee
    employeeAdd : (req, res) => {
        var data = req.body

        // input query sql
        var sql  = `insert into karyawan set ?`;
        var sql2 = `select * from karyawan`;
        
        // akses database dengan perintah query
        rimuDB.query(sql, data, (error, result) => {
            if(error) return res.send(error.sqlMessage);

            rimuDB.query(sql2, (error, result) => {
                if(error) return res.send(error.sqlMessage);
                res.send(result);
            });
        });
    },

    // UPDATE employee
    employeeUpdate : (req, res) => {
        var newData = [req.body, req.params.id];

        // input query sql
        var sql   = `update karyawan set ? where id = ?`;
        var sql2  = `select * from karyawan`;
        
        // akses database dengan perintah query
        rimuDB.query(sql, newData, (error, result) => {
            if(error) return res.send(error.sqlMessage);

            rimuDB.query(sql2, (error, result) => {
                if(error) return res.send(error.sqlMessage);
                res.send(result);
            });
        });
    },

    // DELETE employee
    employeeDelete : (req, res) => {
        var deleteData = req.params.id;

        // input query sql
        var sql   =`delete from karyawan where id = ?`;
        var sql2  =`select * from karyawan`;

        // akses database dengan perintah query
        rimuDB.query(sql, deleteData, (error,result) => {
            if(error) return res.send(error.sqlMessage);
            
            rimuDB.query(sql2, (error,result) => {
                if(error) return res.send(error.sqlMessage);
                res.send(result);
            });
    
        });
    }

};