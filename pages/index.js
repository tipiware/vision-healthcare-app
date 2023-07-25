import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const donate = () => {

  return (
    <>
      <Head>
        <title>Eye Care</title>
      </Head>

      <div className="text-center flex justify-center items-center flex-col">
        <div className="px-10 text-lg">
          <h1 className="pt-10 pb-10 text-red-500 font-bold text-3xl">
            Eye Care
          </h1>
          <p className="pb-10">
          Eye care is essential for maintaining healthy vision and overall well-being. Our eyes are intricate organs, and regular eye examinations can detect early signs of potential issues like glaucoma, cataracts, or macular degeneration. Proper eye care also involves protecting our eyes from harmful UV rays, blue light, and foreign objects. Healthy vision is crucial for daily tasks like driving, reading, and working on screens. Neglecting eye care can lead to vision impairment or blindness, affecting our independence and quality of life. By prioritizing eye care, we preserve our precious gift of sight, ensuring a colorful and vibrant world for us to explore and enjoy.
          </p>
        </div>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <Image
              width={800}
              height={800}
              class="object-cover object-center"
              src="/attractive eye.jpeg"
              priority={true}
            />
          </div>
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full border-solid border-red-500 border-2 mb-3">
                <Image
                  width={30}
                  height={30}
                  class="object-cover object-center"
                  src="/eye1.png"
                  priority={true}
                />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  EYE DISEASE
                </h2>
                <p class="leading-relaxed text-base">
                Eye disease refers to a broad category of medical conditions that affect the structures and functioning of the eyes, leading to vision impairment or even blindness if left untreated. There are numerous types of eye diseases, each with its specific causes, symptoms, and treatments. Some common eye diseases include Cataracts, Glaucoma, Macular Degeneration, Diabetic Retinopathy, Conjunctivitis, Dry Eye Syndrome and Retinal Detachment.
                </p>
                <Link legacyBehavior href="/disease">
                  <a class="mt-3 text-red-500 underline font-semibold cursor-pointer inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center mt-3">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full border-solid border-yellow-500 border-2 mb-3">
                <Image
                  width={30}
                  height={30}
                  class="object-cover object-center"
                  src="/eye2.png"
                  priority={true}
                />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  EYE INFO
                </h2>
                <p class="leading-relaxed text-base">
                The eye is made up of three coats, which enclose the optically clear aqueous humour, lens, and vitreous body. The outermost coat consists of the cornea and the sclera; the middle coat contains the main blood supply to the eye and consists, from the back forward, of the choroid, the ciliary body, and the iris.
                </p>
                <Link legacyBehavior href="/info">
                  <a class="mt-3 text-yellow-500 underline font-semibold cursor-pointer inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-justify px-10 py-12">
        <h1 className="text-center mt-10 font-bold text-3xl underline">
          FAQ
        </h1>
        <p className="mt-5">
          <b>Welcome to our Eye Healthcare website! We understand the importance of clear vision and optimal eye health. Below, we have compiled a list of frequently asked questions to help address common concerns about eye care. If you have further queries, don't hesitate to reach out to our qualified eye care professionals.</b>
        </p>

        <p className="mt-5">
          <b>1. How often should I have an eye examination?</b>
        </p>
        <p>
        It is recommended to have a comprehensive eye examination at least once every two years, or as advised by your eye care professional. Individuals with specific eye conditions or certain risk factors may require more frequent visits.
        </p>

        <p className="mt-5">
          <b>2. What can I expect during an eye examination?</b>
        </p>
        <p>
        A comprehensive eye exam typically includes tests to assess your visual acuity, eye health, and may include evaluations for conditions like glaucoma and cataracts. Your eye care professional will explain each step and answer any questions you may have.
        </p>
        <p className="mt-5">
          <b>3. How can I protect my eyes from digital eye strain?</b>
        </p>
        <p>
        To minimize digital eye strain, consider the 20-20-20 rule: every 20 minutes, take a 20-second break, and look at something 20 feet away. Additionally, adjusting screen brightness, reducing glare, and using proper lighting can help.
        </p>
      </div>
    </>
  );
};

export default donate;