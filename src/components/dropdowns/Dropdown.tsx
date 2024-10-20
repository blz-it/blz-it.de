import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid/index";
import { clsx } from "clsx";
import { Fragment } from "react";

type Item<T> = { label: string; value: T };

interface Props<T> {
  item: Item<T>;
  options: Item<T>[];
  onChange: (option: T) => void;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

export function Dropdown<T>({
  item,
  options,
  onChange,
  leftIcon,
  rightIcon,
}: Props<T>) {
  return (
    <Listbox
      value={item}
      onChange={(option) =>
        option.value !== item.value && onChange(option.value)
      }
    >
      {({ open }) => (
        <div className="min-w-[6rem]">
          <div className="relative">
            <ListboxButton className="peer flex w-full items-center gap-2 rounded-md px-4 py-2 text-left text-white hover:bg-wsg-orange-400 hover:bg-opacity-50 focus:ring-1 focus:ring-wsi-blue-300 sm:text-sm">
              {leftIcon && <span>{leftIcon}</span>}
              <span className="flex-1 text-base font-medium">{item.label}</span>
              {rightIcon && <span>{rightIcon}</span>}
            </ListboxButton>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions className="absolute z-10 mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((option, index) => (
                  <ListboxOption
                    key={index}
                    className={
                      "relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-wsg-orange-700"
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={clsx(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate",
                          )}
                        >
                          {option.label}
                        </span>

                        {selected && (
                          <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-wsi-blue-300">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
}
