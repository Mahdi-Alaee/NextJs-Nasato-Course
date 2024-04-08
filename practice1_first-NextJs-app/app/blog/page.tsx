import Link from "next/link";
import Heading from "../../components/Heading";

export default function BlogPage(){
    return (
        <>
            <Heading>this is Blog page</Heading>
            <p>NextJs is a react-based framework for better web developing</p>
            <Link href='/blog/1' >go to blog 1</Link>
        </>
    )
}