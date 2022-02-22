import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
console.log(galleryRef);
let modal;
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `<div class = "gallery__item">
<a class="gallery__link" onclick="return false" href="${original}">
<img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
/>
</a></div>`,
  )
  .join('');
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);
galleryRef.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  const isImage = e.target.classList.contains('gallery__image');
  if (!isImage) {
    return;
  }

  createModalImg(e.target.dataset.source);
  modal.show();
}

function createModalImg(gallery) {
  modal = basicLightbox.create(
    ` <div class="modal">
    <img src= "${event.target.dataset.source}">
    </div>`,
    {
      onShow: () => {
        window.addEventListener('keydown', onKeyboardClick);
      },
      onClose: () => {
        window.removeEventListener('keydown', onKeyboardClick);
      },
    },
  );
}

function onKeyboardClick(e) {
  if (e.code === 'Escape') {
    modal.close();
  }
}
console.log(galleryItems);
