"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
// import { IconAppWindow } from "tailwind-merge";
import courseData from "../data/music_courses.json";
import Link from "next/link";


interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    // image: "/courses/guitar.jpg"
}

export default function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)
  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2
          className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transaparent bg-gradiet-to-b from-neutral-50 to-neutral-400"
          style={{ color: "#E1E1E1" }}
        >
          FEATURED COURSES
        </h2>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Learn with the best
        </p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg-grid-cols-3 gap-8 justify-center">
            {featuredCourses.map((course:Course) => (
                <div key={course.id} className="flex justify-center">
                    <BackgroundGradient className=" flex flex-col rounded-[22px] bg-gray dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                        <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                            <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                {course.title}
                            </p>
                            <p className="text-sm text-nutral-600 dark:text-neutral-400 flex-grow">
                                {course.description}
                            </p>
                            <Link href={`/courses/${course.slug}`}>
                                Learn More
                            </Link>
                        </div>
                    </BackgroundGradient>
                </div>
            ))}
        </div>
        <div className="mt-20 text-center">
          <Link
            href={"/courses"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All courses
          </Link>
        </div>
      </div>
    </div>
  );
}
