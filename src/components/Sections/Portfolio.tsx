import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useState} from 'react'; // , useRef
import { Dialog } from '@headlessui/react'; 
import { XMarkIcon } from '@heroicons/react/24/outline';
import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
//import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const [ selectedImage, setSelectedImage ] = useState<string | null>(null);

  const handleImageClick = (image: string | StaticImageData) => {
    if(typeof image === 'string')
      setSelectedImage(image);
    else{
      setSelectedImage(image.src);
    }
  }

  const handleImageClose = () => {
    setSelectedImage(null);
  }

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Red de monitoreo ambiental (en desarrollo)</h2>
        <div className=" w-full columns-2 md:columns-3 lg:columns-4">
          {portfolioItems.map((item, index) => {
            const {title, image} = item;
            const imageUrl = typeof image === 'string' ? image : image.src;
            return (
              <div className="pb-6" key={`${title}-${index}`}>
                
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                  )} onClick={()=> handleImageClick(image)}>
                  <Image
                    alt={title}
                    className="h-full w-full"
                    //placeholder="blur"
                    src={imageUrl}
                    width={400}  // Ajusta según el diseño
                    height={300} // Ajusta según el diseño
                    //layout='intrinsic'
                  />
                  <ItemOverlay item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedImage && (
        <Dialog open={!!selectedImage} onClose={handleImageClose} className="relative max-w-4xl w-full max-h-screen">
          <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="relative max-w-4xl">
              <button
                onClick={handleImageClose}
                className="absolute top-2 right-2 rounded-full bg-gray-700 p-2 text-white hover:bg-gray-600">
                <XMarkIcon className="h-6 w-6" />
              </button>
              <Image
                src={selectedImage}
                alt="Expanded"
                className="rounded-lg shadow-lg" 
                width={1200}
                height={800}
                objectFit="contain"
              />
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {title, description}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  //const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  //useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <a
      className={classNames(
        'absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300',
        {'opacity-0 hover:opacity-80': !mobile},
        showOverlay ? 'opacity-80' : 'opacity-0',
      )}
      //href={url}
      onClick={handleItemClick}
      //ref={linkRef}
      target="_blank">
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
          <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
          <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
        </div>
        <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
      </div>
    </a>
  );
});
