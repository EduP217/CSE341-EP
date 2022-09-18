const contactSchema = require("../models/contacts");

const all = async (req, res) => {
    await contactSchema.find()
        .then((data) => res.json(data))
        .catch((err) => res.json({error : err}));
}

const findById = async (req, res) => {
    const { id } = req.params;

    await contactSchema.findById(id)
        .then((data) => res.json(data))
        .catch((err) => res.json({error : err}));
}

module.exports = {
    all,
    findById
}