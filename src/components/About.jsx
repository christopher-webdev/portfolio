import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Hi, I'm <strong>Christopher Nwokwule</strong>, a **Full-Stack Web Developer** and **Tech Solutions Expert** passionate about building high-performance, scalable applications that solve real-world problems. With expertise in **HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and Python**, I specialize in developing dynamic and responsive web solutions, from front-end interfaces to robust back-end systems.
        <br />
        <br />
        Beyond coding, I help businesses establish a strong online presence through **digital marketing, brand management, and social media growth strategies**. Whether it's **Google My Business registration, targeted advertising, or social media management**, I provide tailored solutions to boost visibility and drive engagement.
        <br />
        <br />
        My goal is to **bridge technology and business**, ensuring that brands not only have cutting-edge digital platforms but also gain the marketing reach they need to succeed. Let's connect and create something impactful!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');


// import React from 'react';
// import { motion } from 'framer-motion';
// import { styles } from '../styles';
// import { services } from '../constants';
// import { fadeIn, textVariant } from '../utils/motion';
// import { SectionWrapper } from '../hoc';

// const ServiceCard = ({ index, title, icon }) => {
//   return (
//     <motion.div
//       variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
//       className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
//         <img src={icon} alt={title} className="w-16 h-16 object-contain" />
//         <h3 className="text-taupe text-[18px] font-bold text-center">
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   );
// };

// const About = () => {
//   return (
//     <div className="-mt-[6rem]">
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview.</h2>
//       </motion.div>

//       <motion.p
//         variants={fadeIn('', '', 0.1, 1)}
//         className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
//         sapiente ipsum dolorum dicta eaque cumque inventore molestias, beatae ea
//         quaerat alias accusamus voluptas autem! Alias odit voluptates in totam
//         vitae dignissimos minus eaque culpa unde tempore dolore aperiam
//         obcaecati voluptatum aliquam corrupti, suscipit accusamus! Odit unde
//         veniam dolorum ipsum doloribus.
//       </motion.p>

//       <div className="mt-20 flex flex-wrap gap-10">
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(About, 'about');
