import { clsx } from "clsx";
import { type ComponentPropsWithoutRef, forwardRef } from "react";

interface Props extends ComponentPropsWithoutRef<"select"> {
  id: string;
  label: string;
  error?: string;
  children?: React.ReactNode;
}

export const Select = forwardRef<HTMLSelectElement, Props>(
  ({ id, label, error, children, ...rest }, ref) => {
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
          <select id={id} ref={ref} className={inputClasses} {...rest}>
            {children}
          </select>
        </div>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </div>
    );
  },
);
