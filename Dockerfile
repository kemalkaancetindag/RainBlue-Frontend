FROM node:16-alpine as build
WORKDIR /app

COPY package*.json ./
COPY package-lock.json ./
RUN npm install
#To bundle your app’s source code inside the Docker image, use the COPY instruction:
COPY . .
# Build for production.
RUN npm run build

# Install `serve` to run the application.
RUN npm install -g serve

# Uses port which is used by the actual application
EXPOSE 3000

# Run application
#CMD [ "npm", "start" ]
CMD serve -s build