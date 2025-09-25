import React from 'react'
import styles from './Recent.module.css'
import admindash from '../../../public/projects/admindash.png'
import billing from '../../../public/projects/biling.png'
import clientport from '../../../public/projects/clientport.png'
import crescent from '../../../public/projects/crescent.png'
import chuks from '../../../public/projects/chuks.png'
import Image from 'next/image'



const array = [

    {
        id: 1,

        imgsrc: admindash,
         screenshotType: "desktop",
        projectname: 'SaaS Admin Dashboard',
        projectniche: '(Frontend)',
        description: 'Startups need dashboards that simplify data and speed up decision-\nmaking. This Admin SaaS Dashboard showcases my ability to design \nclean, scalable, and intuitive admin panels.',
        tools: [
            'React', 'Next.js', 'JavaScript', 'CSS'
        ],

    },



    {
        id: 2,

        imgsrc: billing,
         screenshotType: "desktop",
        projectname: 'Billing & Subscription payment Page',
        projectniche: '(Frontend)',
        description: 'Many customers leave or abandon payments due to poor design or \nslow loading subscription pages. I created a subscription billing \ninterface for SaaS and B2B users that makes managing plans, \npayments, and invoices simple and stress-free.',
        tools: [
            'React', 'Next.js', 'JavaScript', 'CSS'
        ],

    },



    {
        id: 3,

        imgsrc: clientport,
         screenshotType: "desktop",
        projectname: 'Client Portal',
        projectniche: '(Frontend)',
        description: 'Clients often struggle to track projects, view deliverables, or assess \ninvoices in one place, leading to confusion and delays. I designed \nClient Portal to give B2B clients a clear, user-friendly dashboard \nwhere they can monitor project progress, download reports, and \nmanage payments, making collaborations simple and transparent.',
        tools: [
            'React', 'Next.js', 'JavaScript', 'CSS'
        ],

    },



    {
        id: 4,

        imgsrc: crescent,
         screenshotType: "mobile",
        projectname: 'Crescent Solutions',
        projectniche: '(Frontend)',
        description: 'Many B2B businesses struggle to implement strategies that drive \nmeasurable growth, streamline operations, and improve customer \nexperience. I designed Crescent Solutions consulting website to \nclearly showcase B2B services, case studies, and results, helping \nbusinesses understand their value, build trust, and engage clients \nefficiently.',
        tools: [
            'React', 'Next.js', 'JavaScript', 'CSS'
        ],

    },



    {
        id: 5,

        imgsrc: chuks,
         screenshotType: "desktop",
        projectname: 'Chuks Interior Decor Enterprises',
        projectniche: '(Frontend)',
        description: 'Chuks Interior Decor Enterprises is a Lagos-based furniture brand.\n I designed their website as a custom e-commerce solution that \nshowcases products, organizes categories, and enables purchase inquiries\n through WhatsApp and contact forms, as requested by the client.\n While this project used an inquiry-based flow instead of \nadd-to-cart checkout, it demonstrates my ability to build flexible \ne-commerce solutions tailored to client needs — from simple inquiry systems \nto full payment integrations.',
        tools: [
            'React', 'Next.js', 'JavaScript', 'CSS'
        ],

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

<div key={index} className={`${styles.eachofthem}`}>


<div className={`${styles.eachcontent}`}>

<div className={`${styles.images} ${each.screenshotType === "mobile" ? styles.mobileimg : styles.desktopimg}`}>
    <Image
    src={each.imgsrc}
    alt='project-images'
    />
</div>

<div className={`${styles.alltexts}`}>

<h2  className={`${styles.prona}`}> {each.projectname} </h2>
<h3  className={`${styles.pronic}`}> {each.projectniche} </h3>

<p  className={`${styles.desc}`}> {each.description.split('\n').map((line, idx) => (<React.Fragment key={idx}> {line} <br /> </React.Fragment> ))} </p>

<div  className={`${styles.bldndtools}`}>
<p>Built with:</p>
{each.tools}
</div>

</div>


</div>



</div>






))}

                </div>




            </div>



        </div>
    )
}

export default Recent