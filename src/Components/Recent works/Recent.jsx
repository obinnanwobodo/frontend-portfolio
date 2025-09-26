import React from 'react'
import styles from './Recent.module.css'
import admindash from '../../../public/projects/admindash.png'
import billing from '../../../public/projects/biling.png'
import clientport from '../../../public/projects/clientport.png'
import crescent from '../../../public/projects/crescent.png'
import chuks from '../../../public/projects/chuks.png'
import Image from 'next/image'
import { FaExternalLinkAlt } from "react-icons/fa";
import SectionWrapper from '../sectionwrapper/SectionWrapper'





const array = [

    {
        id: 1,

        imgsrc: admindash,
        screenshotType: "desktop",
        projectname: 'SaaS Admin Dashboard',
        projectniche: '(Frontend)',
        description: 'Startups need dashboards that simplify data and speed up decision-making. This Admin SaaS Dashboard showcases my ability to design clean, scalable, and intuitive admin panels.',
        tools: [
            'React', 'Next.js', 'JavaScript', 'CSS'
        ],
        viewproject: 'https://saas-admin-dashboard-silk.vercel.app/'

    },



    {
        id: 2,

        imgsrc: billing,
        screenshotType: "desktop",
        projectname: 'Billing & Subscription payment Page',
        projectniche: '(Frontend)',
        description: 'Many customers leave or abandon payments due to poor design or slow loading subscription pages. I created a subscription billing interface for SaaS and B2B users that makes managing plans, payments, and invoices simple and stress-free.',
        tools: [
            'React', 'Next.js', 'JavaScript', 'CSS'
        ],
        viewproject: 'https://subscription-landingpage.vercel.app/'

    },



    {
        id: 3,

        imgsrc: clientport,
        screenshotType: "desktop",
        projectname: 'Client Portal',
        projectniche: '(Frontend)',
        description: 'Clients often struggle to track projects, view deliverables, or assess invoices in one place, leading to confusion and delays. I designed Client Portal to give B2B clients a clear, user-friendly dashboard where they can monitor project progress, download reports, and manage payments, making collaborations simple and transparent.',
        tools: [
            'React', 'Next.js', 'JavaScript', 'CSS'
        ],
        viewproject: 'https://clientportal-b2b.vercel.app/'

    },



    {
        id: 4,

        imgsrc: crescent,
        screenshotType: "mobile",
        projectname: 'Crescent Solutions',
        projectniche: '(Frontend)',
        description: 'Many B2B businesses struggle to implement strategies that drive measurable growth, streamline operations, and improve customer experience. I designed Crescent Solutions consulting website to clearly showcase B2B services, case studies, and results, helping businesses understand their value, build trust, and engage clients efficiently.',
        tools: [
            'React', 'Next.js', 'JavaScript', 'CSS'
        ],
        viewproject: 'https://cescent-b2b.vercel.app/'

    },



    {
        id: 5,

        imgsrc: chuks,
        screenshotType: "desktop",
        projectname: 'Chuks Interior Decor Enterprises',
        projectniche: '(Frontend)',
        description: 'Chuks Interior Decor Enterprises is a Lagos-based furniture brand. I designed their website as a custom e-commerce solution that showcases products, organizes categories, and enables purchase inquiries through WhatsApp and contact forms, as requested by the client. While this project used an inquiry-based flow instead of add-to-cart checkout, it demonstrates my ability to build flexible \ne-commerce solutions tailored to client needs — from simple inquiry systems to full payment integrations.',
        tools: [
            'React', 'Next.js', 'JavaScript', 'CSS'
        ],
        viewproject: 'https://www.chuksinteriorenterprise.com.ng/'
    },









]














const Recent = () => {
    return (
        <div className={styles.genrec}>

            <div className={styles.gencontent}>

                <div className={styles.rt}>
                    <h2 className={styles.rec}>Recent Works</h2>
                    <p className={styles.thep}>The projects below are frontend only and have no backend authentication or connections.</p>
                </div>



                {/* WORKS DIV */}

                <div className={styles.genworksmap}>

                    {array.map((each, index) => (

                        <SectionWrapper key={each.id}>

                            <div className={`${styles.eachofthem}`}>


                                <div className={`${styles.eachcontent}`}>
                                    <div
                                        className={`${styles.images} 
  ${each.screenshotType === "mobile" ? styles.mobileimg : styles.desktopimg} 
  ${each.id === 2 ? styles.specialImg : ''}`}
                                    >
                                        <a href={each.viewproject} target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src={each.imgsrc}
                                                alt={`${each.projectname} preview`}
                                            />
                                        </a>
                                    </div>

                                    <div className={`${styles.alltexts}`}>

                                        <h2 className={`${styles.prona}`}> {each.projectname} </h2>
                                        <h3 className={`${styles.pronic}`}> {each.projectniche} </h3>

                                      <p className={styles.desc}>{each.description}</p>

                                        <div className={`${styles.bldndtools}`}>
                                            <p className={`${styles.build}`}>Built with:</p>

                                            <div className={`${styles.bldndbtn}`}>
                                                <div className={styles.tools}>{each.tools.map((tool, idx) => (<span key={idx} className={styles.toolItem}> {tool} </span>))}</div>
                                                <button> <div className={styles.viewicn}><FaExternalLinkAlt /></div> <a href={each.viewproject}>View project</a> </button>
                                            </div>

                                        </div>

                                    </div>


                                </div>



                            </div>
                        </SectionWrapper>






                    ))}

                </div>




            </div>



        </div>
    )
}

export default Recent