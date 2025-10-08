import { motion } from "framer-motion"
import { DiMsqlServer } from "react-icons/di"
import { SiDbeaver, SiDocker, SiElixir, SiExpress, SiFlask, SiGin, SiGit, SiGo, SiGooglecloud, SiInformatica, SiJavascript, SiJenkins, SiLinux, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiTypeorm, SiTypescript, SiVite } from "react-icons/si"
import { VscAzure } from "react-icons/vsc"

const iconVariants = (duration) => ({
  initial: { y: -7.5 },
  animate: {
    y: [7.5, -7.5],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-3 text-5xl"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-3"
        >
          <SiJavascript />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-3"
        >
          <SiTypescript />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-3"
        >
          <SiReact />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-3"
        >
          <SiVite />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-3"
        >
          <SiNextdotjs />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-3"
        >
          <SiNodedotjs />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-3"
        >
          <SiExpress />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-3"
        >
          <SiNestjs />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-3"
        >
          <SiGo />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="p-3"
        >
          <SiGin />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-3"
        >
          <SiPython />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-3"
        >
          <SiFlask />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-3"
        >
          <SiElixir />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-3"
        >
          <SiDbeaver />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-3"
        >
          <DiMsqlServer />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-3"
        >
          <SiPostgresql />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-3"
        >
          <SiMysql />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-3"
        >
          <SiTypeorm />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-3"
        >
          <SiMongodb />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-3"
        >
          <SiInformatica />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="p-3"
        >
          <SiLinux />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-3"
        >
          <SiDocker />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-3"
        >
          <SiGit />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-3"
        >
          <VscAzure />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-3"
        >
          <SiGooglecloud />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3.5)}
          className="p-3"
        >
          <SiJenkins />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies