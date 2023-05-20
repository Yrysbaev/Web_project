import Link from "next/link";

export default function A(props) {
    const {href, className, children} = props
    return (
        <Link href={href ? href : ''}>
            <a className={className}>
                {children}
            </a>
        </Link>
    )
}