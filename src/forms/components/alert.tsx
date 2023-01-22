import classNames from "classnames";

interface Props {
  isError?: boolean;
  children?: React.ReactNode;
}

export default function Alert({ isError, children }: Props) {
  const alertClasses = classNames("rounded-md p-4", {
    "bg-red-50": isError,
    "bg-green-50": !isError,
  });
  const textClasses = classNames("text-sm font-medium", {
    "text-red-800": isError,
    "text-green-800": !isError,
  });

  return (
    <div className={alertClasses}>
      <p className={textClasses}>{children}</p>
    </div>
  );
}
