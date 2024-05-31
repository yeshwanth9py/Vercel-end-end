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
const app = (0, express_1.default)();
const cors = require("Cors");
const simple_git_1 = __importDefault(require("simple-git"));
let { generate } = require("./utils");


app.use(cors());

app.post("/deploy", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const repourl = req.body.repourl;
    console.log(repourl);
    const id = generate();
    yield (0, simple_git_1.default)().clone(repourl, `output/${id}`);
    res.json(repourl);
}));


app.listen(3000, () => {
    console.log("server started at port ", 3000);
});
