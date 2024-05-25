const app = require('./app');
const cors = require('cors')
const PORT = process.env.PORT || 5000;

const corsOrigin ={
    origin:'http://localhost:3000', //or whatever port your frontend is using
    credentials:true,            
    optionSuccessStatus:201
}
app.use(cors(corsOrigin));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
