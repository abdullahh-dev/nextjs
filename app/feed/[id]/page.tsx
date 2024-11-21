import images from "@/public/images";
import Image from "next/image";
import React from "react";

const SingleFeedImagePage = async ({
  params: { id },
}: {
  params: { id: number };
}) => {
  const image = images.find((image) => image.id == id);

  if (!image) return <div>Image not found</div>;

  return (
    <div className="flex flex-col justify-center items-center mt-20 gap-3">
      <Image
        src={image?.src}
        alt={image?.alt}
        width={350}
        height={200}
        className="object-cover"
      />
      <h1>{image.title}</h1>
    </div>
  );
};

export default SingleFeedImagePage;
