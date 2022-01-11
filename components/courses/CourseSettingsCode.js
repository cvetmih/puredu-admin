import InputGroup from "../InputGroup";
import {useEffect, useState} from "react";
import Button from "../Button";
import TextareaGroup from "../TextareaGroup";

export default function CourseSettingsCode({code}) {
    const [data, setData] = useState({
        code
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
                <h3 className="text-xl">Page code</h3>
            </header>
            <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <TextareaGroup label={'Code'}
                            name={'code'}
                            value={data.code}
                            onChange={handleInputChange}
                />
                <div>
                    <Button>Save</Button>
                </div>
            </form>
        </section>
    )
}