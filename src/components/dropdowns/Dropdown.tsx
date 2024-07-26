import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid/index";
import classNames from "classnames";

export type DropDownProps = {
  item: string;
  options: readonly string[];
  onChange: (option: string) => void;
  label?: string;
  icon: JSX.Element;
};

export const Dropdown = ({ item, options, icon, onChange, label }: DropDownProps) => {
  return (
    <Listbox
      value={item}
      onChange={(option) => option !== item && onChange(option)}
    >
      {({ open }) => (
        <div className="min-w-[6rem]">
          {label && (
            <Listbox.Label className="block text-sm font-medium text-gray-700 mb-1">
              {label}
            </Listbox.Label>
          )}
          <div className="relative">
            <Listbox.Button
              className={classNames(
                "peer relative w-full cursor-default rounded-md py-2 pl-3 pr-10 text-left text-white sm:text-sm",
                "hover:bg-wsg-orange-400 hover:bg-opacity-50 focus:ring-1 focus:ring-wsi-blue-300"
              )}
            >
              <span className="block truncate text-base font-medium">
                {item}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                {icon}
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((option) => (
                  <Listbox.Option
                    key={option}
                    className={
                      "relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-wsg-orange-700"
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {option}
                        </span>

                        {selected ? (
                          <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-wsi-blue-300">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
};
