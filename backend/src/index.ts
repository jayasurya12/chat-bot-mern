import app from "./app.js"
import { connectToDatabase } from "./db/connection.js";
import { greenBright, yellowBright } from "colorette"

//connections and listeners.
const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => 
    console.log(yellowBright("🎊👍🤟"), greenBright( "Bot Server Start & Connected To Database"), yellowBright('🎊')));
  })
  .catch((error) => console.log('\x1b[31m', error));
