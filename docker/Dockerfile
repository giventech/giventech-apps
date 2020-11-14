### STAGE 1: Build ###
FROM node:10.13 as DEVELOPMENT


LABEL author="Fabrice GINAPE"
WORKDIR /usr/src/app

# TODO NOT SECURE MUST BE DONE WITHOUGT STORING .npmrc
# RUN echo "//ebizserver03.sro.vic.gov.au:4873/:_authToken=6cwUbBzUIBpGzUbp3B/8LJXsaOtAFaFrbolvq+01C5I=" > .npmrc

# This is to be used later with an  NPM registry.
# COPY .npmrc .npmrc
COPY ./package.json package-lock.json ./
RUN npm install
COPY .. .
RUN rm -f .npmrc


## Build the angular app in production mode and store the artifacts in dist folder
# CMD ["npm", "run", "start-in-container"]
RUN $(npm bin)/ng build --prod  prioritisation

### ---------STAGE 2: USES DEVELOPMENT  ----------------  ###

FROM nginx:1.14.1-alpine

## Copy our default nginx config
COPY nginx /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘DEVELOPMENT’ dist/ bundled .js  are copied to nginx public
COPY --from=DEVELOPMENT /usr/src/app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
