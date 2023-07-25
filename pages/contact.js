import React from 'react';
import Link from 'next/link';

const contact = () => {
  return (
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-40 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-3xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base font">
          Let's stay in touch and bring clarity to your questions or concerns. Reach out to us, and our dedicated team will be delighted to guide you on your journey to a brighter vision of possibilities
          </p>
        </div>
        <span class="flex items-center justify-center">
          <Link legacyBehavior href="https://twitter.com/PhilipBDev">
            <a class="text-black">
              <svg
                fill="rgb(239, 68, 68)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-16 h-16 hover:cursor-pointer hover:animate-pulse mr-8"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          </Link>
          <Link legacyBehavior href="">
            <a class="ml-3 text-black">
              <svg
                fill="rgb(239, 68, 68)"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-16 h-16 hover:cursor-pointer hover:animate-pulse mr-8"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>

                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </Link>
          <Link legacyBehavior href="">
            <a class="text-black ml-3">
              <svg
                fill="rgb(239, 68, 68)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="02"
                class="w-16 h-16 hover:cursor-pointer hover:animate-pulse"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </Link>
        </span>
          <p class="lg:w-2/3 mx-auto md:w-1/4 leading-relaxed text-base font">
            Visit our location at
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid" width="800" height="500" />
          </p>
      </div>
    </section>
  );
};

export default contact;