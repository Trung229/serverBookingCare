import db from '../models/index'
let homeController = async (req, res) => {
    try {
        const data = await db.user.findAll();
        return res.render('homepage.ejs', { data: JSON.stringify(data) })
    }catch(e){
        return res.render('homepage.ejs', { data: "no data" })
    }
}

module.exports = {
    homeController
}