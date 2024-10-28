import { clsx } from "clsx";
import { type ComponentPropsWithoutRef, forwardRef } from "react";

interface Props extends ComponentPropsWithoutRef<"input"> {
  id: string;
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ id, label, error, ...rest }, ref) => {
    const inputClasses = clsx(
      "block w-full rounded-lg focus:outline-none shadow-sm sm:text-sm border py-2 px-3 bg-white",
      {
        "border-red-300 focus:border-red-500 focus:ring-red-500": error,
        "border-gray-300 focus:border-wsg-orange-500 focus:ring-wsg-orange-500":
          !error,
      },
    );

    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="mt-1">
          <input id={id} ref={ref} className={inputClasses} {...rest} />
        </div>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>
    );
  },
);
