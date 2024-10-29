import clsx from "clsx";

export type PersonImageProps = {
  img?: string;
};

export const PersonImage = ({ img }: PersonImageProps) => {
  return (
    <img
      className={clsx(
        `mx-auto h-40 w-40 rounded-full object-cover shadow-lg xl:h-56 xl:w-56`,
        img || "p-5",
      )}
      src={img ?? "/imgs/wsg/wsg_hands.svg"}
      alt=""
    />
  );
};
