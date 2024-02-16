import { connect, disconnect } from 'mongoose';
import { redBright } from "colorette"

async function connectToDatabase() {
    try {
        let uri = 'mongodb+srv://chatbot:rU2a1gi1F3ZmK566@chatbot.rkpt3ls.mongodb.net/chatbot?retryWrites=true&w=majority'
        await connect(uri);
        // await connect(process.env.MONGODB_URI);
    } catch (error) {
        throw new Error( "Cannot connect to MongoDB");
    }
}

async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        console.log(redBright(error));
        throw new Error("Could not Disconnect From MongoDB 😡", error.message)
    }
}

export { connectToDatabase, disconnectFromDatabase };