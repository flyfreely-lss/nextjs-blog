import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import Layout from "../../components/layout"

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <Script 
                src="https://balkan.app/js/familytree.js" 
                strategy="lazyOnload" 
                onLoad={ () => {
                    console.log(`script loaded correctly, window.FB has been populated`)
                } } 
            />
            <h1>First Post</h1>
            <h2>
                <Link href="/">嗷嗷 Back to home</Link>
            </h2>
        </Layout>
    )
}