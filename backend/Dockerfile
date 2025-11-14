# Use Node.js base image
FROM node:20-slim

# Set working directory inside container
WORKDIR /app

# Copy only dependency files first for caching
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the rest of the application files
COPY . .

# Expose port 5000 to the outside world
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
