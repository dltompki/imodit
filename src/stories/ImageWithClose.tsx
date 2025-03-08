import { X } from "lucide-react";
import "./ImageWithClose.css";

type ImageWithCloseProps = {
  src: string;
  alt?: string;
  onClose?: () => void;
};

export default function ImageWithClose({
  src,
  alt,
  onClose,
}: ImageWithCloseProps) {
  return (
    <div className="image-container">
      <img src={src} alt={alt} className="image" width={100} height={100} />
      <button onClick={onClose} className="close-button">
        <X size={16} />
      </button>
    </div>
  );
}
