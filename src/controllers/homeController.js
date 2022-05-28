import db from '../models/index'
let homeController =async (req, res) =>{
    const data = await db.User.findAll();
    return res.render('homepage.ejs',{data:JSON.stringify(data)})
}

module.exports = {
    homeController
}