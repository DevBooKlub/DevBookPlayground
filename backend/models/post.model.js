import { Schema, model } from 'mongoose';
const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    desc: {
        type: String,
        maxlength: [
            100,
            '{PATH} name must be between 100 or less characters long.',
        ],
        required: true,
    },
    title: {
        type: String,
        maxlength: [
            50,
            '{PATH} name must be between 50 or less characters long.',
        ],
        required: true,
    },
    image: {
        type: String,
    },
    likes: {
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        default: [],
    },
    comments: {
        type: [String],
        default: [],
    },
}, { timestamps: true });
postSchema.pre(/^find/, function (next) {
    this.populate({ path: 'user', select: 'username userPic nickname' });
    next();
});
const Post = model('Post', postSchema);
export { Post as default };
