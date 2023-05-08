NGINX - Image cache proxy POC
-----------------------------

This is a simple demo project to show nginx acting as a caching proxy for requests to a backend server.

Contents
--------

/nginx-image-cache
This contains the Dockerfile to build and configure nginx to act as a caching proxy for a backend server.

It can be built using the following command in the directory: 'docker build -t nginx-image-cache .'
The container is run using: 'docker run -p 80:80 nginx-image-cache'

This runs the proxy on port 80. It responds to requests for files on path /images/

e.g. http://localhost/images/image_1_1_1

The file nginx.conf provides the configuration that is copied into the container.  This includes
the cache validity period if you want to increase this, and the path served.

Cache misses are redirected to a service running on the same node outside the container on port 8090.
The server path is reduced to '/' and the requested filename.

/source
This is a simple Node server that runs on port 8090 and responds to requests starting with '/image_*'
All requests currently return the same example image.

It prints the requested filename, but always returns the same image,

To run:  'npm run dev' in the base project directory

Future work
------------

You could bundle the app into the same docker container for simplicity, or another container and use docker
networking to connect.

The returned file needs to be changed to the desired image.

The cache timeout should be updated to meet your use case.

Testing
-------

Run the application and nginx docker container.

Call -> 'http://localhost/images/image_test1'
The image will be displayed and a message displayed on the console showing that '/image_test1' has been requested from
the server

Request the same image and it will be displayed but no message will be displayed (it has been cached)

Call -> 'http://localhost/images/image_test2'
The image will be displayed and a message displayed on the console showing that '/image_test2' has been requested from
the server

Try either again and they will be returned from the cache.




