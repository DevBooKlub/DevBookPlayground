import {Schema, model} from 'mongoose';

const tokenSchema = new Schema ({
    uid: {
        type: Schema.Types.ObjectId,
        required: true
    },

    token: {
        type: String,
        required: true
    },

    iat: {
        type: Date,
        default: new Date(Date.now())
    }
})

 export const MailToken = model('MailToken', tokenSchema);


 