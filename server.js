const express = require('express');
const app = express();
const port = 3000;
const discographyData = {
    hive: {
        title: 'Hive',
        image: 'hive.jpg',
        link: '/hive'
    },
        thrillseeker: {
        title: 'Thrill Seeker',
        image: 'thrillseeker.jpg',
        link: '/thrillseeker'
    },
        singles: {
        title: 'Singles',
        image: 'singles.jpg',
        link: '/singles'
    }
};

app.use(express.static('public'));

app.get('/api/discography', (req, res) => {
    res.json(discographyData);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
