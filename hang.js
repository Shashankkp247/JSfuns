function hang(secs) {
    const FIN = Date.now() + (secs * 1000)
    var now = 0
    while (Date.now() < FIN) {}
}

//example :- hang(30)
//Open the console in Dev tools
//Then copy the hang function
//Then afterwards enter hang and inside the paranthesis enter the number of seconds you want the page to be unresponsive.
