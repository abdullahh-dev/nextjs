import ImageCard from "@/components/ImageCard";
import images from "@/public/images";
import Image from "next/image";
import React from "react";

const SingleFeedImagePage = async ({ params }: { params: { id: number } }) => {
  const imageId = (await params).id;
  const image = images.find(({ id }) => id == imageId);

  if (!image) return <div>Image not found</div>;

  return <ImageCard image={image} />;
};

export default SingleFeedImagePage;
