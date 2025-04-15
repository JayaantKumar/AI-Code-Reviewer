const AiService = require('../services/ai.service')

module.exports.getReview = async(req, res) =>{

    const code = req.body.code;

    if(!code){
        return res.status(400).send("Prompt is invalid")
    }

    const response = await AiService(code);

    res.send(response)
}