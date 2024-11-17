import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../Components/Button";

const SubscribeForm = () => {
  const [subscribe, setSubscribe] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full md:w-[500px] bg-white p-2 flex md:flex-row items-center mt-8 rounded-lg"
      >
        <input
          className="w-full p-2 outline-none active:border-none text-gray-900"
          type="text"
          placeholder="Enter your email address"
          value={subscribe}
          onChange={(e) => setSubscribe(e.target.value)}
        />
        <Button
          type="submit"
          className="bg-[#1E90FF] rounded-lg p-2 hover:bg-gray-500 duration-500 text-[white]"
        >
          Subscribe
        </Button>
      </motion.div>
    </form>
  );
};

export default SubscribeForm;
