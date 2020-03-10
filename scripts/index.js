// require your Spark modules normally
const Scene = require('Scene')
const Diagnostics = require("Diagnostics");
// add in your external modules either above or the es6 way below
import { helloWorld } from './src/hello'

// get the textbox in the project
const root = Scene.root;
Diagnostics.log("Hello world");
const helloText = root.find('hello');

// update the text using the function from our external module
helloText.text = helloWorld();
