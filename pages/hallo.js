import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Script from 'next/script'

export default function Hallo({ allPostsData }) {
    return (
        <>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <div id="msg"/>
            </section>

            <Script
                id="show-message"
                dangerouslySetInnerHTML={{
                    __html: `
                        var showText = function (target, message, index, interval) {   
                        if (index < message.length) {
                            document.getElementById(target).append(message[index++]);
                            setTimeout(function () { showText(target, message, index, interval); }, interval);
                        }
                    }
                    showText("msg", "Hallo Schatzi. Ich liebe Dich <3", 0, 500);`,
                }}
            />
        </>
    )
}
