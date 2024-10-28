export type PersonImageProps = {
  img?: string;
};

export const PersonImage = ({ img }: PersonImageProps) => {
  const padding = !img ? "p-5" : "";
  return (
    <img
      className={`mx-auto h-40 w-40 rounded-full object-cover shadow-lg xl:h-56 xl:w-56 ${padding}`}
      src={img ?? "/imgs/wsg/wsg_hands.svg"}
      alt=""
    />
  );
};
