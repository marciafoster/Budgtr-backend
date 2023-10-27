const app = require ('./app');
const port = process.env.PORT || 3001;


app.get('/', (req, res) => {
    res.send("Welcome to Budgtr");
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})