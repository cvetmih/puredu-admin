import InputGroup from "../InputGroup";
import {useEffect, useState} from "react";
import Button from "../Button";
import PricingSelect from "../PricingSelect";

export default function CoursePricingPrimary({type, amount}) {
    const [data, setData] = useState({
        type, amount
    });

    const handleChange = (type, amount) => {
        setData({
            type, amount
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let {type, amount} = data;
        if(type === 'free') amount = 0;
    }

    return (
        <section className="flex flex-col">
            <header className="border-b mb-6 pb-2">
                <h3 className="text-xl">Primary Pricing</h3>
            </header>
            <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <PricingSelect
                    type={data.type}
                    amount={data.amount}
                    onChange={handleChange}
                />
                <div>
                    <Button>Save</Button>
                </div>
            </form>
        </section>
    )
}