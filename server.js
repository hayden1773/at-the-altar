const express = require("express");
const allRoutes = require("./routes");
const cors = require("cors");
const sequelize = require("./config/connection");


const app = express();


// PRODUCTION MODE
app.use(cors({
  origin:"https://donw-the-isle.herokuapp.com"
}));


// Cloudinary
const { cloudinary } = require('./utils/cloudinary.js');


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

app.get('/api/images', async (req, res) => {
    const { resources } = await cloudinary.search
        .expression('folder:cloudinary_react')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
});

app.post('/api/upload', async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'cloudinary_react',
        });
        console.log(uploadResponse);
        res.json({ msg: 'File uploaded sucessfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});

const PORT = process.env.PORT || 3001;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", allRoutes);

sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});