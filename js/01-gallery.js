import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const GalleryRef = document.querySelector(".gallery");
const GalleryItems = CreateGalleryItems(galleryItems);
GalleryRef.insertAdjacentHTML("beforeend", GalleryItems);

function CreateGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> `;
    })
    .join("");
}

GalleryRef.addEventListener("click", displayImage);
let instance;
function displayImage(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const url = e.target.dataset.source;
  console.dir(url);

  instance = basicLightbox
    .create(
      `
  <img
  src="${url}"
  width="800"
  height="600">`
    )
    .show();
}
