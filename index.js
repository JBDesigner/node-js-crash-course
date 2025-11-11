// const person = require('./person');

// console.log(person.age);

// const Person = require('./person');

// const person1 = new Person('Jimmy Brand', 25);

// console.log(person1.greeting());

// const Logger = require('./logger');

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });
    // }
    // else if (req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });
    // }else if (req.url === '/api/users') {
    //     const users = [
    //         { name: 'John Doe', age: 30 },
    //         { name: 'Jane Doe', age: 25 }
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // }
    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index.html' : req.url
    );

    // console.log(filePath);
    // res.end();

    //extension of file
    let extname = path.extname(filePath);

    //initial content type
    let contentType = 'text/html';

    //check ext and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    //read file
    fs.readFile ( filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                //page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                });
            } else {
                //some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            //success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT} ...`));
