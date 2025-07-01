FROM node:18-alpine AS build
WORKDIR /app
COPY package.json .
RUN npm ci

FROM node:18-alpine AS run
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY app.js .
USER node
EXPOSE 3001
CMD ["node", "app.js"]