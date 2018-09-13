# -----------------------------------------------------------
# single-threaded application / event-driven programming
# -----------------------------------------------------------
Node.js is a single-threaded application, but it can support concurrency via the concept of event and callbacks. Every API of Node.js is asynchronous and being single-threaded, they use async function calls to maintain concurrency. Node uses observer pattern. Node thread keeps an event loop and whenever a task gets completed, it fires the corresponding event which signals the event-listener function to execute.

Event-Driven Programming
Node.js uses events heavily and it is also one of the reasons why Node.js is pretty fast compared to other similar technologies. As soon as Node starts its server, it simply initiates its variables, declares functions and then simply waits for the event to occur.

In an event-driven application, there is generally a main loop that listens for events, and then triggers a callback function when one of those events is detected.

# -----------------------------------------------------------
# Notice 1
# -----------------------------------------------------------
-> EventEmitters -> Events -> Event Loop -> Event Handlers {}

# -----------------------------------------------------------
# Notice 2
# -----------------------------------------------------------
Many objects in a Node emit events, for example, a net.Server emits an event each time a peer connects to it, an fs.readStream emits an event when the file is opened. All objects which emit events are the instances of "events.EventEmitter".

# -----------------------------------------------------------
# Notice 3 - são equivalentes
# -----------------------------------------------------------
// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);
// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

# -----------------------------------------------------------
# open file
# -----------------------------------------------------------
Open a File
Syntax
Following is the syntax of the method to open a file in asynchronous mode −

fs.open(path, flags[, mode], callback)
Parameters
Here is the description of the parameters used −

path − This is the string having file name including path.

flags − Flags indicate the behavior of the file to be opened. All possible values have been mentioned below.

mode − It sets the file mode (permission and sticky bits), but only if the file was created. It defaults to 0666, readable and writeable.

callback − This is the callback function which gets two arguments (err, fd).

Flags
Flags for read/write operations are −

Flag	Description
r	Open file for reading. An exception occurs if the file does not exist.
r+	Open file for reading and writing. An exception occurs if the file does not exist.
rs	Open file for reading in synchronous mode.
rs+	Open file for reading and writing, asking the OS to open it synchronously. See notes for 'rs' about using this with caution.
w	Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
wx	Like 'w' but fails if the path exists.
w+	Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
wx+	Like 'w+' but fails if path exists.
a	Open file for appending. The file is created if it does not exist.
ax	Like 'a' but fails if the path exists.
a+	Open file for reading and appending. The file is created if it does not exist.
ax+	Like 'a+' but fails if the the path exists.

# -----------------------------------------------------------
# get file information
# -----------------------------------------------------------

Get File Information
Syntax
Following is the syntax of the method to get the information about a file −

fs.stat(path, callback)
Parameters
Here is the description of the parameters used −

path − This is the string having file name including path.

callback − This is the callback function which gets two arguments (err, stats) where stats is an object of fs.Stats type which is printed below in the example.

Apart from the important attributes which are printed below in the example, there are several useful methods available in fs.Stats class which can be used to check file type. These methods are given in the following table.

Method	Description
stats.isFile()	Returns true if file type of a simple file.
stats.isDirectory()	Returns true if file type of a directory.
stats.isBlockDevice()	Returns true if file type of a block device.
stats.isCharacterDevice()	Returns true if file type of a character device.
stats.isSymbolicLink()	Returns true if file type of a symbolic link.
stats.isFIFO()	Returns true if file type of a FIFO.
stats.isSocket()	Returns true if file type of asocket.

# -----------------------------------------------------------
# global objects
# -----------------------------------------------------------
Node.js global objects are global in nature and they are available in all modules. We do not need to include these objects in our application, rather we can use them directly. These objects are modules, functions, strings and object itself as explained below.

# -----------------------------------------------------------
# exit codes
# -----------------------------------------------------------

Exit Codes
Node normally exits with a 0 status code when no more async operations are pending. There are other exit codes which are described below −

Code	Name & Description
1	
Uncaught Fatal Exception

