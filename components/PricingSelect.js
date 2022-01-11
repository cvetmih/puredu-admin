import {useEffect, useState} from "react";
import InputGroup from "./InputGroup";

export default function PricingSelect({type, amount, onChange}) {
    const [selectedType, setSelectedType] = useState(type);
    const [selectedAmount, setSelectedAmount] = useState(amount);

    const handleTypeChange = ({target}) => {
        setSelectedType(target.name);
    }

    const handleAmountChange = ({target}) => {
        setSelectedAmount(parseInt(target.value) || 0);
    }

    useEffect(() => {
        onChange(selectedType, selectedAmount);
    }, [selectedType, selectedAmount]);

    return (
        <div className="flex flex-col gap-8">
            <div>
                <label htmlFor="free" className="flex items-start gap-4">
                    <div>
                        <input type="radio"
                               checked={selectedType === 'free'}
                               id="free"
                               name="free"
                               onChange={handleTypeChange}
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-full max-w-md">
                        <strong>Free</strong>
                        <p className="text-sm text-gray-500">Offer free content</p>
                    </div>
                </label>
            </div>

            <div>
                <label htmlFor="one-time" className="flex items-start gap-4">
                    <div>
                        <input type="radio"
                               checked={selectedType === 'one-time'}
                               id="one-time"
                               name="one-time"
                               onChange={handleTypeChange}
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-full max-w-md">
                        <strong>One-time payment</strong>
                        <p className="text-sm text-gray-500">Charge students a one-time fee</p>
                        {selectedType === 'one-time' && (
                            <div>
                                <InputGroup label="Price"
                                            type="number"
                                            onChange={handleAmountChange}
                                            value={amount}
                                />
                            </div>
                        )}
                    </div>
                </label>
            </div>

            <div>
                <label htmlFor="subscription" className="flex items-start gap-4">
                    <div>
                        <input type="radio"
                               checked={selectedType === 'subscription'}
                               id="subscription"
                               name="subscription"
                               onChange={handleTypeChange}
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-full max-w-md">
                        <strong>Subscription</strong>
                        <p className="text-sm text-gray-500">Charge students recurring monthly fees</p>
                        {selectedType === 'subscription' && (
                            <div>
                                <InputGroup label="Price"
                                            type="number"
                                            onChange={handleAmountChange}
                                            value={amount}
                                />
                            </div>
                        )}
                    </div>
                </label>
            </div>
        </div>
    )
}