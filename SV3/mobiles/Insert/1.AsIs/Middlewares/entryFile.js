const StartFunc = (req, res, next) => {
    const LocalBody = req.body;

    if (!LocalBody) {
        return res.status(400).send("Request body is required.");
    }

    if (Array.isArray(LocalBody)) {
        return res.status(400).send("Request body should not be an array.");
    }

    if (typeof LocalBody === 'object' && Object.keys(LocalBody).length === 0) {
        return res.status(400).send("Request body should not be an empty object.");
    };

    if (!("Key" in LocalBody)) {
        return res.status(400).send("Key is not in body .");

    };

    if (!("Value" in LocalBody)) {
        return res.status(400).send("Value is not in body .");

    };

    next();
};

export { StartFunc };
