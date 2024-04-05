import Link from "next/link";

export default function BlogPage(){
    return (
        <>
            <h1>this is Blog page</h1>
            <p>NextJs is a react-based framework for better web developing</p>
            <Link href='/blog/1' >go to blog 1</Link>
        </>
    )
}