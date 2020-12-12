### STAGE 1: Building with alpine which one of the smallest size (baremetal os capability)
FROM node:12.16.2-alpine3.11 as DEVELOPMENT

##  node's linux sub-imgage does not contain python and make - let us it for build
RUN apk --no-cache --update --virtual build-dependencies add python make g++

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm i

COPY . .
# RUN rm -f .npmrc


## Build the angular app in production mode and store the artifacts in dist folder
RUN $(npm bin)/ng build --prod  prioritisation

### ---------STAGE 2: Build and packages static file for production  ----------------  ###

FROM nginx:1.14.1-alpine

## Remove default nginx website
RUN rm /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
## Copy our default nginx config
COPY nginx /etc/nginx/conf.d/

## From ‘DEVELOPMENT’ dist/ bundled .js  are copied to nginx public
COPY --from=DEVELOPMENT /usr/src/app/dist /usr/share/nginx/html

# When starting the container the default user is root
# If any 403 access issues occurs, causes can either be missing index.html or directory read access to provide to
# user nginx process (ps -ef | grep nginx) to verify
#RUN chown nginx:nginx /usr/share/nginx/html/*
#RUN chmod 777 -R /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
