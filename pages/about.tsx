import type { NextPage } from 'next'
import Link from 'next/link'

const About: NextPage = () => {
    return (
        <div>
            <h1>About Alcoholy</h1>
            <p>Get insight in your blood alcohol concentration by checking drinks in and out.</p>
            <Link href="/">Home</Link>
        </div>
    )
}

export default About
