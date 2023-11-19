const{findAll} = require("../models/planets");

const getAllPlanets = async ( req,res) => {
    res.status(200).jso(await findAll());
};

module.exports = {getAllPlanets};