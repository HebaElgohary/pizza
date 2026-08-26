import { Props } from "@/types/app";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

export const TextField = ({
  name,
  label,
  type,
  placeholder,
  disabled,
  autoFocus,
  readonly,
  className,
  data,
  validationsError,
  user,
}: Props) => {

  const value = data?.get(name)?.toString() ?? user?.name ?? "";

  const errors =
    validationsError &&
    Array.isArray(
      (validationsError as Record<string, unknown>)?.[name]
    )
      ? (validationsError as Record<string, string[]>)[name]
      : [];

  return (
    <div className="!space-y-2">

      <Label
        htmlFor={name}
        className="!px-1 text-sm font-semibold text-gray-700"
      >
        {label}
      </Label>

      <Input
        id={name}
        name={name}
        type={type}
        disabled={disabled}
        autoFocus={autoFocus}
        readOnly={readonly}
        defaultValue={value}
        placeholder={placeholder}
        aria-invalid={errors.length > 0}
        aria-describedby={
          errors.length > 0 ? `${name}-error` : undefined
        }
        className={`
          !h-12
          !w-full
          !rounded-xl
          border-gray-200
          bg-gray-50
          !px-4
          text-gray-900
          transition-all
          placeholder:text-gray-400
          focus:border-primary
          focus:bg-white
          focus:ring-2
          focus:ring-primary/20
          disabled:cursor-not-allowed
          disabled:opacity-60
          ${errors.length > 0 ? "!border-destructive focus:!ring-destructive/20" : ""}
          ${className ?? ""}
        `}
      />

      {errors.length > 0 && (
        <div
          id={`${name}-error`}
          className="!space-y-1 !px-1"
        >
          {errors.map((error, index) => (
            <p
              key={index}
              className="text-xs font-medium text-destructive"
            >
              {error}
            </p>
          ))}
        </div>
      )}

    </div>
  );
};