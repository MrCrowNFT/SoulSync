import { motion } from "framer-motion";

const InfoSection = () => {
  return (
    <div className="flex flex-col space-y-16 p-6 bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Section 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10"
      >
        <img
          src=""
          alt="For you 24/7"
          className="w-full md:w-1/2 object-cover"
        />
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            For you 24/7
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            nesciunt corrupti minima sapiente perferendis distinctio numquam
            reprehenderit, dolorem dicta culpa laudantium temporibus fugiat
            alias, quasi veniam dolores eaque laborum odit?
          </p>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10"
      >
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Track your progress
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
            itaque enim voluptates ea? At harum ratione neque voluptatum unde,
            consequatur voluptates tempora veniam necessitatibus, atque cumque
            omnis? Reiciendis, repellat blanditiis?
          </p>
        </div>
        <img
          src="/path-to-your-image2.jpg"
          alt="Track your progress"
          className="w-full md:w-1/2 object-cover"
        />
      </motion.div>

      {/* Section 3 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10"
      >
        <img
          src="/path-to-your-image3.jpg"
          alt="Personalized Recommendations"
          className="w-full md:w-1/2 object-cover"
        />
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Personalized Recommendations
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            nulla vel sit exercitationem iste cum atque saepe cupiditate,
            explicabo eveniet a eos libero, neque esse commodi nobis hic tempore
            eaque!
          </p>
        </div>
      </motion.div>
    </div>
  );
};
export default InfoSection;
