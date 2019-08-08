# Node One

In this lecture we talk about Node.

## HTTP Review

HTTP stands for Hyper Text Transfer Protocol and it is the protocol we follow when making requests and receiving responses from a client to a server.

### Client 

This is usually a personal computer that talks to a server through internet.

The client is also known as the `front-end` part of our application.

We will be using `React` for our front-end.

### Server

This is usually a computer that has clients that will talk to to request information from.

The server is also known as the `back-end` of the application.

We will be building our servers with `Node`.

![Client and Servers](images/clientstoserver.png)

## Node

Node is a `javascript runtime environment`.

Javascript has been around since 1995 and for a while it was only used inside of a browser environment, meaning that was the only place we could use it.

This meant that developers were having to code in multiple languages to create a front-end and back-end to their applications.

When Node came out, it allowed developers to write Javascript code that runs directly on the a computer process itself,rather than being confined to a browser environment. This means that Node can be used to write server-side applications that have full access to the operating system, file system, etc.

Node was written in `C`, `C++`, and `Javascript`. It was built on top of the `V8 Javascript` engine. This is the same engine that browsers like `Google Chrome` uses.

### Node In The Terminal

We can run node in the Terminal by typing the command:

```bash
$ node
```

This will turn the terminal into an interactive javascript environment.

![node terminal](images/terminal.png)

### Running A Javascript File

We can also execute a JS file by running the terminal command

```bash
$ node "name of file to execute"
```

It's important to keep note that this works similar to `REPL` where only the last item will be return, unless we are to console log values.

### Nodemon

We can use to `nodemon` to constantly watch our file to execute it when theres a resfresh.

Install nodemon globally:

```bash
$ npm install -g nodemon
```

Run `nodemon` on a file instead of `node`.

## NPM

NPM stands for `Node Package Manager`.

This is where we can get access to a bunch of great libraries to use inside of our code.

To use it we just need to have `node` installed onto our machine and then we need to initialize our applicaiton to use it.

When in the project directory, run the terminal command:

```bash
$ npm init -y
```

This command will initialize a `package.json` file for us so we can install packages from `npm` into our project.

This file will look something like this:

```json
{
  "name": "node-one",
  "version": "1.0.0",
  "description": "In this lecture we talk about Node.",
  "main": "index.js",
  "dependencies": {},
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## Express

One of the primary uses of Node is to act as a `server`. 

A server is will receive a request then perform some logic and return a response.

`Express` is the most popular framework we can use to build a server with node.

It will make it easier to matchup HTTP methods to by using `endpoints` to control what data a front end application can send and ask for.

### Getting Started

First we need to install express into our project to use it.

```bash
$ npm install express
```

REFER TO THE `serverSetup.js` FILE FOR MORE INFORMATION ABOUT SETTING UP EXPRESS

### Endpoints

Endpoints are what we use to create a way for a front end application to make requests to our server.

To create an endpoint, we will use the object returned from `express()`. This object will have the methods we can use to receieve specifc `RESTful Requests`.

Let's look at the syntax for one:

```javascript
app.get('/api/users', handlerFunc);
```

The endpoint is comprised of three parts:

The Method: - this is where we declare what type of request we are expecting. For example: `get`, `post`, `put`, `delete`.

The Path - this is easy to think about as an entrance to our server or a "gate".

The Handler Function - the handler function is the function that will be executed when a request hits this end point.

## Handler Functions

`Handler Functions` are the functions that we use to handle a request that is made to our server.

This function receives two objects as default arguments. These objects are the `request` and `response` object.

```javascript
app.get('/api/users', (req, res) => {
    // logic here to handle the req
})
```

> Note: req will always be before res

### Request Object

The `req` object is an object that will contain information about the incoming request. This where we can access information from the `query`, the `params`, and the `body` of the request.



### Response Object

The `res` object is an object that we will use to set information about the response and send it back.

This object will have built in methods that we can use to add information to the response that we will send back.

#### Sending A Response

`res.send()` is a function that we can use so what ever is passed in as an argument to function will be sent back as the `response`.

```javascript
res.send('Hello');
```

Above, we are sending a string of hello back. This is what will fill the `response.data` object on the front end.

#### Setting A Status Code For The Response

We can set custom status codes for the response by using the `.status()` method before we send back a response. We will pass in the status code that we want this end point to respond with.

```javascript
res.status(200).send(users);
```