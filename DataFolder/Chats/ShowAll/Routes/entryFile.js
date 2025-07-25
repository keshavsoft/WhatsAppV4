import express from 'express';
var router = express.Router();

import {
    getDefaultFunc
} from '../Controllers/entryFile.js';

router.get('/', getDefaultFunc);

export { router };