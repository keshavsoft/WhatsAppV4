import express from 'express';

var router = express.Router();

import {
    getFilterDataFromBodyFunc
} from '../Controllers/entryFile.js';

router.get('/:ColumnName', getFilterDataFromBodyFunc);

export { router };