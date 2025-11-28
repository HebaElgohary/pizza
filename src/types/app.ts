
export  interface IOption{
    label:string,
    value:string

}

export  interface IFormFields{
    slug:string,
}
export interface IFormFieldsVar extends IFormFields{
    translation:any
}

export interface FormProps extends IFormFieldsVar{
    dictionary:any
}

export interface IFormField{
    name:string,
    label?:string,
    type:'text'|'password'|'email'|'number'|'date'|'textarea'
    ,placeholder?:string,
    disabled?:boolean,
    options?:IOption,
    autoFocus?:boolean,
    id?:string,
    defaultValue?:string,
    readonly?:boolean
    ,className?:string


}
export interface Props extends IFormField{error:string}
