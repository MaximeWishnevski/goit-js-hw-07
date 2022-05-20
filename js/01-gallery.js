import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector(".gallery")

container.addEventListener("click", onGalleryClick);

const createMarkup = galleryItems.map(({preview , original, description}) => {
return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`
}).join('');

container.insertAdjacentHTML("beforeend", createMarkup);

function onGalleryClick(e) {
    e.preventDefault();
    const isImage = e.target.classList.contains("gallery__image");
    if(!isImage){
        return
    }
    window.addEventListener('keydown', onCloseModal);
    const originalImageSource = e.target.dataset.source;
    const modal = basicLightbox.create(`
    <img src="${originalImageSource}" width="800" height="600">
`)
modal.show()
  
function onCloseModal(e) {
    window.removeEventListener('keydown', onCloseModal);
    if (e.code === 'Escape') {
        modal.close();

    
}
}
}

console.log(galleryItems);
