// Import dependecies
const db = require("./db");

/*
    ======================
    -- services methods --
    ======================
*/

/*
    ===============================================================
    -- crud operation [ get - add - update - delete] on Database --
    ===============================================================
*/

// 1. Get all
async function getALL(table) {
    try {
        
        // Variables
        let sql = `SELECT * FROM ${table} WHERE ?`;

        // Execute query on DB
        let rows = await db.execute(sql, [1]);

        // Check if doctors are not there in db return error
        if (rows[0].length < 1) return {
            ok: false,
            error: `not elements`
        }

        return {
            ok: true,
            length: rows[0].length,
            content: rows[0]
        };

    } catch (err) {
        return err.message;
    }
}


// 2. add
async function createtObject(table, [...cols], ...values) {
    try {
         /*
             ------------------------------------
             --- Steps to insert data into DB ---
             ------------------------------------
             a. check the data is exist or is not
             b. validation on server
             c. validation on DB  ==> not exist
             d. insert data into DB
         */
 
         // general settings ******************************
         // to create dynamic sql query
         let newCols = "";
         let placeValue = "";
     
         for (let i = 1; i <= cols.length; i++) {
             newCols = `${newCols} ${cols[i-1]},`;
             placeValue = `${placeValue} ?,`;
         }
         newCols = `(${newCols.slice(0, -1)} )`;            //  (  name, password, email )
         placeValue = `(${placeValue.slice(0, -1)} )`;     //  (?, ?, ?)
 
         // *************************************** end settings
 
         // variables 🚩 ✅
         let sql = `INSERT INTO ${ table } ${ newCols } VALUES ${ placeValue }`;

         // d. insert data into DB
         let rows = await db.execute(sql, values);

         if (rows[0].affectedRows > 0) {
            return {
                ok: true,
                message: rows[0],
            }
        }
    } catch(err) {
         return err.message;
    }
  }



module.exports = {
    createtObject,
    getALL
}
