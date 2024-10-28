import { clsx } from "clsx";

interface Props {
  type?: "error" | "success";
  children?: React.ReactNode;
}

export function Alert({ type, children }: Props) {
  const alertClasses = clsx("rounded-md p-4", {
    "bg-red-50": type === "error",
    "bg-green-50": type === "success",
  });
  const textClasses = clsx("text-sm font-medium", {
    "text-red-800": type === "error",
    "text-green-800": type === "success",
  });

  return (
    <div className={alertClasses}>
      <p className={textClasses}>{children}</p>
    </div>
  );
}
