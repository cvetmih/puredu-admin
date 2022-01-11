import InputGroup from "../InputGroup";
import {useEffect, useState} from "react";
import Button from "../Button";

export default function CourseSettingsBasic({title, slug, teacher}) {
    const [data, setData] = useState({
        title, slug, teacher
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
                <h3 className="text-xl">Basic</h3>
            </header>
            <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <InputGroup label={'Title'}
                            name={'title'}
                            value={data.title}
                            onChange={handleInputChange}
                />
                <InputGroup label={'Slug'}
                            name={'slug'}
                            value={data.slug}
                            onChange={handleInputChange}
                />
                {/*<InputGroup label={'Teacher'}*/}
                {/*            name={'teacher'}*/}
                {/*            value={data.teacher}*/}
                {/*            onChange={handleInputChange}*/}
                {/*/>*/}
                <div>
                    <Button>Save</Button>
                </div>
            </form>
        </section>
    )
}