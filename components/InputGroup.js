import Input from './Input';

export default function InputGroup({type = 'text', name, value, label, ...props}) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="font-medium text-sm">{label}</label>
            <Input type={type} name={name} value={value} {...props}/>
        </div>
    )
}