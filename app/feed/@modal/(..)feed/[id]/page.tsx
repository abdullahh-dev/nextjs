import ImageCard from "@/components/ImageCard";
import images from "@/public/images";

const SingleFeedImagePage = ({ params }: { params: { id: number } }) => {
  const imageId = params.id;
  const image = images.find(({ id }) => id == imageId);

  if (!image) return <div>Image not found</div>;

  return <ImageCard image={image} />;
};

export default SingleFeedImagePage;
