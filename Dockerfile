### STAGE 1: Building with alpine which one of the smallest size (baremetal os capability)
FROM node:12.16.2-alpine3.11 as DEVELOPMENT

##  node's linux sub-imgage does not contain python and make - let us it for build
RUN apk --no-cache --update --virtual build-dependencies add python make g++

WORKDIR /usr/src/app

# TODO NOT SECURE MUST BE DONE WITHOUGT STORING .npmrc
# RUN echo "//ebizserver03.sro.vic.gov.au:4873/:_authToken=6cwUbBzUIBpGzUbp3B/8LJXsaOtAFaFrbolvq+01C5I=" > .npmrc

# This is to be used later with an  NPM registry.
# COPY .npmrc .npmrc
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN rm -f .npmrc


## Build the angular app in production mode and store the artifacts in dist folder
# CMD ["npm", "run", "start-in-container"]
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
CMD ["nginx", "-g", "daemon off;"]
