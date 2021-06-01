var randomNum = Math.floor((Math.random()*10)+1);

var el = document.getElementById('info');

el.innerHTMl = '<h2>random number</h2><p>' + randomNum + '</p>';