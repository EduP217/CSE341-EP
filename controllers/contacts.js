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

const create = async (req, res) => {
    const contact = req.body;
    res.setHeader('content-type', 'application/json');
    await contactSchema.create(contact)
        .then((r) => res.status(201).json({contactId : r.id}))
        .catch((err) => res.json({error : err}));
}

const update = async (req, res) => {
    const { id } = req.params;
    const contact = req.body;
    res.setHeader('content-type', 'application/json');
    await contactSchema.findByIdAndUpdate(id, contact)
        .then((r) => res.status(204).send())
        .catch((err) => res.json({error : err}));
}

const destroy = async (req, res) => {
    const { id } = req.params;
    res.setHeader('content-type', 'application/json');
    await contactSchema.findByIdAndDelete(id)
        .then((r) => res.status(200).json({status : "success"}))
        .catch((err) => res.json({error : err}));
}

module.exports = {
    all,
    findById,
    create,
    update,
    destroy
}