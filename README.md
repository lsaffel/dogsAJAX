A simple JavaScript function and HTML page to demonstrate AJAX calls, async and await

Load the page index.html, which includes the JavaScript script main.js .

main.js fetches a list of dog breeds from a public API, which is here:
https://dog.ceo/dog-api/
and displays the list to the console - visible by expanding "message".

Each call waits for the previous call to complete.

If the calls complete OK, then a list of dog breeds from the dogs API
is printed to the console.

If the calls do not work, then an error message is printed to the console instead.
