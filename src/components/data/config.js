//HERO SECTION

const animationDuration = 2;
export const variants = {
  initial: {pathLength: 0, strokeOpacity: 1, fillOpacity: 0},
  animate: {
    pathLength: 1,
    strokeOpacity: 0,
    fillOpacity: 1,
    transition: {
      duration: animationDuration,
      ease: "easeInOut",
      strokeOpacity: {
        delay: animationDuration,
      },
      fillOpacity: {
        delay: animationDuration,
      },
    },
  },
};

export const socialIcons = [
  {
    id: 1,
    path: "M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z",
    viewBox: "0 0 24 24",
  },
  {
    id: 2,
    path: "M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z",
    viewBox: "0 0 24 24",
  },
  {
    id: 3,
    path: "M 12 2 C 6.476563 2 2 6.476563 2 12 C 2 17.523438 6.476563 22 12 22 C 17.523438 22 22 17.523438 22 12 C 22 6.476563 17.523438 2 12 2 Z M 12 4 C 16.410156 4 20 7.589844 20 12 C 20 12.46875 19.953125 12.929688 19.875 13.375 C 19.628906 13.320313 19.265625 13.253906 18.84375 13.25 C 18.53125 13.246094 18.140625 13.296875 17.8125 13.34375 C 17.925781 12.996094 18 12.613281 18 12.21875 C 18 11.257813 17.53125 10.363281 16.78125 9.625 C 16.988281 8.855469 17.191406 7.535156 16.65625 7 C 15.074219 7 14.199219 8.128906 14.15625 8.1875 C 13.667969 8.070313 13.164063 8 12.625 8 C 11.933594 8 11.273438 8.125 10.65625 8.3125 L 10.84375 8.15625 C 10.84375 8.15625 9.964844 6.9375 8.34375 6.9375 C 7.777344 7.507813 8.035156 8.953125 8.25 9.6875 C 7.484375 10.417969 7 11.28125 7 12.21875 C 7 12.546875 7.078125 12.859375 7.15625 13.15625 C 6.878906 13.125 5.878906 13.03125 5.46875 13.03125 C 5.105469 13.03125 4.542969 13.117188 4.09375 13.21875 C 4.03125 12.820313 4 12.414063 4 12 C 4 7.589844 7.589844 4 12 4 Z M 5.46875 13.28125 C 5.863281 13.28125 7.0625 13.421875 7.21875 13.4375 C 7.238281 13.492188 7.257813 13.542969 7.28125 13.59375 C 6.851563 13.554688 6.019531 13.496094 5.46875 13.5625 C 5.101563 13.605469 4.632813 13.738281 4.21875 13.84375 C 4.1875 13.71875 4.148438 13.597656 4.125 13.46875 C 4.5625 13.375 5.136719 13.28125 5.46875 13.28125 Z M 18.84375 13.5 C 19.242188 13.503906 19.605469 13.570313 19.84375 13.625 C 19.832031 13.691406 19.796875 13.746094 19.78125 13.8125 C 19.527344 13.753906 19.109375 13.667969 18.625 13.65625 C 18.390625 13.652344 18.015625 13.664063 17.6875 13.6875 C 17.703125 13.65625 17.707031 13.625 17.71875 13.59375 C 18.058594 13.546875 18.492188 13.496094 18.84375 13.5 Z M 6.09375 13.78125 C 6.65625 13.785156 7.183594 13.824219 7.40625 13.84375 C 7.929688 14.820313 8.988281 15.542969 10.625 15.84375 C 10.222656 16.066406 9.863281 16.378906 9.59375 16.75 C 9.359375 16.769531 9.113281 16.78125 8.875 16.78125 C 8.179688 16.78125 7.746094 16.160156 7.375 15.625 C 7 15.089844 6.539063 15.03125 6.28125 15 C 6.019531 14.96875 5.929688 15.117188 6.0625 15.21875 C 6.824219 15.804688 7.097656 16.5 7.40625 17.125 C 7.683594 17.6875 8.265625 18 8.90625 18 L 9.03125 18 C 9.011719 18.109375 9 18.210938 9 18.3125 L 9 19.40625 C 6.691406 18.472656 4.933594 16.5 4.28125 14.0625 C 4.691406 13.960938 5.152344 13.855469 5.5 13.8125 C 5.660156 13.792969 5.863281 13.777344 6.09375 13.78125 Z M 18.625 13.90625 C 19.074219 13.917969 19.472656 14.003906 19.71875 14.0625 C 19.167969 16.132813 17.808594 17.855469 16 18.90625 L 16 18.3125 C 16 17.460938 15.328125 16.367188 14.375 15.84375 C 15.957031 15.554688 16.988281 14.863281 17.53125 13.9375 C 17.910156 13.910156 18.355469 13.898438 18.625 13.90625 Z M 12.5 18 C 12.773438 18 13 18.226563 13 18.5 L 13 19.9375 C 12.671875 19.980469 12.339844 20 12 20 L 12 18.5 C 12 18.226563 12.226563 18 12.5 18 Z M 10.5 19 C 10.773438 19 11 19.226563 11 19.5 L 11 19.9375 C 10.664063 19.894531 10.324219 19.832031 10 19.75 L 10 19.5 C 10 19.226563 10.226563 19 10.5 19 Z M 14.5 19 C 14.742188 19 14.953125 19.175781 15 19.40625 C 14.675781 19.539063 14.34375 19.660156 14 19.75 L 14 19.5 C 14 19.226563 14.226563 19 14.5 19 Z",
    viewBox: "0 0 24 24",
  },
  {
    id: 4,
    path: "M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z",
    viewBox: "0 0 24 24",
  },
];

