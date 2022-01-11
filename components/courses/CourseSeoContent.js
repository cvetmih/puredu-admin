import InputGroup from "../InputGroup";
import {useEffect, useState} from "react";
import Button from "../Button";
import TextareaGroup from "../TextareaGroup";

export default function CourseSeoContent({title, description, image}) {
    const [data, setData] = useState({
        title, description, image
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

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <section className="flex flex-col">
            <header className="border-b mb-6 pb-2">
                <h3 className="text-xl">Meta Content</h3>
            </header>
            <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <InputGroup name="title" value={data.title} label="Meta Title" onChange={handleInputChange}/>
                <TextareaGroup name="description" value={data.description} label="Meta Description"
                               onChange={handleInputChange}/>
                <InputGroup name="image" value={data.image} label="Meta Image" onChange={handleInputChange}/>
                <div>
                    <Button>Save</Button>
                </div>
            </form>
        </section>
    )
}