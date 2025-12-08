import firstCard from "../../assets/images/1stcard.jpg";
import secondCard from "../../assets/images/2ndcard.jpg";
import thirdCard from "../../assets/images/3rdcard.jpg";
// import car from "../../assets/images/car.png";
export const data = [
  {
    animation: "fade-right",
    icon: "fa-solid fa-industry",
    side: "right",
    title: "Maufacturing Engineering Apprentice (DCI and HR engine for Mercedes)",
    date: "September 2024– Present",
    location: "Renault Ampere Cl´eon Factory",
    img: firstCard,
    desc: "• Set up of a Web Application for Managing Machine Tool Spare Parts Inventories with 1500 + references  ",
    content:<p style={{width:'250px'}}>• Lead daily quality and maintenance follow-up meetings using QRQC, QRR, PMP, and PMA methodologies. <br />
      • Digitalize the production line output using cameras and laser sensors for automated quality control, aiming to reduce human error.
      </p>},
  {
    animation: "fade-left",
    icon: "fa-solid fa-plane",
    side: "left",
    title: "Mechanical Designer (Stellantis Ducato/Boxer BEV Project)",
    date: "August 2022– July 2023",
    location: "Segula Technologies",
    img: secondCard,
    desc: "• Design of BIW Sheet Metal Parts with CATIA from reference surfaces (96 deliverables: Doors, Hoods, Crossmembers,Wing lining, Trunk rebate, Front face).",
    content:<p style={{width:'250px'}}>• Preparation of Supports and participation in Weekly Reporting Meetings in English with Stellantis Clients and Suppliers.<br />
      • Product lifecycle management under PLM ENOVIA V6 DASSAULT SYSTEMES ( 100+ Requests Processed : Pdef, Prea, Pa, CX, ECR, ECO, BOM COM Request)
      </p>
  },
  {
    animation: "fade-right",
    icon: "fa-solid fa-car",
    side: "right",
    title: "Engineering Intern",
    date: "April 2022– June 2022",
    location: "Safrane Nacelles",
    img: thirdCard,
    desc: "• Improvement of the MRO (Maintenance, Repair, Overhaul) time of the Airbus A350 thrust reverser in the Moving Linephase.",
    content:<p style={{width:'250px'}}>Optimized the MRO cycle time of the Airbus A350 thrust reverser in the Moving Line phase 
    by analyzing operational constraints and implementing process improvements. Achieved 
    measurable reductions in turnaround time while ensuring full compliance with safety and 
    airworthiness standards.</p>
  },
  // {
  //   animation: "fade-left",
  //   icon: "fa-solid fa-car",
  //   side: "left",
  //   title: "Tesla - Product Design Integration Intern",
  //   date: "Mar - Sept 2020",
  //   location: "Fremont, CA",
  //   img: car,
  //   desc: "Directly involved in product design cycle for Model S/X Refresh for solving packaging and integration issues.",
  // },
];

// import appleIphones from "../../assets/images/iphoness.png";
// import gear from "../../assets/images/gear.png";
// import injection from "../../assets/images/injection.png";
// import moon from "../../assets/images/moon.png";

// export const project = [
//   { img: appleIphones, title: "Apple InternShip", other: "InternShip" },
//   { img: moon, title: "SpaceX InternShip", other: "InternShip" },
//   { img: gear, title: "FASE Planetry Gear Box", other: "Student Team" },
//   { img: injection, title: "Plastic Injection Mold", other: "Personal" },
// ];

import apple_logo from "../../assets/images/apple-logo.png";
import google_logo from "../../assets/images/google-logo.png";
import x_logo from "../../assets/images/x-logo.png";
import leave_logo from "../../assets/images/leave-logo.png";
import tesla_logo from "../../assets/images/tesla-logo.png";
import q_logo from "../../assets/images/Q-logo.png";


export const logos_images = [
  { image: apple_logo },
  { image: google_logo },
  { image: x_logo },
  { image: leave_logo },
  { image: tesla_logo },
  { image: q_logo },
];

export const socialData = [
  {
    title: "Facebook",
    link: "https://facebook.com",
    icon: (<svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg" className="svg">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
</svg>),},
  {
    title: "Twitter",
    link: "https://twitter.com",
    icon: (<svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
</svg>),},
  {
    title: "Instagram",
    link: "https://instagram.com",
    icon: ( <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
      </svg> ),},];




import portfolio from '../../assets/images/portfolio.jpg'
import blog from '../../assets/images/blog-plateform.jpg'
import manufacturing from '../../assets/images/manufacturing.jpg'
import app from '../../assets/images/app.jpg'
import automation from '../../assets/images/automation.jpg'
import dashboard from '../../assets/images/dashboard.jpg'
import internship from '../../assets/images/internship.jpg'
import tool from '../../assets/images/tool.jpg'

export const projects = [
  // ----- Internships (3) -----
  {
    id: 1,
    img: automation,
    title: "Industrial Automation Internship",
    category: "Internship",
    desc: "Worked on PLC programming, sensor integration, and improving automated production workflows."
  },
  {
    id: 2,
    img: manufacturing,
    title: "Manufacturing Process Optimization Internship",
    category: "Internship",
    desc: "Focused on reducing cycle time, improving line balancing, and optimizing overall process efficiency."
  },
  {
    id: 3,
    img: internship,
    title: "Quality Control & Inspection Internship",
    category: "Internship",
    desc: "Performed quality checks, defect analysis, and assisted in ensuring compliance with industry standards."
  },

  // ----- Personal (5) -----
  {
    id: 4,
    img: portfolio,
    title: "Industrial Portfolio & Resume Website",
    category: "Personal",
    desc: "A professional portfolio website showcasing industrial engineering projects, skills, and experience."
  },
  {
    id: 5,
    img: blog,
    title: "Lean Manufacturing Blog Platform",
    category: "Personal",
    desc: "A platform sharing concepts on Lean, Kaizen, 5S, and industrial improvement methods."
  },
  {
    id: 6,
    img: tool,
    title: "Maintenance & Cost Management Tool",
    category: "Personal",
    desc: "A simple system to log maintenance activities, track machine downtime, and manage operational costs."
  },
  {
    id: 7,
    img: dashboard,
    title: "Industrial Production Team Dashboard",
    category: "Team",
    desc: "A shared team dashboard for monitoring production KPIs and daily manufacturing progress."
  },
  {
    id: 8,
    img: app,
    title: "Industrial Design & Process Improvement Team App",
    category: "Team",
    desc: "A collaboration app for engineering teams to manage process improvements and workflow tasks."
  },
];
