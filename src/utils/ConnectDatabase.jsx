import mongoose from "mongoose";

export async function ConnectDatabase() {
  await mongoose
    .connect("mongodb://localhost:27017/Test")
    .then((data) => {
      console.log(
        `Mongodb Database connected successfully ${data.connection.host}`
      );
    })
    .catch((err) => {
      console.log(err);
    });
}
