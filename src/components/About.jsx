import React from "react"; 

function About() {
  return (
    <>
      <div className="md:flex items-center justify-center text-[#ceb18d] gap-10 lg:gap-[12%] m-10 " id="about">
        <img
          src="https://media-hyd1-1.cdn.whatsapp.net/v/t61.24694-24/469698476_538668455832405_7180439745151636056_n.jpg?ccb=11-4&oh=01_Q5AaID1QuYX1OTKuYHuarg7G5ETO9SCKt5dNLG-q7MA1zwIA&oe=676FC476&_nc_sid=5e03e0&_nc_cat=111"
          alt=""
          className="rounded-full w-[70%] md:w-[50%] lg:w-[30%] mx-auto shadow-2xl"
        />

        <div>
          <h1 className="text-4xl lg:text-6xl my-4">Anand</h1>
          <p className=" text-lg lg:text-xl mt-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            obcaecati vitae sunt, aperiam porro adipisci nesciunt, eius quasi
            enim recusandae et provident labore. Voluptatum et laboriosam, at
            quod aliquam mollitia distinctio alias accusantium ullam
            consequuntur saepe praesentium maiores rem deleniti. Corrupti cum
            voluptatem nulla repudiandae provident culpa consequatur beatae rem.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
