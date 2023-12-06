#image to pull from on DockerHub
FROM node:current-slim

WORKDIR /usr/src/app
COPY package.json .

#installs all of the packages listed in package.json
RUN npm install

#port the container will listen on 
EXPOSE 8080  
#command to run when the container starts
CMD [ "npm", "start" ]

#copies the current director to the working directory in the container
COPY . .