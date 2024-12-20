import React, { useState } from 'react'

import { Data3 } from '../Data/Hoodies_data';
import { motion } from "framer-motion";
import { cardsStyle, parentStyle } from "./Collection";


function Hoodies() {
  const [count, setCount] = useState(1);
    return (
      <div>
        <h1 className="text-[#cbad89] text-4xl ml-4 mb-8 m-8 block">Hoodies</h1>
        <div className={parentStyle}>
          {Data3 &&
            Data3.map((data, id) => {
              return (
                <motion.div className={cardsStyle} key={id}>
                  <div className="flex items-center justify-center gap-2">
                    {/* <FaChevronLeft
                      className="text-xl cursor-pointer"
                      onClick={Prev}
                      key={id}
                    /> */}
                    <img
                      src={data[`src${count}`]}
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
                    <button className="bg-[#654025] text-[#cbad89] p-3 px-10 text-lg rounded-xl">
                      Buy now
                    </button>
                  </a>
                </motion.div>
              );
            })}
        </div>
      </div>
    );
}

export default Hoodies
