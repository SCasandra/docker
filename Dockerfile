# Build time used vars
ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine AS production

# Run time used vars
# Pass them at runtime using the -e flag
ENV NODE_ENV=prod
# Token used to check authorized users in order access /api/courses - See auth.guard.ts
ENV TOKEN=""
# Set the home directory for the custom user
ENV HOME /home/customuser

# Package needed for groupadd & useradd
RUN apk add shadow && \
groupadd -r customgroup && useradd -r -g customgroup customuser


# Create the directory 
RUN mkdir -p $HOME && chown -R customuser:customgroup $HOME

# A single command for: RUN mkdir /app && cd /app
WORKDIR $HOME/app

# Give acces to our custom user to the directory
RUN chown -R customuser:customgroup $HOME/app

# Specify the type of user we want to use
# USER customuser: npm error It is likely you do not have the permissions to access this file as the current user

# Take advantage of Layer Caching and move up in the layers order the actions that are rarely changed
# Build efficiency step -cache dependencies- define and install dependencies before copying the rest of the files
COPY package*.json ./

RUN npm install

# Use COPY over Add to avoid the automatic extraction of tar files
COPY . .

RUN npm run build

# Expose the port that the app is listening on
# Note: This exposes the port to other containers but not to the host machine
EXPOSE 8080

# Define the command that will run when the container starts

ENTRYPOINT ["npm", "run", "start:prod"]