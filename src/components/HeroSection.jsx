import {motion} from "framer-motion";
import {variants} from "./data/config";

function HeroSection() {
  return (
    <section className="relative w-full">
      <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-[var(--color-primary)] opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>
      <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-[var(--color-primary)] opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"></header>
      <section className="w-full px-5 sm:px-8 md:px-12 lg:px-0 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
        <article className="grid lg:grid-cols-2 gap-10 xl:gap-6 relative pt-23 lg:max-w-none max-w-2xl md:max-w-3xl max-auto">
          <section className="ml-0 md:ml-12">
            <header className="text-center lg:text-left">
              <h1 className="pt-4 text-white font-bold text-4xl lg:text-6xl md:text-5xl">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                  Tejas
                </span>
              </h1>
            </header>
            <p className="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-[370px] md:max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              totam consequuntur veniam voluptatem. Perferendis officiis
              expedita, aliquid cum similique neque tempore aspernatur eveniet
              eaque qui.
            </p>
            <section className="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:max-auto lg:max-0">
              <figure className="text-white w-56">
                <button>Hire Me</button>
              </figure>
              <motion.button
                whileHover={{scale: 1.1}}
                className="flex items-center px-4 py-2 bg-transparent text-primary border border-primary rounded-3xl">
                <svg viewBox="0 0 24 24" width={40} height={40}>
                  <motion.path
                    d="M12 15.586l4.95-4.95-1.414-1.414L13 12.172V4h-2v8.172L8.464 9.636 7.05 11.05 12 15.586zm-7 2h14v2H5v-2z"
                    fill="#FFC107"
                    stroke="#FFC107"
                    strokeWidth={0.5}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                  />
                </svg>
                <span>Download Resume</span>
              </motion.button>
            </section>
          </section>
        </article>
      </section>
    </section>
  );
}

export default HeroSection;
