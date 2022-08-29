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
            "id": 1,
            "name": "Herry",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac magna maximus, porta nibh eu, placerat velit. Maecenas ac malesuada purus. Curabitur at enim nisi. Etiam ornare laoreet dui id porta. Integer at nisl erat. Proin at ipsum nulla. Aenean gravida imperdiet augue, a egestas tellus porttitor ac. Praesent convallis ullamcorper dui, et vulputate metus. Nullam faucibus erat sapien, quis aliquet massa pharetra quis. Sed sagittis ipsum nisi, id porttitor augue imperdiet in. Vivamus ac diam sed dui pretium facilisis."
        },
        {
            "id": 2,
            "name": "Sasuke",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac magna maximus, porta nibh eu, placerat velit. Maecenas ac malesuada purus. Curabitur at enim nisi. Etiam ornare laoreet dui id porta. Integer at nisl erat. Proin at ipsum nulla. Aenean gravida imperdiet augue, a egestas tellus porttitor ac. Praesent convallis ullamcorper dui, et vulputate metus. Nullam faucibus erat sapien, quis aliquet massa pharetra quis. Sed sagittis ipsum nisi, id porttitor augue imperdiet in. Vivamus ac diam sed dui pretium facilisis."
        }
    ]);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));