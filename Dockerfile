FROM node:20-alpine AS builder
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
RUN npm i -g pnpm
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm i
# Copy app files
COPY . .
# Build the app
RUN pnpm run build

# Bundle static assets with nginx
FROM nginx:1.25.0-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]