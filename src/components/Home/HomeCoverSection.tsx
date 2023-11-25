import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Elements/Tag";

const HomeCoverSection = () => {
  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-10 relative h-[85vh]">
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark rounded-3xl z-0" />
        <Image
          src={
            "https://c.wallhere.com/photos/ef/fc/china_city_travel_light_skyline_architecture_night_digital-1123468.jpg!d"
          }
          alt=""
          fill
          className="w-full h-full object-center object-cover rounded-3xl -z-10"
        />
        <div className="w-3/4 p-16 flex flex-col items-start justify-center z-0 text-light">
          <Link href={"/"}>Lorem is pom</Link>
          <Tag link="" name="" />
          <h1>Blog title</h1>
          <p>Blog description</p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
