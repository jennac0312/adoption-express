const mongoose = require("mongoose")

const dogSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        age: { type: Number  },
        description: { type: String  },
        breed: { type: String  },
        image: { type: String  }
    },
    {
        timestamps: true
    }
)

const Dog = mongoose.model( "Dog", dogSchema )
module.exports = Dog