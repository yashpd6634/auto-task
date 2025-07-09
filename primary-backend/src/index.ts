import express from "express";
import { userRouter } from "./router/user";
import { autoTaskRouter } from "./router/autoTask";
import cors from "cors";
import { triggerRouter } from "./router/trigger";
import { actionRouter } from "./router/action";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRouter);

app.use("/api/v1/autoTask", autoTaskRouter);

app.use("/api/v1/trigger", triggerRouter);

app.use("/app/v1/action", actionRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
