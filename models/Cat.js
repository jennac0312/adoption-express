const mongoose = require("mongoose")

const CatSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        age: { type: Number  },
        description: { type: String  },
        hadFirstCheckup: { type: Boolean  },
        image: { type: String  }
    },
    {
        timestamps: true
    }
)

const Cat = mongoose.model( "Cat", CatSchema )
module.exports = Cat