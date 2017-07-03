(function (win, doc) {
    image = doc.getElementById('catpic');
    doc.getElementById('putakitteninme').appendChild(image);

    newcat = (function () {
      var kitten = kittens[Math.floor(Math.random() * kittens.length)];
      image.alt       = kitten.imageAlt;
      image.src       = kitten.imageUrl;
      image.title     = kitten.imageAlt;

      doc.getElementById('title').innerHTML = kitten.title;
      doc.getElementById('title-link').href = kitten.url;
      doc.getElementById('description').innerHTML = kitten.description;
    });

    doc.getElementById('putakitteninme').addEventListener("click", newcat);

    newcat();

}(this, document));
