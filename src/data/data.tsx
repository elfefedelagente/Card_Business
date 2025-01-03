import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/egresados.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'Sobre mi',
  Contact: 'Contacto',
  Portfolio: 'Portafolio',
  Resume: 'Educación',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Soy Cabaña Federico.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Mi pasión por la tecnología y el desarrollo de software me ha llevado a explorar diversas herramientas y lenguajes de programación, ampliando mis habilidades para convertirme en un profesional en el área
        Aunque actualmente no estoy trabajando, he tenido la oportunidad de implementar mis conocimientos en un proyecto académico destacado de la materia Desarrollo de Software. Este proyecto se centró en una  
        <strong className="text-stone-100"> Red de Monitoreo Ambiental</strong>, 
         utilizando tecnologías modernas como Python, PostgreSQL, TypeScript, FastAPI y React, junto con herramientas complementarias como <strong className=''>MQTT</strong>
        ,<strong className='text-stone-100'> SQLAlchemy</strong> y otras librerías.        
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Gracias a esta experiencia, fortalecí mi capacidad para trabajar en equipo siguiendo una 
        <strong className='text-stone-100'>metodología ágil</strong>,
         resolver problemas y desarrollar aplicaciones funcionales y escalables. Estoy en constante aprendizaje y siempre busco nuevas oportunidades para crecer profesionalmente y aportar valor en el ámbito del desarrollo de software.

      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Soy estudiante de Analista Programador Universitario y de la licenciatura en sistemas.
   Me gusta el mundo del desarrollo de software y disfruto trabajando con tecnologías como Python, JavaScript, React, FastAPI, PostgreSQL y Java. Siempre estoy buscando nuevas oportunidades para aprender, crecer y aportar soluciones innovadoras.`,
  aboutItems: [
    {label: 'Ubicación', text: 'Trelew, Chubut', Icon: MapIcon},
    {label: 'Edad', text: '24', Icon: CalendarIcon},
    {label: 'Nacionalidad', text: 'Argentina', Icon: FlagIcon},
    {label: 'Intereses', text: 'Tocar la guitarra, Andar en moto, video juegos, jugar al fútbol', Icon: SparklesIcon},
    {label: 'Estudios', text: 'UNPSJB - Sede Trelew', Icon: AcademicCapIcon},
    {label: 'Empleos', text: 'No tengo actualmente trabajo relacionado con el desarrollo de software.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Lenguajes',
    skills: [
      {
        name: 'Ingles',
        level: 6.5,
      },
      {
        name: 'Español',
        level: 10,
      },
    ],
  },
  {
    name: 'Tecnologías Frontend',
    skills: [
      {
        name: 'React',
        level: 6.5,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'HTML',
        level: 6,
      },
      {
        name: 'CSS',
        level: 5,
      },
    ],
  },
  {
    name: 'Tecnologías Backend',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'python',
        level: 8.9,
      },
      {
        name: 'Golang',
        level: 4,
      },
      {
        name: 'Django',
        level: 6.7,
      },
      {
        name: 'FastAPI',
        level: 9.3,
      },
      {
        name: 'Java',
        level: 6,
      },
    ],
  },
  {
    name: 'Bases de datos',
    skills: [
      {
        name: 'Relacionales',
        level: 9,
      },
      {
        name: 'No relacionales',
        level: 2,
      },
    ],
  },
  {
    name: 'Otras Herramientas y/o lenguajes de programación',
    skills: [
      {
        name: 'Docker',
        level: 6.4,
      },
      {
        name: 'Poetry',
        level: 5.7,
      },
      {
        name: 'C',
        level: 8,
      },
      {
        name: 'C#',
        level: 8.7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Panel ingreso de usuario',
    description: 'Panel simple para ingreso de usuario admin/investigador/default',
    image: porfolioImage1,
  },
  {
    title: 'Registro de usuario',
    description: 'Registro de un usuario, cuales roles son dados por el admin',
    image: porfolioImage2,
  },
  {
    title: 'Invalidación de usuario',
    description: 'Visibilidad de información acotada para roles de usuario',
    image: porfolioImage3,
  },
  {
    title: 'Menu principal RMA',
    description: 'Vista para usuarios simples',
    image: porfolioImage4,
  },
  {
    title: 'Panel ultimas mediciones',
    description: 'El panel corresponde al/los usuarios admin',
    image: porfolioImage5,
  },
  {
    title: 'Historial de mediciones de nodos',
    description: 'Panel para visualizar nodos por filtros',
    image: porfolioImage6,
  },
  {
    title: 'Tablas de nodos',
    description: 'Información básica de nodos',
    image: porfolioImage7,
  },
  {
    title: 'Configuración perfil usuario',
    description: 'Información personal de usuario',
    image: porfolioImage8,
  },
  {
    title: 'Visualización de nodos',
    description: 'Visualización, eliminación y modificación de nodos',
    image: porfolioImage9,
  },
  {
    title: 'Modificación de nodos',
    description: 'Ingreso de datos básicos para modificación de datos',
    image: porfolioImage10,
  },
  {
    title: 'Panel creación nodo',
    description: 'Disponible solamente para usuarios admin',
    image: porfolioImage11,
  },
];

export const education: TimelineItem[] = [
  {
    date: 'Marzo 2012',
    location: '714 Julio Cortázar',
    title: 'Bachillerato en Economía y administración',
    content: <p>Mi experiencia en la secundaria no fue de la mas deseada, puede aprender conceptos como la macroeconomia, PYMEs, IVA, etc.. 
      al terminar el secundario quise adentrarme al mundo de la tecnología, un proceso dificil pero no imposible.
    </p>,
  },
  {
    date: 'Marzo 2017',
    location: 'Universidad Nacional de la Patagonia San Juan Bosco',
    title: (
      <>
       APU (Analista Programador Universitario)
        <br />
        <br />
        Licenciatura en sistemas (Orientación, planificación, gestión y control de proyectos informáticos)
      </>
    ),
    content: <p>  Mi paso por la universidad me permitió adquirir conocimientos sólidos en programación, 
    diseño de sistemas y gestión de proyectos informáticos. Aprendí a como enfrentar problemas de bajo y alto nivel 
    con soluciones estructuradas, y desarrollé habilidades para la planificación y control de proyectos.</p>,
  },
];

/**
 * Work
 */
export const experience: TimelineItem[] = [
  {
    date: 'Agosto 2024 - Noviembre 2024',
    location: 'Chubut - Trelew',
    title: 'Proyecto académico',
    content: (
      <p>
        Tuve la oportunidad de participar en un proyecto de software que consistia en una red de monitoreo de caudales y turbiedad en
        cursos efímeros principales de la cuenca inferior del Río Chubut.
        <br />
        Dicha red se compone de un sistema de monitoreo, comunicación y visualización de los parámetros hidroambientales en tiempo real. 
        Nuestro objetivo fue montar un servidor web para obtener esos datos y realizar la visualización de estos para diferentes entes o usuarios.
      </p>
    ),
  },
];

/**
 * Contact section
*/
export const contact: ContactSection = {
  headerText: 'No dudes en contactarme si lo necesitas...',
  description: 'Podes contactarme por redes sociales si lo necesitas o con un mensaje de correo',
  items: [
    {
      type: ContactType.Email,
      text: 'federicogabriel12@hotmail.com',
      href: 'federicogabriel12@hotmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Chubut - Trelew',
      href: 'https://www.google.ca/maps/place/Trelew,+Chubut/@-43.2632565,-65.3542494,13z/data=!3m1!4b1!4m6!3m5!1s0xbe0144b6cf6769bb:0x9cbd6c76af132e0d!8m2!3d-43.2493016!4d-65.3076351!16zL20vMDM3Nmw4?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D',
    },
  ],
};

/**
 * Social items
*/
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/elfefedelagente'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/federico-caba%C3%B1a-17354822a/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/gabycabana07/'},
];