There was an uncaught exception, and it was not handled by a domain or an uncaughtException event handler.

2	
Unused

reserved by Bash for built in misuse.

3	
Internal JavaScript Parse Error

The JavaScript source code internal in Node's bootstrapping process caused a parse error. This is extremely rare, and generally can only happen during the development of Node itself.

4	
Internal JavaScript Evaluation Failure

The JavaScript source code internal in Node's bootstrapping process failed to return a function value when evaluated. This is extremely rare, and generally can only happen during the development of Node itself.

5	
Fatal Error

There was a fatal unrecoverable error in V8. Typically, a message will be printed to stderr with the prefix FATAL ERROR.

6	
Non-function Internal Exception Handler

There was an uncaught exception, but the internal fatal exception handler function was somehow set to a non-function, and could not be called.

7	
Internal Exception Handler Run-Time Failure

There was an uncaught exception, and the internal fatal exception handler function itself threw an error while attempting to handle it.

8	
Unused

9	
Invalid Argument

Either an unknown option was specified, or an option requiring a value was provided without a value.

10	
Internal JavaScript Run-Time Failure

The JavaScript source code internal in Node's bootstrapping process threw an error when the bootstrapping function was called. This is extremely rare, and generally can only happen during the development of Node itself.

11	
Invalid Debug Argument

The --debug and/or --debug-brk options were set, but an invalid port number was chosen.

>128	
Signal Exits

If Node receives a fatal signal such as SIGKILL or SIGHUP, then its exit code will be 128 plus the value of the signal code. This is a standard Unix practice, since exit codes are defined to be 7-bit integers, and signal exits set the high-order bit, and then contain the value of the signal code.

# -----------------------------------------------------------
# Process Properties
# -----------------------------------------------------------

Process provides many useful properties to get better control over system interactions.

S.No.	Property & Description
1	
stdout

A Writable Stream to stdout.

2	
stderr

A Writable Stream to stderr.

3	
stdin

A Writable Stream to stdin.

4	
argv

An array containing the command line arguments. The first element will be 'node', the second element will be the name of the JavaScript file. The next elements will be any additional command line arguments.

5	
execPath

This is the absolute pathname of the executable that started the process.

6	
execArgv

This is the set of node-specific command line options from the executable that started the process.

7	
env

An object containing the user environment.

8	
exitCode

A number which will be the process exit code, when the process either exits gracefully, or is exited via process.exit() without specifying a code.

9	
version

A compiled-in property that exposes NODE_VERSION.

10	
versions

A property exposing the version strings of node and its dependencies.

11	
config

An Object containing the JavaScript representation of the configure options that were used to compile the current node executable. This is the same as the "config.gypi" file that was produced when running the ./configure script.

12	
pid

The PID of the process.

13	
title

Getter/setter to set what is displayed in 'ps'.

14	
arch

What processor architecture you're running on: 'arm', 'ia32', or 'x64'.

15	
platform

What platform you're running on: 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'

16	
mainModule

Alternate way to retrieve require.main. The difference is that if the main module changes at runtime, require.main might still refer to the original main module in modules that were required before the change occurred. Generally it's safe to assume that the two refer to the same module.

# -----------------------------------------------------------
# Methods Reference
# -----------------------------------------------------------

Process provides many useful methods to get better control over system interactions.

S.No	Method & Description
1	
abort()

It causes the node to emit an abort. It causes the node to exit and generate a core file.

2	
chdir(directory)

Changes the current working directory of the process or throws an exception if that fails.

3	
cwd()

Returns the current working directory of the process.

4	
exit([code])

Ends the process with the specified code. If omitted, exit uses the 'success' code 0.

5	
getgid()

Gets the group identity of the process. This is the numerical group id, not the group name.This function is available only POSIX platforms (i.e. not Windows, Android).

6	
setgid(id)

Sets the group identity of the process. (See setgid(2)). It accepts either a numerical ID or a groupname string. If a groupname is specified, this method blocks while resolving it to a numerical ID.This function is available only POSIX platforms (i.e. not Windows, Android).

