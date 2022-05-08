const express = require('express');
const { config } = require('dotenv');
const bfs = require('./BFS');
const dndMiddleware = require('./milddware/DNDvalidator');
config();
const app = express();

// get the port from env or assigned default port
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send('Hello from the server!')
});

//this is first endpoint for number 2 task 
app.get("/dnd", [dndMiddleware], (req, res) => {
    const zinc = req.body.Zinc;
    const VitaminD3 = req.body['Vitamin D3'];
    const omega3 = req.body['Omega-3']

    // run bfs for every type of vitrient
    const Zincresult = bfs('Zinc', zinc);
    const vitamind3Result = bfs('Vitamin D3', VitaminD3);
    const omega3Result = bfs('Omega-3', omega3);

    return res.json({
        zinc: {
            numberOfPills: Zincresult.listOfPills.length,
            dose: Zincresult.listOfPills.reduce((acc, element) => {
                const temp = (element.amount * element.absorption) / 100;
                return temp + acc;
            }, 0)
        },

        VitmainD3: {
            numberOfPills: vitamind3Result.listOfPills.length,
            dose: vitamind3Result.listOfPills.reduce((acc, element) => {
                const temp = (element.amount * element.absorption) / 100;
                return temp + acc;
            }, 0)
        },

        omega3: {
            numberOfPills: omega3Result.listOfPills.length,
            dose: omega3Result.listOfPills.reduce((acc, element) => {
                const temp = (element.amount * element.absorption) / 100;
                return temp + acc;
            }, 0)
        }

    });


});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
});

app.listen(PORT, () => (`listening on port ${PORT}`))