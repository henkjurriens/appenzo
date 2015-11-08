echo 'build...'
grunt build --force

echo 'copy...'
cp -r  dist/. ~/Projects/appenzoHeroku/web

mv ~/Projects/appenzoHeroku/web/index.html ~/Projects/appenzoHeroku/web/index.php

cd ~/Projects/appenzoHeroku/
git add .
git commit -m "new release"
git push heroku master