7	
getuid()

Gets the user identity of the process. This is the numerical id, not the username.This function is only available on POSIX platforms (i.e. not Windows, Android).

8	
setuid(id)

Sets the user identity of the process (See setgid(2)). It accepts either a numerical ID or a username string. If a username is specified, this method blocks while resolving it to a numerical ID.This function is available only POSIX platforms (i.e. not Windows, Android).

9	
getgroups()

Returns an array with the supplementary group IDs. POSIX leaves it unspecified if the effective group ID is included, but node.js ensures it always is. This function is available only on POSIX platforms (i.e. not Windows, Android).

10	
setgroups(groups)

Sets the supplementary group IDs. This is a privileged operation, which implies that you have to be at the root or have the CAP_SETGID capability. This function is available only on POSIX platforms (i.e. not Windows, Android).

11	
initgroups(user, extra_group)

Reads /etc/group and initializes the group access list, using all the groups of which the user is a member. This is a privileged operation, which implies that you have to be at the root or have the CAP_SETGID capability. This function is available only on POSIX platforms (i.e. not Windows, Android).

12	
kill(pid[, signal])

Send a signal to a process. pid is the process id and signal is the string describing the signal to send. Signal names are strings like 'SIGINT' or 'SIGHUP'. If omitted, the signal will be 'SIGTERM'.

13	
memoryUsage()

Returns an object describing the memory usage of the Node process measured in bytes.

14	
nextTick(callback)

Once the current event loop turn runs to completion, call the callback function.

15	
umask([mask])

Sets or reads the process's file mode creation mask. Child processes inherit the mask from the parent process. Returns the old mask if mask argument is given, otherwise returns the current mask.

16	
uptime()

Number of seconds Node has been running.

17	
hrtime()

Returns the current high-resolution real time in a [seconds, nanoseconds] tuple Array. It is relative to an arbitrary time in the past. It is not related to the time of day and therefore not subject to clock drift. The primary use is for measuring performance between intervals.

# -----------------------------------------------------------
# methods OS
# -----------------------------------------------------------

Node.js os module provides a few basic operating-system related utility functions. This module can be imported using the following syntax.

var os = require("os")
Methods
S.No.	Method & Description
1	
os.tmpdir()

Returns the operating system's default directory for temp files.

2	
os.endianness()

Returns the endianness of the CPU. Possible values are "BE" or "LE".

3	
os.hostname()

Returns the hostname of the operating system.

4	
os.type()

Returns the operating system name.

5	
os.platform()

Returns the operating system platform.

6	
os.arch()

Returns the operating system CPU architecture. Possible values are "x64", "arm" and "ia32".

7	
os.release()

Returns the operating system release.

8	
os.uptime()

Returns the system uptime in seconds.

9	
os.loadavg()

Returns an array containing the 1, 5, and 15 minute load averages.

10	
os.totalmem()

Returns the total amount of system memory in bytes.

11	
os.freemem()

Returns the amount of free system memory in bytes.

12	
os.cpus()

Returns an array of objects containing information about each CPU/core installed: model, speed (in MHz), and times (an object containing the number of milliseconds the CPU/core spent in: user, nice, sys, idle, and irq).

13	
os.networkInterfaces()

Get a list of network interfaces.

Properties
S.No.	Property & Description
1	
os.EOL

A constant defining the appropriate End-of-line marker for the operating system.

# -----------------------------------------------------------
# path module
# -----------------------------------------------------------

Node.js path module is used for handling and transforming file paths. This module can be imported using the following syntax.

var path = require("path")
Methods
S.No.	Method & Description
1	
path.normalize(p)

Normalize a string path, taking care of '..' and '.' parts.

2	
path.join([path1][, path2][, ...])

Join all the arguments together and normalize the resulting path.

3	
path.resolve([from ...], to)

Resolves to an absolute path.

4	
path.isAbsolute(path)

Determines whether the path is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.

5	
path.relative(from, to)

Solve the relative path from from to to.

6	
path.dirname(p)

