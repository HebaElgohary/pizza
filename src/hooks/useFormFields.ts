import { getDictionary } from "@/app/[locale]/dictionaries";
import { Pages } from "@/constants/enums";
import { FormProps, IFormField } from "@/types/app";

    export default  function useFormFields({slug,translation,dictionary}:FormProps) {

        const loginFields:IFormField[]=[
                {
                    label:dictionary[0]?.label,
                    name:dictionary[0]?.name,
                    type:'email',
                    placeholder:dictionary[0]?.placeholder,
                },
                    {
                    label:dictionary[1]?.label,
                    name:dictionary[1]?.name,
                    type:'password',
                    placeholder:dictionary[1]?.placeholder,       
                }
            ];
                const signupFields:IFormField[]=[
                {
                    label:dictionary[0]?.label,
                    name:`${dictionary[0]?.name}`,
                    type:'text',
                    placeholder:`${dictionary[0]?.placeholder}`,
                },
                    {
                    label:`${dictionary[1]?.label}`,
                    name:`${dictionary[1]?.name}`,
                    type:'email',
                    placeholder:`${dictionary[1]?.placeholder}`,
                },
                 {
                    label:dictionary[2]?.label,
                    name:`${dictionary[2]?.name}`,
                    type:'password',
                    placeholder:`${dictionary[2]?.placeholder}`,       
                },
                         {
                    label:`${dictionary[3]?.label}`,
                    name:`${dictionary[3]?.name}`,
                    type:'password',
                    placeholder:`${dictionary[3]?.placeholder}`,       
                }
            ];
            const getFormFields=():IFormField[]=>{
                switch(slug){
                    case Pages.LOGIN:
                        return loginFields
                        case Pages.Register:
                        return signupFields
                        default:
                            return []
                }
            }
return getFormFields()

}
