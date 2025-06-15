#!/bin/bash

ng build --configuration=production --base-href https://dilanka-rathnasiri.github.io/dilanka-rathnasiri-portfolio/
npx angular-cli-ghpages --dir=dist/dilanka-rathnasiri-portfolio/browser
