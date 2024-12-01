#!/bin/bash
# Dependancies
# - img-optimize - https://virtubox.github.io/img-optimize/
# - imagemagick
# - jpegoptim
# - optipng

FOLDER="/home/pol/top-secret/projects/film-makers-app/public"

# max width
WIDTH=800


#resize png or jpg to either height or width, keeps proportions using imagemagick
find ${FOLDER} -iname '*.jpg' -o -iname '*.png' -exec convert \{} -verbose -resize $WIDTH\> \{} \;
img-optimize --std --path ${FOLDER}