// NUMBER SECTION
export const Numbers = [
  {id: 1, number: 1200, title: "Projects"},
  {id: 2, number: 300, title: "Years of Experience"},
  {id: 3, number: 500, title: "Open Source Projects"},
  {id: 4, number: 25600, title: "Clients"},
];

//Services Section
export const Services = [
  {
    id: 1,
    title: "Web Development Services",
    description:
      "I provide web development services for all types of businesses. I can help you build a website from scratch or improve your existing website.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "I can help you build a mobile app for your business. I have experience building apps for both iOS and Android.",
  },
  {
    id: 3,
    title: "Cloud Development",
    description:
      "I can help you build and deploy applications on the cloud. I have experience with AWS, Azure, and Google Cloud Platform.",
  },
];

//SKILLS SECTION

export const skills = [
  {
    skills: "React",
    percentage: 80,
    icon: "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000",
  },
  {
    skills: "Node.js",
    percentage: 70,
    icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
  },
  {
    skills: "Tailwindcss",
    percentage: 70,
    icon: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
  },
  {
    skills: "AWS",
    percentage: 70,
    icon: "https://img.icons8.com/?size=100&id=heQa_XKLT3nf&format=png&color=000000",
  },
];

export const experience = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Company A",
    year: "2019 - Present",
    description:
      "I work as a full stack developer at Company A. I am responsible for building and maintaining web applications for the company.",
    icon: "https://img.icons8.com/?size=100&id=9489&format=png&color=000000",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Company B",
    year: "2017 - 2019",
    description:
      "I worked as a frontend developer at Company B. I was responsible for building and maintaining the frontend of the company's website.",
    icon: "https://img.icons8.com/?size=100&id=9489&format=png&color=000000",
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Company C",
    year: "2015 - 2017",
    description:
      "I worked as a software engineer at Company C. I was responsible for building and maintaining software applications for the company.",
    icon: "https://img.icons8.com/?size=100&id=OBf1rJ2rhZs7&format=png&color=000000",
  },
];

export const education = [
  {
    id: 1,
    degree: "Full Stack Developer",
    institution: "Company A",
    year: "2019 - Present",
    details:
      "I work as a full stack developer at Company A. I am responsible for building and maintaining web applications for the company.",
    icon: "https://img.icons8.com/?size=100&id=9489&format=png&color=000000",
  },
  {
    id: 2,
    degree: "Frontend Developer",
    institution: "Company B",
    year: "2017 - 2019",
    details:
      "I worked as a frontend developer at Company B. I was responsible for building and maintaining the frontend of the company's website.",
    icon: "https://img.icons8.com/?size=100&id=9489&format=png&color=000000",
  },
  {
    id: 3,
    degree: "Software Engineer",
    institution: "Company C",
    year: "2015 - 2017",
    details:
      "I worked as a software engineer at Company C. I was responsible for building and maintaining software applications for the company.",
    icon: "https://img.icons8.com/?size=100&id=OBf1rJ2rhZs7&format=png&color=000000",
  },
];

//PROJECT SECTION
export const projects = [
  {
    id: 1,
    title: "Project A",
    description:
      "I built Project A using React and TailwindCSS. It is a web application that allows users to create and manage their projects.",
    image:
      "https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwYXBwbGljYXRpb258ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    title: "Project B",
    description:
      "I built Project B using React and TailwindCSS. It is a web application that allows users to create and manage their projects.",
    image: "https://img.icons8.com/?size=100&id=9489&format=png&color=000000",
  },
  {
    id: 3,
    title: "Project C",
    description:
      "I built Project C using React and TailwindCSS. It is a web application that allows users to create and manage their projects.",
    image: "https://img.icons8.com/?size=100&id=9489&format=png&color=000000",
  },
];

export const contactData = [
  {
    id: 1,
    title: "Email",
    description: "tbj456@gmail.com",
    icon: "https://img.icons8.com/?size=100&id=108806&format=png&color=000000",
  },
  {
    id: 2,
    title: "Phone",
    description: "+91 8237875792",
    icon: "https://img.icons8.com/?size=100&id=ZAh199SDBZjz&format=png&color=000000",
  },
  {
    id: 3,
    title: "Address",
    description: "Chhatrapati Sambhaji Nagar, India",
    icon: "https://img.icons8.com/?size=100&id=113806&format=png&color=000000",
  },
];
