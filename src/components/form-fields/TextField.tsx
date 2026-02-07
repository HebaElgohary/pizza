import { IFormField, Props } from "@/types/app";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

export const TextField = ({
  name,
  label,
  type,
  placeholder,
  disabled,
  autoFocus,
  options,
  id,
  defaultValue,
  readonly,
  className,
  data,
  validationsError,
}: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={name} className="font-semibold !px-1">
        {label}
      </Label>
      <Input
        disabled={disabled}
        autoFocus={autoFocus}
        name={name}
        type={type}
        defaultValue={data ? (data.get(name)?.toString() as string) : " "}
        id={name}
        placeholder={placeholder}
        className={`border rounded-lg !p-2 focus:outline-none focus:ring-2 focus:ring-primary transition ${className}`}
      />
      
      {validationsError &&  Array.isArray(validationsError?.[name]) &&
        validationsError[name].map((err: string, i:number) => (
          <p className="text-destructive !px-3" key={i}>
            {err}
          </p>
        ))}
    </div>
  );
};
