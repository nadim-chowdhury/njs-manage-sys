import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  // Replace the uri string with your connection string.
  const uri =
    "mongodb+srv://lieonadim:rmbm9fxRi0NBZt0a@cluster0.2957gzs.mongodb.net/";

  const client = new MongoClient(uri);

  try {
    const database = client.db("njs-manage-sys");
    const movies = database.collection("njs-manage-sys");

    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const movie = await movies.find(query).toArray();

    console.log(movie);
    return NextResponse.json({ a: 35, movie });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
