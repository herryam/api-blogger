const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: 'https://herryanugerah.blogspot.com'
};

app.get('/', cors(corsOptions), (req, res) => {
    res.json([
        {
            "user": "Herry",
            "pass": "whoami"
        }
    ]);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));