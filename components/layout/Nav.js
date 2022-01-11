import Link from "next/link";

const links = [
    {
        href: '/',
        label: 'Dashboard'
    },
    {
        href: '/courses',
        label: 'Courses'
    },
    {
        href: '/',
        label: 'Lessons'
    },
    {
        href: '/orders',
        label: 'Orders'
    },
    {
        href: '/',
        label: 'Users'
    },
    {
        href: '/',
        label: 'Discounts'
    },
    {
        href: '/',
        label: 'Settings'
    },
];

export default function Nav(props) {
    return (
        <nav {...props}>
            <ul>
                {links.map((item, key) => {
                    return (
                        <li key={`Nav Link: ${key}`}>
                            <Link href={item.href}>
                                <a>{item.label}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}