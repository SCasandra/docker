# Build time used vars
ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine AS production

# Run time used vars
ENV NODE_ENV=prod
# Token used to check authorized users in order to access /api/courses - See auth.guard.ts
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
#USER customuser: npm error It is likely you do not have the permissions to access this file as the current user
USER root

# Build efficiency step -cache dependencies- define and install dependencies before copying the rest of the files
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENTRYPOINT ["npm", "run", "start:prod"]