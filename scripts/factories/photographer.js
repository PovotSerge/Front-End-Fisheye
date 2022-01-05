function photographerFactory(data) {
    const {
        name,
        portrait,
        id,
        city,
        country,
        tagline,
        price,
    } = data;

    const picture = `assets/photographers/${portrait}`;
    const href = `photographer.html?v=${id}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const lien = document.createElement('a');
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const span = document.createElement('span');
        span.textContent = city
        const span1 = document.createElement('span');
        span1.textContent = country
        span1.classList.add('country')
        const span2 = document.createElement('div');
        span2.textContent = tagline
        span2.classList.add('tagline')
        const pricce = document.createElement('div')
        pricce.innerHTML = `${price}€/jour`
        pricce.classList.add('pricce');
        lien.appendChild(img);
        lien.appendChild(h2);
        lien.appendChild(span);
        lien.appendChild(span1);
        lien.appendChild(span2);
        lien.appendChild(pricce);
        article.appendChild(lien);
        lien.setAttribute('href', href);
        return (article);
    }
    return {
        name,
        picture,
        getUserCardDOM
    }
}