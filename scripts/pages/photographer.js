//Mettre le code JavaScript lié à la page ph

fetch('./data/photographers.json')
  .then(res => res.json())
  .then(data => functionPhotogrs(data))
  .then(data => media(data))


function functionPhotogrs(data) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('v');
  const photographers = data.photographers;
  const photographHeader = document.querySelector('.photograph-header');
  photographers.forEach(photographer => {
    if (photographer.id == id) {
      const titleInfoPerson = document.createElement('div');
      titleInfoPerson.classList.add('title-info-person');
      const personSpan1 = document.createElement('span');
      personSpan1.classList.add('person-span1');
      personSpan1.textContent = photographer.name;
      titleInfoPerson.appendChild(personSpan1);
      photographHeader.appendChild(titleInfoPerson);

      const personSpan2 = document.createElement('span');
      personSpan2.classList.add('person-span2');
      personSpan2.textContent = photographer.city;
      titleInfoPerson.appendChild(personSpan2);
      photographHeader.appendChild(titleInfoPerson);

      const personSpan3 = document.createElement('span');
      personSpan3.classList.add('person-span3');
      personSpan3.textContent = photographer.tagline;
      titleInfoPerson.appendChild(personSpan3);
      photographHeader.appendChild(titleInfoPerson);

      const personSpan4 = document.createElement('span');
      personSpan4.classList.add('person-span4');
      personSpan4.textContent = photographer.country;
      titleInfoPerson.appendChild(personSpan4);
      photographHeader.appendChild(titleInfoPerson);

      const contactBtn = document.createElement('button');
      contactBtn.classList.add('contact_button');
      contactBtn.textContent = 'Contactez-moi';
      contactBtn.setAttribute('onclick', 'displayModal()');
      photographHeader.appendChild(contactBtn);

      const imagePerson = document.createElement('img');
      imagePerson.classList.add('image-person-photo');
      imagePerson.setAttribute('src', `assets/photographers/${photographer.portrait}`);

      const divImage = document.createElement('div');
      divImage.classList.add('image-person');
      divImage.appendChild(imagePerson);
      photographHeader.appendChild(divImage);

    }
  })
  return (data)
}

function media(data) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('v');
  const medias = data.media
  const containeurImages = document.querySelector('.containeur-images');
  medias.forEach(media => {
    console.log('Hello');
    if (media.photographerId == id) {
      console.log('Salut');
      const divContainteImages = document.createElement('div');
      divContainteImages.classList.add('containte-images');

      const divImage1 = document.createElement('div');
      divImage1.classList.add('image1');
      let imagePortfolio;

      if (media.image) {
        imagePortfolio = document.createElement('img');
        imagePortfolio.setAttribute('src', `./img/portfolios/${media.image}`);
      } else {
        imagePortfolio = document.createElement('video');
        const source = document.createElement('source');
        source.setAttribute('src', `./img/portfolios/${media.video}`);
        source.setAttribute('type', 'video/mp4');
        imagePortfolio.appendChild(source);
      }

      imagePortfolio.classList.add('image-size');

      divImage1.appendChild(imagePortfolio);
      containeurImages.appendChild(divImage1);



      const imageTitle = document.createElement('span');
      imageTitle.classList.add('img-title');
      imageTitle.textContent = `${media.title}`

      divImage1.appendChild(imageTitle);

      const imageNumber = document.createElement('span');
      imageNumber.classList.add('img-nubmbre');
      imageNumber.textContent = `${media.likes}`

      divImage1.appendChild(imageNumber);

      // const imgHeart = document.createElement('span');
      // imgHeart.classList.add('img-heart');

      // const imgHeartSrc = document.createElement('img');
      // imgHeartSrc.setAttribute('src', 'img/heart.svg');

      // imgHeart.appendChild('imgHeartSrc');

      // containeurImages.appendChild(imgHeart);

    }
  })
}


/* <div class="containte-images">
    <div class="image1">
      <img src="images_video-mimi/Animals_Rainbow.jpg" alt="Rainbow" class="image-size"/>
    </div>
    <span class="img-title">Arc-en-cie</span>
    <span class="img-nubmbre">11</span>
    <span class="img-heart"><img src="img/heart.svg" alt="Heart"/></span>
  </div>  */