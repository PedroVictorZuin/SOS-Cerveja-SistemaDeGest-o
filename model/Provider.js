const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Provider = {
    name :  { 
        type : String,
        required : true
    },
    company :  { 
        type : String,
        required : true
    },
    telephone1 :  { 
        type : String,
        required : true
    },
    telephone2 :  { 
        type : String,
        default : "(00)0000-0000"
    },
    email :  { 
        type : String,
        required : true
    },
    cnpj :  { 
        type : String,
        required : true
    },
    fisicAdress :  { 
        type : String,
        required : true
    },
    activity :  { 
        type : String,
        required : true
    },
}

mongoose.model("provider" , Provider);