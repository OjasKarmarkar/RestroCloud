import mongoose from "mongoose";
const menuSchema = new mongoose.Schema({
    "_id": {
        "$oid": {
            "type": "ObjectId"
        }
    },
    "index": {
        "$numberInt": {
            "type": "Date"
        }
    },
    "name": {
        "type": "String"
    },
    "ingredients": {
        "type": [
            "String"
        ]
    },
    "diet": {
        "type": "String"
    },
    "prep_time": {
        "$numberInt": {
            "type": "Date"
        }
    },
    "cook_time": {
        "$numberInt": {
            "type": "String"
        }
    },
    "flavor_profile": {
        "type": "String"
    },
    "course": {
        "type": "String"
    },
    "state": {
        "type": "String"
    },
    "region": {
        "type": "String"
    },
    "img": {
        "type": "String"
    },
    "available": {
        "type": "Boolean"
    }
});
export default mongoose.model('RestroDB', menuSchema, 'Menu',);