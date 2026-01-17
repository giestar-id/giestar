
const http = require('http');
const handler = require('./handler');

const PORT = 3001;

const server = http.createServer(handler);

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
