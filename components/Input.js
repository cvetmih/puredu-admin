export default function Input({type = 'text', name, value, ...props}) {
    return (
        <input type={type} name={name} id={name} value={value} {...props}
               className="w-full border text-md px-3 py-2"
        />
    )
}