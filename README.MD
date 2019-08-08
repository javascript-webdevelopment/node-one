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

![Client and Servers](images/clienttoserver.png)

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

### Running A Jaavascript File

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

## Express

One of the primary uses of Node is to act as a `server`. 

A server is will receive a request then perform some logic and return a response.

`Express` is the most popular framework we can use to build a server with node.

It will make it easier to matchup HTTP methods to by using `endpoints` to control what data a front end application can send and ask for.

First we need to install express into our project to use it.

```bash
$ npm install express
```

REFER TO THE `serverSetup.js` FILE FOR MORE INFORMATION ABOUT SETTING UP EXPRESS