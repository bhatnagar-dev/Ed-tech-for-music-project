"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    name: "John Doe",
    title: "CEO, Company ABC",
  },
  {
    quote:
      "Vivamus sit amet metus cursus, euismod quam nec, feugiat turpis. Quisque laoreet nibh vel accumsan vestibulum.",
    name: "Jane Smith",
    title: "Designer, XYZ Design Studio",
  },
  {
    quote:
      "Integer eu elit ac metus sollicitudin elementum ac ac urna. Nullam non lectus at velit ullamcorper suscipit.",
    name: "Bob Johnson",
    title: "Developer, Tech Innovations Inc.",
  },
];

export default function MusicSchoolTestimonials() {
  return (
    <div className="h-[30rem] w-full bg-black  bg-grid-white/[0.2]  relative flex flex-col items-center justify-center overflow-hidden">
      <h2 
      className="text-5xl font-bold text-center mb-20 z-10"
      style={{ color: "#E1E1E1" }}
      >
        Hear Our Harmony: Voices of success
        </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
        <InfiniteMovingCards
          items={musicSchoolTestimonials}
          direction="right"
          speed="normal"
        />
        </div>
      </div>
    </div>
  );
}
