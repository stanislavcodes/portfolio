// Global
app.global = {
    init: function(){ // Load all global functions here
        console.log("load global functions");
        app.global.loadHeader();
    },
    loadHeader: function(){ // Some specific function
        console.log("loadHeader()");
    }
}
console.log('Heeeyeeeyyyyyyyyyye');

// Run the global stuff
app.global.init();