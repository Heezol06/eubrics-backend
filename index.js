const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://eubrics_db:DzmEK4nhtG7O9dCe@cluster0.ufdiw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        await client.connect();
        const userDb = client.db("makingDecisions");
        const usersCollection = userDb.collection("making-decisions");
        const thinkingCollection = userDb.collection("thinking");
        const influencingCollection = userDb.collection("influencing");
        const drivingCollection = userDb.collection("driving");
        const managingCollection = userDb.collection("managing");

        // decision
        app.post('/decision', async (req, res) => {

            const newDecision = req.body;

            const result = await usersCollection.insertOne(newDecision);

            res.send(result);

        })
        app.get('/getDecision', async (req, res) => {
            const qr = req.query;

            const cursor = usersCollection.find(qr);

            const result = await cursor.toArray();

            res.send(result);
        })

        app.delete('/deleteDecision/:id', async (req, res) => {

            const id = req.params.id;

            const q = { _id: ObjectId(id) };

            const result = await usersCollection.deleteOne(q);

            res.send(result);

        })


        // thinkings
        app.post('/thinking', async (req, res) => {

            const newDecision = req.body;

            const result = await thinkingCollection.insertOne(newDecision);

            res.send(result);

        })
        app.get('/getThinking', async (req, res) => {
            const qr = req.query;

            const cursor = thinkingCollection.find(qr);

            const result = await cursor.toArray();

            res.send(result);
        })
        app.delete('/deleteThinking/:id', async (req, res) => {

            const id = req.params.id;

            const q = { _id: ObjectId(id) };

            const result = await thinkingCollection.deleteOne(q);

            res.send(result);

        })


        // influencingCollection
        app.post('/influencing', async (req, res) => {

            const newDecision = req.body;

            const result = await influencingCollection.insertOne(newDecision);

            res.send(result);

        })
        app.get('/getInfluencing', async (req, res) => {
            const qr = req.query;

            const cursor = influencingCollection.find(qr);

            const result = await cursor.toArray();

            res.send(result);
        })

        app.delete('/deleteInfluencing/:id', async (req, res) => {

            const id = req.params.id;

            const q = { _id: ObjectId(id) };

            const result = await influencingCollection.deleteOne(q);

            res.send(result);

        })

        // managingCollection
        app.post('/managing', async (req, res) => {

            const newDecision = req.body;

            const result = await managingCollection.insertOne(newDecision);

            res.send(result);

        })
        app.get('/getManaging', async (req, res) => {
            const qr = req.query;

            const cursor = managingCollection.find(qr);

            const result = await cursor.toArray();

            res.send(result);
        })

        app.delete('/deleteManaging/:id', async (req, res) => {

            const id = req.params.id;

            const q = { _id: ObjectId(id) };

            const result = await managingCollection.deleteOne(q);

            res.send(result);

        })



        // driving
        app.post('/driving', async (req, res) => {

            const newDecision = req.body;

            const result = await drivingCollection.insertOne(newDecision);

            res.send(result);

        })
        app.get('/getDriving', async (req, res) => {
            const qr = req.query;

            const cursor = drivingCollection.find(qr);

            const result = await cursor.toArray();

            res.send(result);
        })

        app.delete('/deleteDriving/:id', async (req, res) => {

            const id = req.params.id;

            const q = { _id: ObjectId(id) };

            const result = await drivingCollection.deleteOne(q);

            res.send(result);

        })
    }
    finally {

    }
}
run().catch((error) => console.log(error));
app.get("/", (req, res) => {
    res.send("Server Running Succesfully");
});
app.listen(port, () => {
    console.log(`Server Running On http://localhost:${port}/`);
});