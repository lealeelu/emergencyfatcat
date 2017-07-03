var $ = require('jquery');
require('./analytics.js');
require('./kittens.scss');
var list = require('./kittens.js');

$(document).ready(function(){

  var image = $('#catpic');

  function newcat () {
    var kitten = list.kittens[Math.floor(Math.random() * list.kittens.length)];
    image.attr("alt", kitten.imageAlt );
    image.attr("src", kitten.imageUrl );
    image.attr('title', kitten.imageAlt );
    image.on('load', function () {
      $('#title').text(kitten.title);
      $('#title-link').attr("href", kitten.url);
      $('#description').text( kitten.description);
    });
  }

  $('#putakitteninme').click(newcat);

  newcat();

});
