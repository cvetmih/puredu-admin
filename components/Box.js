export default function Box({children, className}) {
    return (
        <div className={`border p-4 ${className || ''}`}>
            {children}
        </div>
    )
}