Return the directory name of a path. Similar to the Unix dirname command.

7	
path.basename(p[, ext])

Return the last portion of a path. Similar to the Unix basename command.

8	
path.extname(p)

Return the extension of the path, from the last '.' to end of string in the last portion of the path. If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string.

9	
path.parse(pathString)

Returns an object from a path string.

10	
path.format(pathObject)

Returns a path string from an object, the opposite of path.parse above.

Properties
S.No.	Property & Description
1	
path.sep

The platform-specific file separator. '\\' or '/'.

2	
path.delimiter

The platform-specific path delimiter, ; or ':'.

3	
path.posix

Provide access to aforementioned path methods but always interact in a posix compatible way.

4	
path.win32

Provide access to aforementioned path methods but always interact in a win32 compatible way.

# -----------------------------------------------------------
# net module
# -----------------------------------------------------------

Node.js net module is used to create both servers and clients. This module provides an asynchronous network wrapper and it can be imported using the following syntax.

var net = require("net")
Methods
S.No.	Method & Description
1	
net.createServer([options][, connectionListener])

Creates a new TCP server. The connectionListener argument is automatically set as a listener for the 'connection' event.

2	
net.connect(options[, connectionListener])

A factory method, which returns a new 'net.Socket' and connects to the supplied address and port.

3	
net.createConnection(options[, connectionListener])

A factory method, which returns a new 'net.Socket' and connects to the supplied address and port.

4	
net.connect(port[, host][, connectListener])

Creates a TCP connection to port on host. If host is omitted, 'localhost' will be assumed. The connectListener parameter will be added as a listener for the 'connect' event. It is a factory method which returns a new 'net.Socket'.

5	
net.createConnection(port[, host][, connectListener])

Creates a TCP connection to port on host. If host is omitted, 'localhost' will be assumed. The connectListener parameter will be added as a listener for the 'connect' event. It is a factory method which returns a new 'net.Socket'.

6	
net.connect(path[, connectListener])

Creates Unix socket connection to path. The connectListener parameter will be added as a listener for the 'connect' event. It is a factory method which returns a new 'net.Socket'.

7	
net.createConnection(path[, connectListener])

Creates Unix socket connection to path. The connectListener parameter will be added as a listener for the 'connect' event. It is a factory method which returns a new 'net.Socket'.

8	
net.isIP(input)

Tests if the input is an IP address. Returns 0 for invalid strings, 4 for IP version 4 addresses, and 6 for IP version 6 addresses.

9	
net.isIPv4(input)

Returns true if the input is a version 4 IP address, otherwise returns false.

10	
net.isIPv6(input)

Returns true if the input is a version 6 IP address, otherwise returns false.

Class - net.Server
This class is used to create a TCP or local server.

Methods
S.No.	Method & Description
1	
server.listen(port[, host][, backlog][, callback])

Begin accepting connections on the specified port and host. If the host is omitted, the server will accept connections directed to any IPv4 address (INADDR_ANY). A port value of zero will assign a random port.

2	
server.listen(path[, callback])

Start a local socket server listening for connections on the given path.

3	
server.listen(handle[, callback])

The handle object can be set to either a server or socket (anything with an underlying _handle member), or a {fd: <n>} object. It will cause the server to accept connections on the specified handle, but it is presumed that the file descriptor or handle has already been bound to a port or domain socket. Listening on a file descriptor is not supported on Windows.

4	
server.listen(options[, callback])

The port, host, and backlog properties of options, as well as the optional callback function, behave as they do on a call to server.listen(port, [host], [backlog], [callback]) . Alternatively, the path option can be used to specify a UNIX socket.

5	
server.close([callback])

Finally closed when all connections are ended and the server emits a 'close' event.

6	
server.address()

Returns the bound address, the address family name and port of the server as reported by the operating system.

7	
server.unref()

Calling unref on a server will allow the program to exit if this is the only active server in the event system. If the server is already unrefd, then calling unref again will have no effect.

8	
server.ref()

