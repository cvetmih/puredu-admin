import {useEffect, useState} from "react";
import Box from "../Box";
import CourseSettingsBasic from "./CourseSettingsBasic";
import CourseSettingsImage from "./CourseSettingsImage";
import CourseSettingsCode from "./CourseSettingsCode";
import CoursePricingPrimary from "./CoursePricingPrimary";

export default function CoursePricing({course}) {
    const [data, setData] = useState({});

    const {type, amount} = course.pricing;

    return (
        <div className="flex flex-col gap-8">
            <Box>
                <CoursePricingPrimary
                    type={type}
                    amount={amount}
                />
            </Box>
        </div>
    )
}