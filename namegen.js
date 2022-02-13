var randString = require('randString');
const condition = true;
const answer = "";
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function generateUserName(name) {
    let username = name + randString('number', 4, true);
    return username;
}

function run() {


    
    if (answer != "0"){
            
        readline.question('Please enter your name to reveice username options: ', name =>{
            if (name = "0"){
                process.exit(1)
            }
            for (let nb_name = 0; nb_name < 5; nb_name++){
                console.log(generateUserName(name));
            }
            readline.close();
        });

    }
    else{
        condition = false;
    }

}

function start(){
    console.log("This app is a random username generator!");
    console.log("enter 0 anytime to quit");
    run();

}

exports.start = start;