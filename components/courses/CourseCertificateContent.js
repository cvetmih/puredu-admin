import InputGroup from "../InputGroup";
import {useEffect, useState} from "react";
import Button from "../Button";

export default function CourseCertificateContent() {
    const [data, setData] = useState({
        // title, slug, teacher
    });

    const handleInputChange = ({target}) => {
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: submit data
    }

    return (
        <section className="flex flex-col">
            <header className="border-b mb-6 pb-2">
                <h3 className="text-xl">Content</h3>
            </header>
            <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
                - Inputs for certificate
                <div>
                    <Button>Save</Button>
                </div>
            </form>
        </section>
    )
}