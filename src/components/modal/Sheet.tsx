import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Dialog, Heading } from 'react-aria-components';
import { IoClose } from 'react-icons/io5';

const staticTransition = {
  duration: 0.5,
  ease: [0.32, 0.72, 0, 1],
};

const SHEET_MARGIN = 34;

interface SheetProps {
  showBtnText: boolean
  children?: React.ReactNode;
  title?: string;
  btnText?: string;
  icon?: React.ReactNode;
}

let closeSheetFunction: () => void;

const Sheet: React.FC<SheetProps> = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [modalHeight, setModalHeight] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null); // Ref para acceder al elemento modal

  useEffect(() => {
    function updateModalHeight() {
      const windowHeight = window.innerHeight;
      const calculatedHeight = windowHeight / 2 - SHEET_MARGIN / 2;
      setModalHeight(calculatedHeight);
    }

    updateModalHeight();

    window.addEventListener('resize', updateModalHeight);

    return () => {
      window.removeEventListener('resize', updateModalHeight);
    };
  }, []);

  useEffect(() => {
    // Función para manejar el comportamiento del body cuando el modal está abierto
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Evita el scroll en el body
    } else {
      document.body.style.overflow = 'auto'; // Restaura el scroll en el body
    }

    return () => {
      document.body.style.overflow = 'auto'; // Asegura que el scroll se restablezca cuando el componente se desmonte
    };
  }, [isOpen]);

  const openSheet = () => {
    setOpen(true);
  };

  const handleClose: React.MouseEventHandler<HTMLDivElement> = (event) => {
    // Verificar si se hizo clic fuera del contenido del modal
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  closeSheetFunction = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className="hover:text-black-400 transition-colors duration-300 p-2 my-auto text-white text-xl flex hover:bg-bunker-700/60 bg-bunker-700 backdrop-blur-xl rounded-full cursor-default overflow-hidden"
        onClick={openSheet}
      >
        <div className='flex justify-between gap-x-0.5 text-xl items-center'>
          {props.icon}
          <div className={`-mt-0.5 text-lg my-auto ${!props.showBtnText?"hidden lg:block":"block"}`}>{props.btnText}</div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-0 inset-0 z-50 bg-white/5 backdrop-blur-sm"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={staticTransition}
          >
            <motion.div
              ref={modalRef}
              className="z-30  shadow-inner bg-bunker-700 backdrop-blur-xl fixed bottom-0 left-0 right-0 rounded-t-3xl will-change-transform overflow-y-auto lg:max-w-md lg:mx-auto lg:my-auto scrollbar-hide overflow-hidden border-t border-x border-bunker-500/30"
              initial={{ y: modalHeight + SHEET_MARGIN / 2 }}
              animate={{ y: SHEET_MARGIN / 2 }}
              exit={{ y: modalHeight + SHEET_MARGIN / 2 }}
              transition={staticTransition}
              style={{
                height: modalHeight,
                marginTop: `-${modalHeight}px`,
              }}
            >
              <Dialog className="pb-4 outline-none">
                <div className="sticky top-0 z-50 bg-bunker-700 backdrop-blur-xl">
                  <div className="flex justify-center">
                    <Heading slot="title" className="text-xl font-semibold py-2.5 text-black-100">
                      {props.title || ''}
                    </Heading>
                    <div
                      className="absolute hover:bg-bunker-600/50 text-black-400 right-2 top-2 rounded-full text-lg font-semibold outline-none border-none p-2 cursor-pointer bg-bunker-600 backdrop-blur-sm"
                      onClick={() => setOpen(false)}
                    >
                      <IoClose />
                    </div>
                  </div>
                </div>
                <div className="relative px-4 z-10">
                  <div className="scrollbar-hide overflow-y-auto py-2 max-h-72">
                    {props.children}
                  </div>
                </div>
              </Dialog>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export const closeSheet = () => {
  closeSheetFunction?.();
};

export default Sheet;
