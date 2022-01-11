import {useEffect, useState} from "react";
import Box from "../Box";
import CourseSettingsBasic from "./CourseSettingsBasic";
import CourseSettingsImage from "./CourseSettingsImage";
import CourseSettingsCode from "./CourseSettingsCode";
import CoursePricingPrimary from "./CoursePricingPrimary";
import CourseCertificateContent from "./CourseCertificateContent";

export default function CourseCertificate({course}) {
    const [data, setData] = useState({
        // title, slug, teacher
    });

    return (
        <div className="flex flex-col gap-8">
            <Box>
                <CourseCertificateContent

                />
            </Box>
        </div>
    )
}