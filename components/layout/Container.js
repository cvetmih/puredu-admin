import Head from "next/head";
import Nav from "./Nav";
import Main from "./Main";

export default function Container({children, className}) {
    return (
        <div className={`w-full max-w-7xl m-auto border-l border-r ${className || ''}`}>
            {children}
        </div>
    )
}