Opposite of unref, calling ref on a previously unrefd server will not let the program exit if it's the only server left (the default behavior). If the server is refd, then calling the ref again will have no effect.

9	
server.getConnections(callback)

Asynchronously get the number of concurrent connections on the server. Works when sockets were sent to forks. Callback should take two arguments err and count.

Events
S.No.	Events & Description
1	
listening

Emitted when the server has been bound after calling server.listen.

2	
connection

Emitted when a new connection is made. Socket object, the connection object is available to event handler. Socket is an instance of net.Socket.

3	
close

Emitted when the server closes. Note that if connections exist, this event is not emitted until all the connections are ended.

4	
error

Emitted when an error occurs. The 'close' event will be called directly following this event.

Class - net.Socket
This object is an abstraction of a TCP or local socket. net.Socket instances implement a duplex Stream interface. They can be created by the user and used as a client (with connect()) or they can be created by Node and passed to the user through the 'connection' event of a server.

Events
net.Socket is an eventEmitter and it emits the following events.

S.No.	Events & Description
1	
lookup

Emitted after resolving the hostname but before connecting. Not applicable to UNIX sockets.

2	
connect

Emitted when a socket connection is successfully established.

3	
data

Emitted when data is received. The argument data will be a Buffer or String. Encoding of data is set by socket.setEncoding().

4	
end

Emitted when the other end of the socket sends a FIN packet.

5	
timeout

Emitted if the socket times out from inactivity. This is only to notify that the socket has been idle. The user must manually close the connection.

6	
drain

Emitted when the write buffer becomes empty. Can be used to throttle uploads.

7	
error

Emitted when an error occurs. The 'close' event will be called directly following this event.

8	
close

Emitted once the socket is fully closed. The argument had_error is a boolean which indicates if the socket was closed due to a transmission error.

Properties
net.Socket provides many useful properties to get better control over socket interactions.

S.No.	Property & Description
1	
socket.bufferSize

This property shows the number of characters currently buffered to be written.

2	
socket.remoteAddress

The string representation of the remote IP address. For example, '74.125.127.100' or '2001:4860:a005::68'.

3	
socket.remoteFamily

The string representation of the remote IP family. 'IPv4' or 'IPv6'.

4	
socket.remotePort

The numeric representation of the remote port. For example, 80 or 21.

5	
socket.localAddress

The string representation of the local IP address the remote client is connecting on. For example, if you are listening on '0.0.0.0' and the client connects on '192.168.1.1', the value would be '192.168.1.1'.

6	
socket.localPort

The numeric representation of the local port. For example, 80 or 21.

7	
socket.bytesRead

The amount of received bytes.

8	
socket.bytesWritten

The amount of bytes sent.

Methods
S.No.	Method & Description
1	
new net.Socket([options])

Construct a new socket object.

2	
socket.connect(port[, host][, connectListener])

Opens the connection for a given socket. If port and host are given, then the socket will be opened as a TCP socket, if host is omitted, localhost will be assumed. If a path is given, the socket will be opened as a Unix socket to that path.

3	
socket.connect(path[, connectListener])

Opens the connection for a given socket. If port and host are given, then the socket will be opened as a TCP socket, if host is omitted, localhost will be assumed. If a path is given, the socket will be opened as a Unix socket to that path.

4	
socket.setEncoding([encoding])

Set the encoding for the socket as a Readable Stream.

5	
socket.write(data[, encoding][, callback])

Sends data on the socket. The second parameter specifies the encoding in the case of a string--it defaults to UTF8 encoding.

6	
socket.end([data][, encoding])

Half-closes the socket, i.e., it sends a FIN packet. It is possible the server will still send some data.

7	
socket.destroy()

Ensures that no more I/O activity happens on this socket. Necessary only in case of errors (parse error or so).

8	
socket.pause()

Pauses the reading of data. That is, 'data' events will not be emitted. Useful to throttle back an upload.

9	
socket.resume()

Resumes reading after a call to pause().

10	
socket.setTimeout(timeout[, callback])

Sets the socket to timeout after timeout milliseconds of inactivity on the socket. By default, net.Socket does not have a timeout.

