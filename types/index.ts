import { StaticImageData } from "next/image";

export type ImageType = {
  src: StaticImageData;
  alt: string;
  title: string;
  id: number;
};
