FROM node:7
 
ADD . /src 
WORKDIR /src

RUN npm i
RUN npm i -g pm2
CMD ["pm2-docker", "index.js"]
EXPOSE 5000