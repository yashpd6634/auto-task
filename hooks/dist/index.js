"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = require("../generated/prisma");
const app = (0, express_1.default)();
const client = new prisma_1.PrismaClient();
app.post("/hooks/catch/:userId/:autoId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, autoId } = req.params;
    const body = req.body;
    yield client
        .$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const autoRun = yield tx.autoRun.create({
            data: {
                autoId,
                metadata: body,
            },
        });
        yield tx.autoRunOutbox.create({
            data: {
                autoRunId: autoRun.id,
            },
        });
        res
            .status(201)
            .json({ message: "Auto run created successfully", autoRun });
    }))
        .catch((error) => {
        console.error("Error creating auto run:", error);
        res.status(500).json({ error: "Internal server error" });
    });
}));
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
