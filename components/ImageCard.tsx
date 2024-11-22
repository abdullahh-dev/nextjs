import { ImageType } from "@/types";
import Image from "next/image";
import React from "react";
import Modal from "./Modal";

const ImageCard = ({ image: { src, alt } }: { image: ImageType }) => {
  return (
    <Modal>
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="object-cover"
      />
    </Modal>
  );
};

export default ImageCard;
