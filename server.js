const express = require("express"); // Bringing in express module
const exphbs = require("express-handlebars"); // Bringing in express-handlebars
const path = require("path"); //  Bringing in node path module
const router = require("./controllers/burgers_controller");

const app = express();

const PORT = 7878 || process.env.PORT; // Setting up port

// Loads middleware to parse JSON and grab json 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up our template to express-handlebars
app.set("view engine", "exphbs");

// Initialized handlebars as our template engine and associating it to .exphbs files  
app.engine("exphbs", exphbs({
    extname: "exphbs",
    layoutsDir: path.join(__dirname + '/views/layouts')
}));

// Sets up the static folder that contains all of our static assets (the things that don't change -> images, sound files, our pages, ect)
app.use(express.static(path.join(__dirname, "public")));

// Setup server listener to port AFTER db tables is fully loaded
app.listen(PORT, function () {
    console.log("Listening on port ---> " + PORT);
});