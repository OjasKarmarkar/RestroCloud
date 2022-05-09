import Menu from "../models/Menu.js";

const currentMenu = async (req, res) => {
    try {
        Menu.find({}, function (err, fetchedMenu) {
            
            if (fetchedMenu) {
                res.status(201).json({ "success": true, "data": fetchedMenu })
            } else {
                res.status(400).json({ "success": false, "data": [], "message": err })
            }

        });
    } catch (error) {
        res.status(500).json({ "success": false, "data": [], "message": error })
    }

}

export {
    currentMenu
}