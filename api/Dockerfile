FROM node
WORKDIR /app

# COPY package.json and package-lock.json files
COPY package*.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

# COPY everything
COPY . .

#Install dependepencies
RUN yarn install
RUN npx prisma generate
# RUN npx prisma migrate dev


EXPOSE 4000
CMD ["yarn", "run", "dev"]

# CMD ["npm", "run", "start"]