There are 3 services here:-
1)Upload service
2)Deployment service
3)Route handler service


1)Upload service:-
This server will take the github url from the user and then fetch the data of the github repo and then send it to an object store(we have used s3 here)
after successfully uploading, it needs to send an id to the redis queue


2)Deployment service
pop the id from redis queue
Fetch the source code from the s3 object store and then convert the react code to html/css/js files and then reupload the files to s3




