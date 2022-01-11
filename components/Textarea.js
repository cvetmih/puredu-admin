export default function Textarea({ name, value, ...props }) {
  return (
    <textarea
      name={name}
      id={name}
      className="w-full border text-md px-3 py-2 h-32 resize-y"
      value={value}
      {...props}
    />
  );
}
