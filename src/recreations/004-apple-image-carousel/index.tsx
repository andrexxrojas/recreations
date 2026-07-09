import styles from "./styles.module.css";
import { useState } from "react";
import ImageData from "./images";

export default function ImageCarousel() {
  const [imageIndex, setImageIndex] = useState<number>(0);

  function showNextImage() {
    setImageIndex(index => Math.min(index + 1, ImageData.length - 1));
  }

  function showPrevImage() {
    setImageIndex(index => Math.max(index - 1, 0));
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        <div className={styles.galleryContainer}>
          <div
            className={styles.galleryTrack}
            style={{
              transform: `translateX(-${imageIndex * 100}%)`,
            }}
          >
            {ImageData.map((image) => (
              <img
                key={image.imgAddress}
                src={image.imgAddress}
                alt=""
                className={styles.galleryImage}
              />
            ))}
          </div>
        </div>

        <div
          className={`
            ${styles.carouselControls}
            ${imageIndex === ImageData.length - 1 ? styles.faded : ""}
          `}
        >
          <button
            type="button"
            className={styles.carouselNav}
            aria-label="Previous gallery image"
            onClick={() => showPrevImage()}
            disabled={imageIndex === 0}
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path>
              </svg>
            </span>
          </button>

          <ul className={styles.dotNav}>
            {ImageData.map((image, index) => (
              <li>
                <button
                  type="button"
                  role="tab"
                  className={`${styles.dotNavButton} ${
                    imageIndex === index ? styles.active : ""
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                  aria-selected={imageIndex === index}
                  onClick={() => setImageIndex(index)}
                />
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={styles.carouselNav}
            aria-label="Next gallery image"
            onClick={() => showNextImage()}
            disabled={imageIndex === ImageData.length -1}
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
