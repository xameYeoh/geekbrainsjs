const handleClick = (event) => {
    const src = event.target.getAttribute('src');
    const oldImg = document.querySelector('.full-picture-item');

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

const handleMouseEnter = (event) => {
    console.log("Mouse entered!");
    event.target.classList.add('active')
}

const handleMouseLeave = (event) => {
    console.log("Mouse left!");
    event.target.classList.remove('active')
}

window.onload = () => {
    const previews = document.querySelectorAll('img.preview-item');
    for (const item of previews) {
        item.addEventListener('click', handleClick);
        item.addEventListener('mouseenter', handleMouseEnter);
        item.addEventListener('mouseleave', handleMouseLeave);
    }
}