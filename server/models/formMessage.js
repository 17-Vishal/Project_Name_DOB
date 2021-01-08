
import mongoose from 'mongoose';

const formSchema = mongoose.Schema({
    name: String,
    dob: String,
    // dob: {
    //     type: Date,
    // },
})

var FormMessage = mongoose.model('FormMessage', formSchema);

export default FormMessage;