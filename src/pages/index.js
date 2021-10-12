import * as React from 'react';
import useSound from 'use-sound';
import { StaticImage } from 'gatsby-plugin-image';
import scream1 from '../sounds/man-scream-01.mp3';
import scream2 from '../sounds/man-scream-02.mp3';

import { parent, vk, yandex,  phone, marsel }from '../styles/index.module.css'

export default function IndexPage() {
  const [showImage, setShowImage] = React.useState(false);
  const [playScream1] = useSound(scream1);
  const [playScream2] = useSound(scream2);

  React.useEffect(() => {
    if (showImage) {
      setTimeout(() => {
        setShowImage(false)
      }, 2000)
    }
  }, [showImage])

  return (
    <div className={parent}>
      { showImage && <StaticImage
        className={marsel}
        src="../images/marsel.png"
        alt="screaming marsel"
        placeholder="dominantColor"
      />}
      <div class={`${phone} ${vk}`} onClick={ () => {
        setShowImage(true);
        playScream1()
      }
      }>VK</div>
      <div class={`${phone} ${yandex}`} onClick={
        () => {
          setShowImage(true);
          playScream2();
        }
        }>Yandex</div>
    </div>
  )
}