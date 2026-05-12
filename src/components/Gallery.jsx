import { useState } from "react";
import { X } from "lucide-react";
import { workExamples } from "../data/content";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  function openModal(item) {
    setSelectedImage(item);
    setIsClosing(false);
  }

  function startCloseModal() {
    setIsClosing(true);
  }

  function handleAnimationEnd() {
    if (isClosing) {
      setSelectedImage(null);
      setIsClosing(false);
    }
  }

  return (
    <section className="page-section">
      <h2 className="section-title">Примеры работ</h2>

      <div className="grid grid-cols-2 gap-4">
        {workExamples.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={() => openModal(item)}
            className="relative aspect-[1.12/1] rounded-[18px] overflow-hidden border border-blue-500/30 bg-black/60 text-left shadow-[0_0_24px_rgba(30,144,255,0.12)]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition duration-300 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

            <p className="absolute left-3 bottom-3 text-[14px] font-black leading-tight">
              {item.title}
            </p>
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className={`fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center px-5 ${
            isClosing ? "modal-fade-out" : "modal-fade-in"
          }`}
          onClick={startCloseModal}
          onAnimationEnd={handleAnimationEnd}
        >
          <div
            className={`relative w-full max-w-md ${
              isClosing ? "modal-zoom-out" : "modal-zoom-in"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={startCloseModal}
              className="absolute -top-12 right-0 text-white/80 hover:text-white"
              aria-label="Закрыть изображение"
            >
              <X size={34} />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[75vh] object-contain rounded-3xl border border-blue-500/35 shadow-[0_0_42px_rgba(30,144,255,0.28)]"
            />

            <p className="mt-4 text-center text-xl font-black">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}