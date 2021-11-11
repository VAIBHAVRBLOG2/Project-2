const { MongoClient } = require('mongodb');

async function main() {
    
    const uri = "mongodb://vaibhav:2107Mongo@cluster0-shard-00-00.wgxjf.mongodb.net:27017,cluster0-shard-00-01.wgxjf.mongodb.net:27017,cluster0-shard-00-02.wgxjf.mongodb.net:27017/sample_airbnb?ssl=true&replicaSet=atlas-gtpp77-shard-0&authSource=admin&retryWrites=true&w=majority";

    
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        
        await client.connect();

       
        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        
        await client.close();
    }
}

main().catch(console.error);


 
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};