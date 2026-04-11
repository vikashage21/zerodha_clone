import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import { poistionModel } from "../model/poistionModle.js";

configDotenv({
    path:'../.env'
});

// holding data 

 const positionsAll = [
  {
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,
  },
];

const addData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    // ✅ Correct async loop
    for (const item of positionsAll) {
      await  poistionModel.create(item);
    }

    console.log("Data saved in database");
    process.exit();

  } catch (error) {
    console.log("Failed to add data in database", error);
    process.exit(1);
  }
};

addData();