import { StartFunc as StartFuncFromCreateToken } from "../../../../jwt/CreateToken.js";

import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
    let LocalCoumnSecret = LocalRequestBody.Secret;

    let LocalFromRepo = postDefaultFuncFromRepo({ LocalCoumnSecret });

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KTF);
        return;
    };

    const jVarLocalToken = StartFuncFromCreateToken({ inObject: "Keshav" });

    res.set('Content-Type', 'text/plain');
    res.cookie('KSToken', jVarLocalToken, { maxAge: 900000, httpOnly: false }).end(jVarLocalToken);
};

export {
    postFilterDataFromBodyFunc
};