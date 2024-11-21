'use client';

import { ImageType } from "@/types";
import { Modal } from "@nextui-org/react";
import Image from "next/image";

const ClientModal = ({ image }: { image: ImageType }) => {
  return (
    <Modal size="md">
      <Image
        src={image.src}
        alt={image.alt}
        width={350}
        height={200}
        className="object-cover"
      />
      <h1>{image.title}</h1>
    </Modal>
  );
};

export default ClientModal; 