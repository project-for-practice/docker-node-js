# Use the node:12 image as the base image
FROM node:12

# Set the working directory within the container to /app
WORKDIR /app

# Copy the package*.json files from the host file system to the container at the path /app
COPY package*.json ./

# Run the npm install command to install the required dependencies
RUN npm install

# Copy all files from the host file system to the container at the path /app
COPY . .

# Set the environment variable PORT to 8080
ENV PORT=8080

# Expose port 8080 to allow incoming connections
EXPOSE 8080

# Specify the command to run when the container starts up
CMD [ "npm", "start" ]
