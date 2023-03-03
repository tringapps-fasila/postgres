import userRouter from "./users/user.router";
import express from 'express';
const app:express.Application=express();
const port:number = 3000;



app.use(express.json());
app.use("/users",userRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
