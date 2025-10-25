// import LogoLoop from '../../components/loop-logo/loop-logo';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiDocker } from 'react-icons/si';
import { FaAws } from "react-icons/fa";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org/doc/" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com/" },
  { node: <FaAws />, title: "Docker", href: "https://aws.amazon.com/" },
];

export function Footer() {
  return (
    <div className="fixed bottom-0 left-0 w-[100%]">
      {/* <LogoLoop */}
      {/*   className='text-white' */}
      {/*   logos={techLogos} */}
      {/*   speed={120} */}
      {/*   direction="left" */}
      {/*   logoHeight={48} */}
      {/*   gap={40} */}
      {/*   pauseOnHover */}
      {/*   scaleOnHover */}
      {/*   ariaLabel="Technology partners" */}
      {/* /> */}
    </div>
  );
}