11	
socket.setNoDelay([noDelay])

Disables the Nagle algorithm. By default, TCP connections use the Nagle algorithm, they buffer data before sending it off. Setting true for noDelay will immediately fire off data each time socket.write() is called. noDelay defaults to true.

12	
socket.setKeepAlive([enable][, initialDelay])

Enable/disable keep-alive functionality, and optionally set the initial delay before the first keepalive probe is sent on an idle socket. enable defaults to false.

13	
socket.address()

Returns the bound address, the address family name, and the port of the socket as reported by the operating system. Returns an object with three properties, e.g. { port: 12346, family: 'IPv4', address: '127.0.0.1' }.

14	
socket.unref()

Calling unref on a socket will allow the program to exit if this is the only active socket in the event system. If the socket is already unrefd, then calling unref again will have no effect.

15	
socket.ref()

Opposite of unref, calling ref on a previously unrefd socket will not let the program exit if it's the only socket left (the default behavior). If the socket is refd, then calling ref again will have no effect.

# -----------------------------------------------------------
# domain module
# -----------------------------------------------------------

Node.js domain module is used to intercept unhandled error. These unhandled error can be intercepted using internal binding or external binding. If errors are not handled at all, then they will simply crash the Node application.

Internal Binding − Error emitter is executing its code within the run method of a domain.

External Binding − Error emitter is added explicitly to a domain using its add method.

This module can be imported using the following syntax.

var domain = require("domain")
The domain class of domain module is used to provide functionality of routing errors and uncaught exceptions to the active Domain object. It is a child class of EventEmitter. To handle the errors that it catches, listen to its error event. It is created using the following syntax −

var domain = require("domain");
var child = domain.create();
Methods
S.No.	Method & Description
1	
domain.run(function)

Run the supplied function in the context of the domain, implicitly binding all event emitters, timers, and lowl evel requests that are created in that context. This is the most basic way to use a domain.

2	
domain.add(emitter)

Explicitly adds an emitter to the domain. If any event handlers called by the emitter throw an error, or if the emitter emits an error event, it will be routed to the domain's error event, just like with implicit binding.

3	
domain.remove(emitter)

The opposite of domain.add(emitter). Removes domain handling from the specified emitter.

4	
domain.bind(callback)

The returned function will be a wrapper around the supplied callback function. When the returned function is called, any errors that are thrown will be routed to the domain's error event.

5	
domain.intercept(callback)

This method is almost identical to domain.bind(callback). However, in addition to catching thrown errors, it will also intercept Error objects sent as the first argument to the function.

6	
domain.enter()

The enter method is plumbing used by the run, bind, and intercept methods to set the active domain. It sets domain.active and process.domain to the domain, and implicitly pushes the domain onto the domain stack managed by the domain module (see domain.exit() for details on the domain stack). The call to enter delimits the beginning of a chain of asynchronous calls and I/O operations bound to a domain.

7	
domain.exit()

The exit method exits the current domain, popping it off the domain stack. Whenever the execution switches to the context of a different chain of asynchronous calls, it's important to ensure that the current domain is exited. The call to exit delimits either the end of or an interruption to the chain of asynchronous calls and I/O operations bound to a domain.

8	
domain.dispose()

Once dispose has been called, the domain will no longer be used by callbacks bound into the domain via run, bind, or intercept, and a dispose event is emit

Properties
S.No.	Property & Description
1	
domain.members

An array of timers and event emitters that have been explicitly added to the domain.

# -----------------------------------------------------------
# dns module
# -----------------------------------------------------------

Node.js dns module is used to do actual DNS lookup as well as to use underlying operating system name resolution functionalities. This module provides an asynchronous network wrapper and can be imported using the following syntax.

var dns = require("dns")
Methods
S.No.	Method & Description
1	
dns.lookup(hostname[, options], callback)

Resolves a hostname (e.g. 'google.com') into the first found A (IPv4) or AAAA (IPv6) record. options can be an object or integer. If options is not provided, then IP v4 and v6 addresses are both valid. If options is an integer, then it must be 4 or 6.

