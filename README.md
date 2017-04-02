Hapi.js body parsing plugin support merge querystring, sub objects and sanitizer.

Parse incoming request bodies in a plugin before your handlers, available under the request.body || request.payload property.


Install via NPM

```js
npm install hapi-bodyparser --save
```

```js
// Not set if you want default options
options: {
    // parser options use qs.parse(value, options)
    parser: { allowDots: true, strictNullHandling: true },
    sanitizer: {
        trim: true, // remove first || end white space of String
        stripNullorEmpty: true // remove property when Null or Empty
    },        
    merge: false, // merge querystring into body
    body: false // If false: request.payload is default parsed | if true request.body is parsed
}

```

```js
var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 8080, host: 'localhost' });

server.register([{
    register: require('hapi-bodyparser'),
    options: {
        // parser: { allowDots: true, strictNullHandling: true },
        // sanitizer: {
        //     trim: true,
        //     stripNullorEmpty: true 
        // },
        // merge: false, 
        // body: false 
    }
}], function (err) {
    // Insert your preferred error handling here...
});

```

Options can be configured on a route via the `body` plugin object.

```js
server.route({
  method: 'POST',
  path: '/api/post/fetch',
  config: {
    plugins: {
      body: { merge: false, sanitizer: { stripNullorEmpty: false } }
    },
    handler: function (request, reply) {
      reply(request.body);
    }
  }
});
```