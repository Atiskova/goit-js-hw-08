// Add imports above this line

import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox"; 
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const makeGalleryCard = ({ preview, original, description } = {}) => {
  return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
  `;
};

const galleryCards = galleryItems.map((el, idx, arr) => {
  return makeGalleryCard(el);
});

galleryList.insertAdjacentHTML("afterbegin", galleryCards.join(""));

new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250, 
});
