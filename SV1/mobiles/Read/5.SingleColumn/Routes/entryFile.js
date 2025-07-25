import express from 'express';

var router = express.Router();

import {
    postFilterDataFromBodyFunc
} from '../Controllers/entryFile.js';

router.get('/:ColumnName', postFilterDataFromBodyFunc);

export { router };