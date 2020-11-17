# Build manifest
FROM node:14.9.0-alpine as build

# Set git ssh key
ARG SSH_KEY

# Necessary for npm package sharp
RUN apk -U add --no-cache \
  --repository https://alpine.global.ssl.fastly.net/alpine//edge/community \
  --repository https://alpine.global.ssl.fastly.net/alpine//edge/main \
  vips-dev \
  fftw-dev \
  build-base \
  gcc \
  g++ \
  make \
  libc6-compat \
  openssh-client \
  git

ADD . /opt/web

WORKDIR /opt/web

# Authorization via ssh
RUN mkdir -p -m 0600 ~/.ssh && ssh-keyscan git.tooladigital.ru >> ~/.ssh/known_hosts
RUN ssh-agent sh -c 'echo $SSH_KEY | base64 -d | ssh-add - ; npm install'
RUN yarn run build

# Production manifest
FROM nginx:alpine as production

COPY --from=build /opt/web/images/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /opt/web/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
