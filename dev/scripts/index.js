
var getJSON = require('./get-json.js');

function shuffle(array) {
    var m = array.length, t, i;
  
    while (m) {
  
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

getJSON('/list.json', function (err, data) {
    if (err) return console.error(err);
    var list = shuffle(data);
    var container1 = document.getElementById('benevoles');
    var container2 = document.getElementById('benevoles-occasionnels');
    list.forEach(function (e) {
        var div = document.createElement('div');
        div.classList.add('card')
        var h4 = document.createElement('h4');
        h4.innerHTML = e.name;
        
        if (e.hasOwnProperty('uri')) {
            var id = makeid(5);
            img = document.createElement('img');
            img.id=id;
            img.setAttribute('uri',e.uri);
            h4.setAttribute('img-id',id);
            h4.onclick=function() {
                h4.classList.add('shown')
                var imgid = h4.getAttribute('img-id');;
                var imgScreen = document.getElementById(imgid);
                imgScreen.src = '/images/' + imgScreen.getAttribute('uri');
            }
            div.appendChild(h4)
            div.appendChild(img)
            container1.appendChild(div)
        } else {
            div.appendChild(h4)
            container2.appendChild(div)
        }
        
    })
});