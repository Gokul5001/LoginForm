const http = require('http');
const fs = require('fs'); // Import the fs module to read files

function requestListener(req, res) {
    if (req.url === '/') {
       //------------- Serve HTML file --------------------------------
        res.setHeader('content-type', 'text/html');
        fs.readFile('loginform.html', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading the HTML file.');
            } else {
                res.end(data);
            }
        });
    } else if (req.url === '/style.css') {
        //----------------------------- Serve CSS file -----------------
        res.setHeader('content-type', 'text/css');
        fs.readFile('style.css', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading the CSS file.');
            } else {
                res.end(data);
            }
        });
    } else {
        // Handle other routes or resources
        res.statusCode = 404;
        res.end('Not Found');
    }
}

const server = http.createServer(requestListener);
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});