import {useEffect, useState} from "react";
import Box from "../Box";
import CourseSettingsBasic from "./CourseSettingsBasic";
import CourseSettingsImage from "./CourseSettingsImage";
import CourseSettingsCode from "./CourseSettingsCode";

export default function CourseSettings({course}) {
    const [data, setData] = useState({
        // title, slug, teacher
    });

    return (
        <div className="flex flex-col gap-8">
            <Box>
                <CourseSettingsBasic
                    title={course.title}
                    slug={course.slug}
                    teacher={course.teacher}
                />
            </Box>

            <Box>
                <CourseSettingsImage
                    image={course.hero}
                    description={course.description}
                />
            </Box>

            <Box>
                <CourseSettingsCode
                    code={course.code}
                />
            </Box>
        </div>
    )
}