var images = document.getElementsByClassName('maximizable-image');

    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener('click', function() {
        var maximizedImage = document.createElement('div');
        maximizedImage.classList.add('maximized-image');

        var imageElement = document.createElement('img');
        imageElement.src = this.src;

        maximizedImage.appendChild(imageElement);
        document.body.appendChild(maximizedImage);

        maximizedImage.addEventListener('click', function() {
          document.body.removeChild(this);
        });
      });
    }