const express = require("express");
const crudOperations = require("../services/services.js");
const router = express.Router();

// // Import middleware
// const auth = require("../middleware/auth")
// const { admin, patient } = require("../middleware/roles")

/*
    =============================================================
    -- crud operation [ get - add - update - delete] on router --
    =============================================================
*/

// 1. get all clinics
router.get("/get", async function (req, res) {
    try {
        res.json(await crudOperations.getALL("questions"));
    } catch (err) {
        console.error(`Error while update user `, err.message);
    }
});

// 2. add new clinic
router.post("/add", async function (req, res) {
    try {
        res.json(await crudOperations.createtObject("questions", ["question_text", "option1", "option2", "option3", "option4", "correct_option", "register_day", "material_id" ], req.body.name, req.body.option1, req.body.option2, req.body.option3, req.body.option4, req.body.correct, "now()", req.body.materialId));
    } catch (err) {
        console.error(`Error while update user `, err.message);
    }
});

// 3. update clinic
// router.put("/update/:doctorId", [ auth, admin ], async function (req, res, next) {
//     try {
//         res.json(await crudOperations.customUpdateClinic(req.body.cname, req.body.cstart, req.body.cend, req.body.clinicId, req.params.doctorId));
//     } catch (err) {
//         console.error(`Error while update user `, err.message);
//     }
// });

// 4. delete exist a clinic
// router.delete("/delete/:id", [ auth, admin ], async function (req, res) {
//     try {
//         res.json(await crudOperations.deleteObject("clinic", req.params.id));
//     } catch (err) {
//         console.error(`Error while update user `, err.message);
//     }
// });


module.exports = router