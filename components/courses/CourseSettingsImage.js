import InputGroup from "../InputGroup";
import {useEffect, useState} from "react";
import Button from "../Button";
import TextareaGroup from "../TextareaGroup";

export default function CourseSettingsImage({image, description}) {
    const [data, setData] = useState({
        image, description
    });

    const handleInputChange = ({target}) => {
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    useEffect(() => {
        console.log(data);
    }, [data]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: submit data
    }

    return (
        <section className="flex flex-col">
            <header className="border-b mb-6 pb-2">
                <h3 className="text-xl">Image &amp; description</h3>
            </header>
            <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <InputGroup label={'Image'}
                            name={'image'}
                            value={data.image}
                            onChange={handleInputChange}
                />
                <TextareaGroup label={'Description'}
                            name={'description'}
                            value={data.description}
                            onChange={handleInputChange}
                />
                <div>
                    <Button>Save</Button>
                </div>
            </form>
        </section>
    )
}