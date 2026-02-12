import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

const AppointmentForm = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#f7f4f2]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl sm:rounded-[40px] shadow-2xl p-6 sm:p-10 md:p-14"
      >

        {/* Heading */}
        <motion.div variants={item} className="text-center mb-8 sm:mb-12">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl sm:text-4xl md:text-5xl text-gray-900"
          >
            Book an Appointment
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-600 text-base sm:text-lg">
            Schedule your personalized luxury experience
          </p>
        </motion.div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

          <motion.input
            variants={item}
            type="text"
            placeholder="Full Name"
            className="input-style w-full"
          />

          <motion.input
            variants={item}
            type="email"
            placeholder="Email Address"
            className="input-style w-full"
          />

          <motion.input
            variants={item}
            type="tel"
            placeholder="Phone Number"
            className="input-style w-full"
          />

          <motion.select
            variants={item}
            className="input-style w-full"
          >
            <option>Select Service</option>
            <option>Body Treatment</option>
            <option>Massage Therapy</option>
            <option>Spa Package</option>
            <option>Couples Treatment</option>
          </motion.select>

          <motion.input
            variants={item}
            type="date"
            className="input-style w-full"
          />

          <motion.input
            variants={item}
            type="time"
            className="input-style w-full"
          />

          <motion.textarea
            variants={item}
            placeholder="Additional Notes"
            rows="4"
            className="input-style md:col-span-2 resize-none w-full"
          />

          {/* Button */}
          <motion.div
            variants={item}
            className="md:col-span-2 text-center"
          >
            <button
              type="submit"
              className="
                mt-4 sm:mt-6
                w-full sm:w-auto
                px-10 sm:px-14 py-3 sm:py-4
                rounded-full
                bg-[rgb(90,14,36)]
                text-white
                tracking-[0.2em] sm:tracking-[0.3em]
                uppercase
                text-xs sm:text-sm
                shadow-xl
                hover:shadow-2xl
                transition-all duration-300
              "
            >
              Confirm Appointment
            </button>
          </motion.div>

        </form>
      </motion.div>
    </section>
  );
};

export default AppointmentForm;
