import React, { useState } from "react";
import { Data1 } from "../Data/Shirts_data";
import { motion } from "framer-motion";
import { cardsStyle, parentStyle } from "./Collection";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

function Shirts() {
  const [count, setCount] = useState(1);

  const Next = () => {
    if (count >= 1 && count < 3) {
      setCount(count + 1);
    }
  };

  const Prev = () => {
    if (count > 1 && count <= 3) {
      setCount(count - 1);
    }
  };
  console.log(count);

  return (
    <div>
      <h1 className="text-[#cbad89] text-4xl ml-4 mb-8 m-8 block">Shirts</h1>
      <div className={parentStyle}>
        {Data1 &&
          Data1.map((data, id) => {
            return (
              <motion.div className={cardsStyle} key={id}>
                <div className="flex items-center justify-center gap-2">
                  {/* <FaChevronLeft
                    className="text-xl cursor-pointer"
                    onClick={Prev}
                    key={id}
                  /> */}
                  <img
                    src={data.id == id ? "" :  data[`src${count}`]}
                    alt=""
                    className="w-[75%] md:w-[85%] rounded-lg"
                  />
                  {/* <FaChevronRight
                    className="text-xl cursor-pointer"
                    onClick={Next}
                    key={id}
                  /> */}
                </div>
                <h2 className="text-3xl">{data.name}</h2>
                <span>₹{data.price}</span>
                <a
            href={`https://wa.me/918143366416?text=${encodeURIComponent(
              `name: ${data.name}\ncategory : ${data.category}\nitem id : ${data.id}\nprice : ${data.price}\nI want to buy this product let me know the avalibility ...`
            )}`}
            className="flex items-center justify-center"
          >

                <button  className="bg-[#654025] text-[#cbad89] p-3 px-10 text-lg rounded-xl">Buy now</button>
          </a>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
}

export default Shirts;
