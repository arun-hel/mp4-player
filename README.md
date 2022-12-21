# bbb-mp4-player

A videojs player for  bbb-mp4 recordings. If mp4 recording is available  you can directly view mp4 recording instead bbb recording.

## requirement

[bbb-mp4](https://github.com/manishkatyan/bbb-mp4) installed

## installation

```sh
# clone the repo 
git clone https://github.com/arun-hel/mp4-player.git

# install npm packages
cd mp4-player
npm install

# update the  bbbServerUrl env
vi  src/config/env.js

#build
npm run build

#deploy
mkdir /var/www/bigbluebutton-default/mp4
cp -r build/* /var/www/bigbluebutton-default/mp4/
cp -r mp4-redirect.js /var/bigbluebutton/playback/presentation/2.3/

#add redirect code to bigbluebutton player.
vi /var/bigbluebutton/playback/presentation/2.3/index.html

# add below script tag to index.html
<script src="/playback/presentation/2.3/download-button.js"></script>

```