import ImageCard from "@/components/ImageCard";
import images from "@/public/images";

const SingleFeedImagePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params)?.id;
  const imageId = Number(id);
  const image = images.find(({ id }) => id === imageId);

  if (!image) return <div>Image not found</div>;

  return <ImageCard image={image} />;
};

export default SingleFeedImagePage;
