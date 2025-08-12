
import { StartFunc as StartFuncFromMiddleware } from "./Token/MiddleWares/entryFile.js";

import { StartFunc as StartFuncPortListen } from "./PortListen.js";

import { StartFunc as StartFuncKWSServer } from "./Projects/KWSServer/EntryFile.js";
import { router as routerFromDataFolder } from "./DataFolder/routes.js";

import { StartFunc as StartFuncFromEntryFile } from "./WA/entryFile.js";
import { ReadFunc } from "./CommonExpose/connectedClients.js";
import { ReadFunc as wa1 } from "./CommonExpose/forWA.js";

import express from 'express';
import http from 'http';
import path from 'path';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
dotenv.config();

import { fileURLToPath } from 'url';
import { router as routerFromV4 } from "./V4/routes.js";
import { router as routerFromSV4 } from "./SV4/routes.js";

const __filename = fileURLToPath(import.meta.url);
global.__basedir = path.dirname(__filename);

const app = express();
const server = http.createServer(app);

var port = normalizePort(process.env.PORT || '7019');

app.use(cookieParser());

app.use('/', express.static(path.join(path.resolve(), 'Public')));
app.use("/DataFolder", routerFromDataFolder);
app.use("/V4", routerFromV4);
app.use("/SV4", StartFuncFromMiddleware, routerFromSV4);

app.get('/StartWA', async (req, res) => {
    await StartFuncFromEntryFile({ inReponse: res });
});

app.use("/id", (req, res) => {
    const k1 = ReadFunc();

    for (const value of k1.values()) {
        console.log(value); // Prints: 10, 20, 30
    };

    res.end(k1.size.toString());
});

app.use("/size", (req, res) => {
    const k1 = wa1();

    res.end(k1.size.toString());
});

app.use("/wa3", (req, res) => {
    const k1 = wa1();

    const date1 = new Date();
    const date2 = new Date([...k1].at(-1)[0]);

    // Calculate the difference in milliseconds
    const differenceInMs = (date1 - date2) / 1000;
    // console.log("aaaaaa : ", k1, [...k1], [...k1].at(-1), "aaaaaaaa : ", differenceInMs);

    console.log("aaaaaa : ", differenceInMs);

    res.end(differenceInMs.toString());
});

StartFuncKWSServer(server);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

server.listen(port, StartFuncPortListen);