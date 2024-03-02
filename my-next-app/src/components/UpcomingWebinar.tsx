'use client'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";


const featuredWebinars = [
    {
      title: 'Webinar 1: Introduction to React',
      description: 'Join us for an in-depth introduction to React.js and its core concepts.',
      slug: 'understanding Advanced React Techniques',
      isFeatured: true,
    },
    {
      title: 'Webinar 2: Advanced CSS Techniques',
      description: 'Explore advanced CSS techniques and best practices for modern web development.',
      slug: 'understanding Advanced CSS Techniques',
      isFeatured: true,
    },
    {
      title: 'Webinar 3: State Management with Redux',
      description: 'Learn how to manage state in React applications using Redux and middleware.',
      slug: 'understanding state management with redux',
      isFeatured: true,
    },
    {
        title: 'Webinar 4: Server-side Rendering with Next.js',
        description: 'Discover the benefits of server-side rendering in React applications using Next.js.',
        slug: 'understanding Server-side Rendering with Next.js',
        isFeatured: true,
      },
      {
        title: 'Webinar 5: Responsive Design Strategies',
        description: 'Learn effective strategies for creating responsive and mobile-friendly web designs.',
        slug: 'understanding Advanced Responsive Design Strategies',
        isFeatured: true,
      },
      {
        title: 'Webinar 6: GraphQL for Frontend Developers',
        description: 'Dive into the world of GraphQL and understand how it enhances frontend development.',
        slug: 'GraphQL for Frontend Developers',
        isFeatured: true,
      }
  ];

export default function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2
            className="text-base text-teal-600 font-semibold tracking-wide uppercase"
          >
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white">
            Enhance Musical Journey
          </p>
        </div>
        <div className="mt-10">
            <HoverEffect 
                items={featuredWebinars.map(webinar => (
                    {
                        title: webinar.title,
                        description: webinar.description,
                        link: '/'
                    }
                ))}
            />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View all Webinar
          </Link>
        </div>
      </div>
    </div>
  );
}
