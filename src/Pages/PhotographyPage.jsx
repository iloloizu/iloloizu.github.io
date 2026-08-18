import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Photography images from Adobe Lightroom
const images = [
  { id: 1, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/378989f36e014dbf8738e703db5f08d1/revisions/dabe4f48a8194d66afe4d709979836eb/renditions/4991e1df432ec07c7b3b3f3c42e2d52a', alt: 'Photography by Ilolo Izu' },
  
  { id: 2, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/b2110c92e3ee4c23974e35410c20634b/revisions/88388bda905d4b06a89a094c63fceb01/renditions/a18eefc3d55adf4c6e04413afbd4587d', alt: 'Photography by Ilolo Izu' },
  { id: 3, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/735a1fe103694bed992f02409ca99efe/revisions/bd4ad959acf54e619306562e78383307/renditions/4455b276a02899a7897086614df1cbec', alt: 'Photography by Ilolo Izu' },
  { id: 4, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/d0d3d274a52c4ae4b8e0c90e4b7a47d3/revisions/4ac6846801954b2984ddb8773f897a9d/renditions/e2394bb72f1f88ead2af29943bfd21ae', alt: 'Photography by Ilolo Izu' },
  { id: 5, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/ebdbeaa992c746138170903bc60ee512/revisions/f0377dad17814eba8f7fa3c789370216/renditions/b57677af20f101524cce3264d05faad8', alt: 'Photography by Ilolo Izu' },
  { id: 6, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/3273391bb8814724bd3f638f518a4d9a/revisions/8d155e065a504b88b0a340bfe77baba7/renditions/fb85ffb00e95b488c31957898c11c42c', alt: 'Photography by Ilolo Izu' },
  { id: 7, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/b7f77c433c654498829f17f88446f1b4/revisions/7ce3530124394d2983e92c18262e89aa/renditions/cfc095d93082295e0c4d3c2d75f11e4e', alt: 'Photography by Ilolo Izu' },
  { id: 8, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/8be1f81756b245d98a821968672fa824/revisions/be030d04090040d4b97e44b4492bf138/renditions/1db7d07a30ee515de98f2d7fd3b1a8e5', alt: 'Photography by Ilolo Izu' },
  { id: 9, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/675bbee445f34f5db5e2626ebe466d4a/revisions/73de1e0200e54fca9717dd8fc2f0512c/renditions/4e92842dce7d2b5f7696b78ffad8dfaa', alt: 'Photography by Ilolo Izu' },
  { id: 10, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/fdc6421f09534019ae538e72ff9151b3/revisions/28489b3652ff4e12afd7439d4e6f5946/renditions/01510a2456126012b66187f23c3852ba', alt: 'Photography by Ilolo Izu' },
  { id: 11, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/77e119735f6e4475887e67688839ec94/revisions/108abc75f67341cc88a6ad3974698bfd/renditions/35603b64f28c94266fefdac95d740353', alt: 'Photography by Ilolo Izu' },
  { id: 12, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/f977ade3427d49f3ad115fefb9a53122/revisions/0d750589742d49408fec5ca418708893/renditions/13d07e00766348be5ab768644ab25c6a', alt: 'Photography by Ilolo Izu' },
  { id: 13, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/30daf8806a4444029440b5d0f9697bd7/revisions/b4dcc6dda8de42c7ac705e19a75dce59/renditions/c6fe3c21525683cd3c7074fd517f069b', alt: 'Photography by Ilolo Izu' },
  { id: 14, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/fc068624c4cf4501845c5600ac70d579/revisions/fee39b845e1cbe449c505d020d8e1a27/renditions/4c377b33bf1dfe7a7c174b78782fdd6a', alt: 'Photography by Ilolo Izu' },
  { id: 15, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/76c2c55cbafa470da42d717e2ecbddf4/revisions/36ecc9b287a854879b45b61c24fb92cb/renditions/2f3ce5b40f2475d59c3e43a5cc600cc9', alt: 'Photography by Ilolo Izu' },
  { id: 16, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/b348413dca3244e8a15f30e5ad00ba41/revisions/d1a2b91d9d734e27a13bf90875df63f8/renditions/a1a04ea8bd0b76757902117fd74a5ee4', alt: 'Photography by Ilolo Izu' },
  { id: 17, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/9c7cd2a4235c4cd0b570b42323d4d570/revisions/e4e03c67b1ec4c5cb4133adaaca41fc2/renditions/fb3748bc0da6f42c1286a310c8b15997', alt: 'Photography by Ilolo Izu' },
  { id: 18, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/dcd7937bb3b042f6891df8fc5b7e6324/revisions/426b05f71bc74070a22b3f6f8a00ec1f/renditions/33ab11087351b609009ed311f71a1d22', alt: 'Photography by Ilolo Izu' },
  { id: 19, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/33bc291070cf41698884f29306afc149/revisions/b8bc50441ca748f28c9c125ef1fd41b2/renditions/da7992a59c21ffaf6bce98095e0db638', alt: 'Photography by Ilolo Izu' },
  { id: 20, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/8c1c9c628cba4d9faee1a06bb3c9ffb1/revisions/ed73380122cb4351bb9a0f44a15eae84/renditions/55addd56beb01f4a1f0a8fbcfa6cfd5b', alt: 'Photography by Ilolo Izu' },
  { id: 21, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/0ad2b3b10151499fad856b8f35202d5e/revisions/b1fc8972d99f43e2ad56bb53df8c47bb/renditions/b614ad98817a47e73e890b1765831054', alt: 'Photography by Ilolo Izu' },
  { id: 22, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/83d7e33e5d3a4e5084047e42843a104a/revisions/47f65bc3ec262c55c95100168d18ab4d/renditions/e3cbfaf0755a3d1d527de20138153a8b', alt: 'Photography by Ilolo Izu' },
  { id: 23, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/43c2dee2072d4dafa17c210aefd5aca8/revisions/c054ac31db7c4a4b53e2e444cdd24d32/renditions/7d3b6416fe3dde97da84fc8cb992807a', alt: 'Photography by Ilolo Izu' },
  { id: 24, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/aebf24b34c724f02ac06c8b0f5ce425b/revisions/d6c18d5e642244e1a702ff12e25b963c/renditions/e4eec0ceb8baf4c984736ec330d38c64', alt: 'Photography by Ilolo Izu' },
  { id: 25, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/5073722e7672458aa5c09d196679c886/revisions/9951bc4fa9c01521a86fbf7aafd90fee/renditions/1c2513d1bafdfe7a4e1d695cb895f31a', alt: 'Photography by Ilolo Izu' },
  { id: 26, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/8f5de41577f84342b0d434bb9bbb36ed/revisions/498018712d4d436aa4997fad51760e2e/renditions/22ec1365af4c0f874374db81deea19dc', alt: 'Photography by Ilolo Izu' },
  { id: 27, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/571b92cdee6b4f8c9f3509419cf44c46/revisions/8b9c8cc16b5645b4b3cf75946ffc975c/renditions/b64f8f2018720a848c01fab25b250d14', alt: 'Photography by Ilolo Izu' },
  { id: 28, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/5fb548dd445d46c9877ee174c10bb2b4/revisions/28f419fd810cd9ce129128753004c10d/renditions/8d96bad1d3528c0feb222dcad36555c0', alt: 'Photography by Ilolo Izu' },
  { id: 29, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/b946e57c06f74221a422ac315b5ad407/revisions/44ad8bb05380eda1c82cf83d05d82eb9/renditions/7eefadbc907a1e4b45914da02966e89b', alt: 'Photography by Ilolo Izu' },
  { id: 30, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/07bae72fbea74d86932858b8f313052a/revisions/f2105d3b512d4b44841efee7d6bded4c/renditions/89f7fb73d3dcbbce3359609f43a59987', alt: 'Photography by Ilolo Izu' },
  { id: 31, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/2791ee7d4e2f4018bca58ec32b973ffb/revisions/62466cda76bef394337c2b55be8ec8eb/renditions/4602fb2f3ad8c1bd036563c4a287a48d', alt: 'Photography by Ilolo Izu' },
  { id: 32, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/5e96906b28ed446dbe73f828f955a33e/revisions/c5be5dbd3c9a446487124c9f11ad608c/renditions/da9a1f3ac11758cb17852e169b713ea7', alt: 'Photography by Ilolo Izu' },
  { id: 33, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/6dbf37bd37f543919399724b8ac07480/revisions/8fbe4bfcfce54098a045f581c0c8304d/renditions/c70495b42479e2cc70bc2b6646ffbd56', alt: 'Photography by Ilolo Izu' },
  { id: 34, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/2a67f1f4737041598859d80f06758519/revisions/b3d57e3d251e436db3d1a275e089f014/renditions/381d82f687abf70c72f52fff68c2a6a8', alt: 'Photography by Ilolo Izu' },
  { id: 35, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/957f6ddca58545c7bacd793302da8db3/revisions/51ba941b5a5c63cfd891d403389e2ad1/renditions/3a9e8732734a0dc4c1f07a6973f0f74d', alt: 'Photography by Ilolo Izu' },
  { id: 36, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/21113e00bccf4735b3892169d8065afe/revisions/787f4a681748407a420a65a2982dc178/renditions/79d1bc50076e8a20836070936a68bee1', alt: 'Photography by Ilolo Izu' },
  { id: 37, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/856513f5e48443bf8d7d51ce4306e58e/revisions/ca4faa7b56ac48da8d8f96a6c5874fda/renditions/d363eddd7a5818c7e9e0285c7795cc8f', alt: 'Photography by Ilolo Izu' },
  { id: 38, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/9ef09bc001a8459c9e1fa9643fc386c0/revisions/e7b660410dea4e4e968e6335ef979a34/renditions/8cfd0d0aaa94e9f49ccb9409b0239f65', alt: 'Photography by Ilolo Izu' },
  { id: 39, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/d30811e3e1334679ac9388d8efa86204/revisions/d1b0f9843cf14e67b6e70bec2a6fc216/renditions/2b7ad37940442b2d3bef07c9d4cee561', alt: 'Photography by Ilolo Izu' },
  { id: 40, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/382715a5858a4ebdbe3879d9a2025b89/revisions/0bdb99408d5c47069b85bfc8f5879758/renditions/85b5230cb247a49c430e1b63a6626f9e', alt: 'Photography by Ilolo Izu' },
  { id: 41, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/d51b8d0a48a24fca81d9e99db30cb70e/revisions/e4cecd1cb5fd4c96a6545a097a11cb7a/renditions/116473f95f5d5dae3105a6b714607f0f', alt: 'Photography by Ilolo Izu' },
  { id: 42, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/d5ec3ac3f7f944748dcdd3a787e24b83/revisions/303374f9919918696b4fdaf66fbc4f1e/renditions/7ffba61d2f3fbe43ed3805b2c8cd27a1', alt: 'Photography by Ilolo Izu' },
  { id: 43, src: 'https://lightroom.adobe.com/v2c/spaces/47f21662640042c796d908e78b35941a/assets/cad11a80d65e4abf89ce44f682f11269/revisions/b935fe6ea105b4d9ca15c7f0ec5a4874/renditions/f9ec73b43f532f345abdac05da021b96', alt: 'Photography by Ilolo Izu' },

];

// Defers the image download until the tile is within 600px of the viewport.
// Chrome's native loading="lazy" threshold is too generous for a grid this
// size (it prefetches everything), so we gate the src ourselves.
function LazyPhoto({ src, alt, eager, onClick }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(eager);

  useEffect(() => {
    if (visible || !ref.current) return;
    if (!('IntersectionObserver' in window)) { setVisible(true); return; }
    // The page scrolls inside a container (.App), not the window — the
    // observer must use that scroller as root or the preload margin is
    // clipped away and images would only start loading once fully visible
    let root = ref.current.parentElement;
    while (root && !/(auto|scroll)/.test(getComputedStyle(root).overflowY)) {
      root = root.parentElement;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { root: root || null, rootMargin: '600px 0px' }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div ref={ref} className="photo-item" onClick={onClick}>
      {visible ? (
        <img src={src} alt={alt} decoding="async" fetchPriority={eager ? 'high' : 'auto'} />
      ) : (
        <div style={{ height: 300, borderRadius: 4, background: 'rgba(127, 127, 127, 0.08)' }} />
      )}
    </div>
  );
}

function PhotographyPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Warm the browser cache for the neighboring photos so lightbox arrows feel instant
  useEffect(() => {
    if (!lightboxOpen) return;
    [(currentImageIndex + 1) % images.length, (currentImageIndex - 1 + images.length) % images.length]
      .forEach((i) => { new Image().src = images[i].src; });
  }, [lightboxOpen, currentImageIndex]);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="photography-page">
      <div className="photography-header">
        <Link to="/" className="back-button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Home
        </Link>
        <h1>Photos by Ilolo Izu</h1>
      </div>

      <div className="photography-grid">
        {images.length > 0 ? (
          images.map((image, index) => (
            <LazyPhoto
              key={image.id}
              src={image.src}
              alt={image.alt}
              eager={index < 6}
              onClick={() => openLightbox(index)}
            />
          ))
        ) : (
          <p className="no-photos">No photos to display yet.</p>
        )}
      </div>

      {lightboxOpen && images.length > 0 && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="lightbox-prev" onClick={showPrevImage}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="lightbox-content">
            <img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} />
            <div className="lightbox-counter">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
          <button className="lightbox-next" onClick={showNextImage}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default PhotographyPage;

