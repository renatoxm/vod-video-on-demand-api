# Install node v11
FROM node:18-alpine

# Set the workdir /var/www/app
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Run npm install - install the npm dependencies
RUN npm install

# Copy application source
COPY . .

# Copy .env.docker to workdir/.env - use the docker env
# COPY .env.docker ./.env

# Expose application port
EXPOSE 4000

# Generate build
RUN npm run build

# Start the application
CMD ["npm", "start"]
# CMD nodemon -L --watch . index.js
