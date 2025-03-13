import {motion} from "framer-motion";
import CustomTitles from "./CustomTitles";
import {Services} from "./data/config";

export default function ServicesSection() {
  return (
    <section className="relative mt-40 id='services">
      <CustomTitles title="What i Offer ?" />
      <section className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 p-16 mt-32">
        <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-[var(--color-primary)] opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>
        <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-[var(--color-primary)] opacity-20 blur-[100px] right-10 bottom-0 hidden md:block"></header>
        {Services.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8, ease: "easeOut", delay: index * 0.5}}
            viewport={{once: true, amount: 0.5}}
            className="relative w-full h-[350px] p-5 grid place-items-center overflow-hidden rounded-[20px] shadow-lg">
            <section className="absolute w-[95%] h-[95%] bg-black rounded-[20px] z-10 text-center text-white ">
              <header className="border border-primary bg-[#ffffff29] rounded-xl p-3 mb-6 min-h-full min-w-full flex items-center">
                <section className="mt-4 space-y-4 px-2">
                  <h2 className="uppercase text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                    {item.title}
                  </h2>
                  <p className="md:text-lg text-white opacity-80">
                    {item.description}
                  </p>
                </section>
              </header>
            </section>
            <section className="absolute w-full h-[105%] bg-gradient-to-br from-primary to-secondary animate-spin-slow  spin-slow opacity-60"></section>
          </motion.article>
        ))}
      </section>
    </section>
  );
}
