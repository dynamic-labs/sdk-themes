themes=$(echo `ls scss/`|sed 's/ /,/g'); 
cd scss/
versions=$(echo `ls -d */`|sed 's/ /,/g');
cd ..
REACT_APP_THEMES=$themes REACT_APP_THEME_VERSIONS=$versions npm run start:cra
