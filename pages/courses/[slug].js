import Layout from "../../components/layout/Layout";
import CourseSettings from "../../components/courses/CourseSettings";
import { useState } from "react";
import CoursePricing from "../../components/courses/CoursePricing";
import CourseCertificate from "../../components/courses/CourseCertificate";
import CourseSeo from "../../components/courses/CourseSeo";
import { normalizeCourse } from "../../helpers/normalize-course";

export default function Course({ course }) {
  console.log(course);
  const [activeTab, setActiveTab] = useState("settings");

  return (
    <Layout>
      <header className="mb-4">
        <h1 className="font-bold text-3xl">{course.title}</h1>
      </header>

      <nav>
        <ul className="flex items-center gap-4 border-b pb-2 mb-4">
          <li>
            <button onClick={() => setActiveTab("settings")}>Settings</button>
          </li>
          <li>
            <button onClick={() => setActiveTab("pricing")}>Pricing</button>
          </li>
          <li>
            <button onClick={() => setActiveTab("certificate")}>
              Certificate
            </button>
          </li>
          <li>
            <button onClick={() => setActiveTab("seo")}>SEO</button>
          </li>
        </ul>
      </nav>

      {activeTab === "settings" && <CourseSettings course={course} />}
      {activeTab === "pricing" && <CoursePricing course={course} />}
      {activeTab === "certificate" && <CourseCertificate course={course} />}
      {activeTab === "seo" && <CourseSeo course={course} />}
    </Layout>
  );
}

export async function getServerSideProps(props) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/courses/${props.params.slug}`
  );
  const course = await res.json();

  if (course) {
    return {
      props: {
        course: normalizeCourse(course),
      },
    };
  }

  return {
    props: {
      notFound: true,
    },
  };
}
