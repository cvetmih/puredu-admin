import Layout from "../../components/layout/Layout";
import Link from "next/link";

export default function Courses({courses}) {
    return (
        <Layout>
            <header className="mb-4 pb-2 border-b">
                <h1 className="font-bold text-3xl">Courses</h1>
            </header>
            <ul>
                {courses.map((item, key) => {
                    return (
                        <li key={`Course List: ${key}`}>
                            <Link href={`/courses/${item.slug}`}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </Layout>
    )
}


export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/courses`);
    const courses = await res.json();

    return {props: {courses}}
}