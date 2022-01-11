import {useEffect, useState} from "react";
import Box from "../Box";
import CourseSettingsBasic from "./CourseSettingsBasic";
import CourseSettingsImage from "./CourseSettingsImage";
import CourseSettingsCode from "./CourseSettingsCode";
import CoursePricingPrimary from "./CoursePricingPrimary";
import CourseCertificateContent from "./CourseCertificateContent";
import CourseSeoContent from "./CourseSeoContent";

export default function CourseSeo({course}) {
    const {title, description, image} = course.seo;

    const [data, setData] = useState({
        // title, slug, teacher
    });

    return (
        <div className="flex flex-col gap-8">
            <Box>
                <CourseSeoContent
                    title={title}
                    description={description}
                    image={image}
                />
            </Box>
        </div>
    )
}