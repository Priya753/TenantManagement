const app = require('./main');
const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`)
});