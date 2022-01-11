import Textarea from "./Textarea";

export default function TextareaGroup({name, value, label, ...props}) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="font-medium text-sm">{label}</label>
            <Textarea name={name} id={name} value={value} {...props}/>
        </div>
    )
}