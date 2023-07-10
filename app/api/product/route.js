import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  // Replace the uri string with your connection string.
  const uri =
    "mongodb+srv://lieonadim:rmbm9fxRi0NBZt0a@cluster0.2957gzs.mongodb.net/";

  const client = new MongoClient(uri);

  try {
    const database = client.db("njs-manag-sys");
    const inventory = database.collection("njs-manage-sys");

    // Query for a inventory that has the title 'Back to the Future'
    // const query = {};
    const allProducts = await inventory.find().toArray();

    // console.log(inventory);
    return NextResponse.json({ allProducts });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function POST(request) {
  let body = await request.json();
  // console.log(body);
  // Replace the uri string with your connection string.
  const uri =
    "mongodb+srv://lieonadim:rmbm9fxRi0NBZt0a@cluster0.2957gzs.mongodb.net/";

  const client = new MongoClient(uri);

  try {
    const database = client.db("njs-manag-sys");
    const inventory = database.collection("njs-manage-sys");

    // Query for a inventory that has the title 'Back to the Future'
    // const query = {};
    const product = await inventory.insertOne(body);

    console.log(inventory);
    return NextResponse.json({ product, ok: true });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
