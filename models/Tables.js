import mongoose from "mongoose";

const tableSchema = mongoose.Schema({

    "_id": {
        "$oid": {
            "type": "ObjectId"
        }
    },
    "table_id": {
        "type": "Number"
    },
    "orders": {
        "type": [
            "Array"
        ]
    },
    "last_used": {
        "$timestamp": {
            "t": {
                "type": "Number"
            },
            "i": {
                "type": "Number"
            }
        }
    },
    "vacant": {
        "type": "Boolean"
    }

})

export default mongoose.model('Table', tableSchema , 'Table');