2	
dns.lookupService(address, port, callback)

Resolves the given address and port into a hostname and service using getnameinfo.

3	
dns.resolve(hostname[, rrtype], callback)

Resolves a hostname (e.g. 'google.com') into an array of the record types specified by rrtype.

4	
dns.resolve4(hostname, callback)

The same as dns.resolve(), but only for IPv4 queries (A records). addresses is an array of IPv4 addresses (e.g. ['74.125.79.104', '74.125.79.105', '74.125.79.106']).

5	
dns.resolve6(hostname, callback)

The same as dns.resolve4() except for IPv6 queries (an AAAA query).

6	
dns.resolveMx(hostname, callback)

The same as dns.resolve(), but only for mail exchange queries (MX records).

7	
dns.resolveTxt(hostname, callback)

The same as dns.resolve(), but only for text queries (TXT records). addresses is an 2-d array of the text records available for hostname (e.g., [ ['v=spf1 ip4:0.0.0.0 ', '~all' ] ]). Each sub-array contains TXT chunks of one record. Depending on the use case, they could be either joined together or treated separately.

8	
dns.resolveSrv(hostname, callback)

The same as dns.resolve(), but only for service records (SRV records). addresses is an array of the SRV records available for hostname. Properties of SRV records are priority, weight, port, and name (e.g., [{'priority': 10, 'weight': 5, 'port': 21223, 'name': 'service.example.com'}, ...]).

9	
dns.resolveSoa(hostname, callback)

The same as dns.resolve(), but only for start of authority record queries (SOA record).

10	
dns.resolveNs(hostname, callback)

The same as dns.resolve(), but only for name server records (NS records). addresses is an array of the name server records available for hostname (e.g., ['ns1.example.com', 'ns2.example.com']).

11	
dns.resolveCname(hostname, callback)

The same as dns.resolve(), but only for canonical name records (CNAME records). addresses is an array of the canonical name records available for hostname (e.g., ['bar.example.com']).

12	
dns.reverse(ip, callback)

Reverse resolves an ip address to an array of hostnames.

13	
dns.getServers()

Returns an array of IP addresses as strings that are currently being used for resolution.

14	
dns.setServers(servers)

Given an array of IP addresses as strings, set them as the servers to use for resolving.

rrtypes
Following is the list of valid rrtypes used by dns.resolve() method −

A − IPV4 addresses, default

AAAA − IPV6 addresses

MX − mail exchange records

TXT − text records

SRV − SRV records

PTR − used for reverse IP lookups

NS − name server records

CNAME − canonical name records

SOA − start of authority record

Error Codes
Each DNS query can return one of the following error codes −

dns.NODATA − DNS server returned answer with no data.

dns.FORMERR − DNS server claims query was misformatted.

dns.SERVFAIL − DNS server returned general failure.

dns.NOTFOUND − Domain name not found.

dns.NOTIMP − DNS server does not implement requested operation.

dns.REFUSED − DNS server refused query.

dns.BADQUERY − Misformatted DNS query.

dns.BADNAME − Misformatted hostname.

dns.BADFAMILY − Unsupported address family.

dns.BADRESP − Misformatted DNS reply.

dns.CONNREFUSED − Could not contact DNS servers.

dns.TIMEOUT − Timeout while contacting DNS servers.

dns.EOF − End of file.

dns.FILE − Error reading file.

dns.NOMEM − Out of memory.

dns.DESTRUCTION − Channel is being destroyed.

dns.BADSTR − Misformatted string.

dns.BADFLAGS − Illegal flags specified.

dns.NONAME − Given hostname is not numeric.

dns.BADHINTS − Illegal hints flags specified.

dns.NOTINITIALIZED − c-ares library initialization not yet performed.

dns.LOADIPHLPAPI − Error loading iphlpapi.dll.

dns.ADDRGETNETWORKPARAMS − Could not find GetNetworkParams function.

dns.CANCELLED − DNS query cancelled.