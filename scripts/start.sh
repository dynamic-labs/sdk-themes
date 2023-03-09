themes=$(echo `ls scss/`|sed 's/ /,/g'); REACT_APP_THEMES=$themes npm run start:cra
