const handleClick = (event) => {
    const src = event.target.getAttribute('src');
    const oldImg = document.querySelector('.full-picture-item');
    const buttonToTheLeft = document.querySelector('.slider-left');
    const buttonToTheRight = document.querySelector('.slider-right');
    buttonToTheLeft.removeAttribute("hidden");
    buttonToTheRight.removeAttribute("hidden");
    if (src === '' || src === '#') {
        console.log("The src of picture is empty!");
        return;
    }

    if (oldImg && oldImg.getAttribute('src') === src) {
        console.log("Stopped");
        return;
    }

    const wrapper = document.querySelector('.full-picture');

    const img = document.createElement('img');
    img.classList.add("full-picture-item");
    img.setAttribute('src', src);

    if (oldImg) {
        wrapper.replaceChild(img, oldImg);
        console.log("Picture changed");
    } else {
        wrapper.appendChild(img);
        console.log("Picture added");
    }
}

getImageNumber = (src) => {
    const previews = document.querySelectorAll('img.preview-item');
    for (let i = 0; i < previews.length; i++) {
        if (previews[i].getAttribute("src") === src) {
            console.log(i);
            return i;
        }
    }
    return false;
}

window.onload = () => {
    const previews = document.querySelectorAll('img.preview-item');
    const wrapper = document.querySelector('.full-picture');
    for (const item of previews) {
        item.addEventListener('click', handleClick);
    }
    const buttonToTheLeft = document.querySelector('.slider-left');
    const buttonToTheRight = document.querySelector('.slider-right');


    buttonToTheLeft.onclick = () => {
        const currentImageSrc = document.querySelector('.full-picture-item').getAttribute("src");

        let i = getImageNumber(currentImageSrc);
        if (previews[i - 1]) {
            const src = previews[i - 1].getAttribute('src');
            const oldImg = document.querySelector('.full-picture-item');
            const img = document.createElement('img');
            img.classList.add("full-picture-item");
            img.setAttribute('src', src);

            wrapper.replaceChild(img, oldImg);
        }

    }

    buttonToTheRight.onclick = () => {
        const currentImageSrc = document.querySelector('.full-picture-item').getAttribute("src");

        let i = getImageNumber(currentImageSrc);
        if (previews[i + 1]) {
            const src = previews[i + 1].getAttribute('src');
            const oldImg = document.querySelector('.full-picture-item');
            const img = document.createElement('img');
            img.classList.add("full-picture-item");
            img.setAttribute('src', src);

            wrapper.replaceChild(img, oldImg);
        }

    }


}