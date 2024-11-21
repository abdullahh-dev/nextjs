import images from "@/public/images";
import Image from "next/image";
import Link from "next/link";

const FeedPage = () => {
  return (
    <div className="grid grid-cols-5 gap-4 p-12">
      {images.map((image) => (
        <div
          className="flex flex-col group relative w-[320px] aspect-[9/16] items-center gap-2 bg-[#0f0f0f] border border-slate-800 rounded-lg overflow-hidden"
          key={image.id}
        >
          <Link href={`/feed/${image.id}`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-top"
            />
          </Link>
          <h2 className="text-white absolute bg-[black]/20 backdrop-blur-lg rounded-md px-4 bottom-2 group-hover:-translate-y-12 transition-all duration-700 text-center text-lg">
            {image.title}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default FeedPage;
