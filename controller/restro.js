import mongoose from "mongoose";
import Menu from "../models/Menu.js";
import Tables from "../models/Tables.js";

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

const tableInfo = async (req, res) => {
        try {
            Tables.find({"_id": mongoose.Types.ObjectId(req.params.id)}, function (err, table) {
                console.log(table)
                if (table) {
                    res.status(201).json({ "success": true, "data": table })
                } else {
                    res.status(400).json({ "success": false, "data": [], "message": err })
                }

            });
        } catch (error) {
            res.status(500).json({ "success": false, "data": [], "message": error.toString() })
        }
}

const updateOrder = async (req, res) => {
    if(req.body.items){
        try {
            Tables.findOneAndUpdate({"_id": mongoose.Types.ObjectId(req.params.id)} , {$set: {"orders.$[el].items": req.body.items} },
            {
              arrayFilters: [{ "el.id": parseInt(req.params.ord) }],
              new: true
            }, function (err, table) {
                console.log(table)
                if (table) {
                    res.status(201).json({ "success": true, "data": table })
                } else {
                    res.status(400).json({ "success": false, "data": [], "message": err })
                }

            });
        } catch (error) {
            res.status(500).json({ "success": false, "data": [], "message": error.toString() })
        }
    }else{
        res.status(500).json({ "success": false, "data": [], "message": "Send Items to update !!" })
    }

}

const resetTable = async (req, res) => {
    if(req.params.id){
        try {
            Tables.findOneAndUpdate({"_id": mongoose.Types.ObjectId(req.params.id)} , {"vacant" : true , "orders":[] },
            null, function (err, table) {
                if (table) {
                    res.status(201).json({ "success": true, "data": [] , "message":"Resetted Successfully!" })
                } else {
                    res.status(400).json({ "success": false, "data": [], "message": err })
                }

            });
        } catch (error) {
            res.status(500).json({ "success": false, "data": [], "message": error.toString() })
        }
    }else{
        res.status(500).json({ "success": false, "data": [], "message": "Send Table Id to reset !!" })
    }
}

const getBill = async (req, res) => {
    try {
        Tables.find({"_id": mongoose.Types.ObjectId(req.params.id)}, function (err, table) {
            console.log(table)
            if (table) {
                res.status(201).json({ "success": true, "data": table })
            } else {
                res.status(400).json({ "success": false, "data": [], "message": err })
            }

        });
    } catch (error) {
        res.status(500).json({ "success": false, "data": [], "message": error.toString() })
    }
}

export {
    currentMenu,
    tableInfo,
    updateOrder,
    resetTable,
    getBill
}