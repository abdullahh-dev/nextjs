import witcher from "@/public/images/the-witcher.png";
import rdr2 from "@/public/images/rdr2.jpeg";
import cod from "@/public/images/cod.jpg";
import assasin from "@/public/images/assasian-creed.jpg";
import { ImageType } from "@/types";

const images: ImageType[] = [
  {
    id: 1,
    src: rdr2,
    title: "Red Dead Redemption 2",
    alt: "red-dead-redemption-2",
  },
  {
    id: 2,
    src: cod,
    title: "Call of Duty",
    alt: "call-of-duty",
  },
  {
    id: 3,
    src: assasin,
    title: "Assassin's Creed",
    alt: "assasin-creed",
  },
  {
    id: 4,
    src: witcher,
    title: "The Witcher",
    alt: "the-witcher",
  },
];

export default images;
