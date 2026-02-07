import FormFields from "@/components/form-fields/FormFields";
import useFormFields from "@/hooks/useFormFields";
import { FormProps, IFormField } from "@/types/app";

function Form({
  slug,
  translation,
  dictionary,
  data,

  validationsError,
}: FormProps) {
  const getFormFields: IFormField[] = useFormFields({
    slug,
    translation,
    dictionary,
    data
  });

  return getFormFields.map((field, i) => {
    return (
      <FormFields
        key={i}
        {...field}
       data={data}
        dictionary={dictionary}
        validationsError={validationsError}
      />
    );
  });
}

export default Form;
