import { InlineCode } from "@/once-ui/components";
import Link from "next/link";

const person = {
  firstName: "Josh",
  lastName: "Taylor",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Firmware Engineer",
  avatar: "/images/avatar.jpg",
  location: "California", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/thejoshtaylor",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/authenticjoshtaylor",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:theofficialjoshuataylor@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Website`,
  description: `My personal website, telling my life story and showcasing my projects`,
  headline: <>Engineer -{">"} Build</>,
  subline: (
    <>
      I'm Josh, a firmware engineer and robot builder.
      <br />I craft helpful systems with care fueled by coffee.
    </>
  ),
};

const about = {
  label: "About",
  title: "About Me",
  description: `Meet ${person.firstName} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <p>
        I'm passionate about <Link href={`#coffee`}>coffee</Link>,{" "}
        <Link href={`/gallery`}>astrophotography</Link>,{" "}
        <Link href={`#outdoors`}>sports</Link>, and{" "}
        <Link href={`/work`}>engineering</Link>. One of my favorite things to do
        is build something useful while sipping on a well-crafted latte.
      </p>
    ),
  },
  coffee: {
    display: true, // set to false to hide this section
    title: "Coffee Saga",
    stages: [
      {
        name: "The Beginning",
        timeframe: "Winter of 2022",
        description: (
          <>
            Before this time I had never enjoyed coffee. I had tried it a few
            times as a teenager and my un-refined tastebuds rejected it. Now
            that I was in college, I needed coffee to stay awake during my late
            night homework sessions.
          </>
        ),
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        name: "Coffee Awakening",
        timeframe: "Spring of 2022",
        description: (
          <>
            I started having coffee about every other day. I bought myself a
            Keurig machine and a few boxes of K-cups and was experimenting with
            different flavors and methods of brewing coffee. My distain for
            instant coffee was immediate.
          </>
        ),
        images: [],
      },
      {
        name: "My First Espresso",
        timeframe: "Summer of 2022",
        description: (
          <>
            One of my friends had a Breville espresso machine and made me a
            latte. I was hooked. That summer I purchased my own machine and
            started making lattes pretty frequently alongside my daily cup of
            Keurig.
          </>
        ),
        images: [],
      },
      {
        name: "The Coffee Connoisseur",
        timeframe: "Now Till Forever",
        description: (
          <>
            Every day I have a latte in the morning and I'm dialing in the
            flavor. Experimentation with different beans, grind sizes, and milk
            brands is a daily adventure. I'm becoming move of a coffee snob, but
            this drives me to make better lattes. I will continue to refine my
            latte process as well as experiment with different additives to make
            different flavors and maybe even different espresso drinks.
          </>
        ),
        images: [],
      },
    ],
  },
  outdoors: {
    display: true, // set to false to hide this section
    title: "Outdoors & Recreation",
    subtitle:
      "Lakes, mountains, valleys, rocks, and trees. (Pictures coming soon!)",
    activities: [
      {
        name: "Hiking",
        description: (
          <>Anywhere there's a trail. Even if it's covered in snow!</>
        ),
      },
      {
        name: "Rock Climbing",
        description: (
          <>
            My hands have gotten soft lately, but I always appreciate a good boulder.
          </>
        ),
      },
      {
        name: "Running",
        description: <>The best way to get fresh air in my lungs.</>,
      },
      {
        name: "Ultimate Frisbee",
        description: (
          <>I almost joined a team in college. Now I just play pickup!</>
        ),
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const career = {
  label: "Career",
  title: "My Career",
  description: `Hire ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Josh is a California-based firmware engineer with a passion for
        transforming complex challenges into simple, elegant design solutions.
        His work spans digital interfaces, interactive experiences, and the
        convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Diamond Engineering",
        timeframe: "Summer of 2023",
        role: "Software Engineer II | Senior CNC Machinist",
        achievements: [
          <>
            Developed new user interface based on Angular.js, increasing 3D
            antenna visualization performance by 100%.
          </>,
          <>
            Redesigned firmware for motion control system, cutting drive
            component costs by 40% overall.
          </>,
          <>
            Spearheaded the integration of modern software architecture,
            resulting in 50% faster load times for data collection and
            processing.
          </>,
          <>
            Led a team of 2 novice CNC machinists to develop their skills and
            reduce broken tools by 50% in 2 months.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Winworks Software",
        timeframe: "Summer of 2022",
        role: "Software Developer I",
        achievements: [
          <>
            Developed a third-party integration and onboarding system,
            increasing user efficiency by 30%.
          </>,
          <>
            Improved database polling algorithm by implementing lazy loading,
            resulting in 50% faster load times.
          </>,
        ],
        images: [],
      },
      {
        company: "Diamond Engineering",
        timeframe: "2019 - 2021",
        role: "System Designer | CNC Machinist",
        achievements: [
          <>
            Designed, modeled, and assembled a portable antenna positioner for a
            government agency.
          </>,
          <>
            Took ownership of the custom systems, freeing up other team members
            and increasing total company output by 20%.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "University of California, Los Angeles",
        description: (
          <>Bachelor's of Science, Computer Science and Engineering.</>
        ),
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const portfolio = {
  label: "Portfolio",
  title: `${person.name}'s Portfolio`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/stars-1.mp4",
      alt: "video",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/moon-track-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/sunset-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/stars-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/snail-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/stars-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/meadow-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/sunset-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/stars-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/sunrise-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/moon-track-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/sunrise-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  career,
  blog,
  portfolio,
  gallery,
};
