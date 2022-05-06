// Mildware for validate
const dndschema = require("../validator/DNDvalidator")
module.exports = (req, res, next) => {


    try {
        const result = dndschema.validate(req.body);
        next()
    } catch {
        res.json({ message: "Input error" }).status(400);
    }

}