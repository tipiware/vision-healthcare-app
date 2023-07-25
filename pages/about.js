import Image from 'next/image';

const about = () => {
  return (
    <>
      <div className="pt-12 flex justify-center items-center pl-16 pr-16">
        <p class="sm:text-2xl text-0.5xl " >
        The objective of our eye awareness website is to enlighten and empower individuals with knowledge about the significance of eye care, the importance of regular eye examinations, and the prevention of eye diseases. Through engaging content, informative resources, and interactive tools, we aim to raise awareness about the value of maintaining healthy vision and adopting proactive measures to protect our eyesight. By fostering a culture of eye health awareness, our ultimate goal is to inspire people to prioritize their eye care and embrace a world of vibrant, unobstructed sight for a better quality of life. Together, we envision a community where everyone recognizes the irreplaceable gift of vision and takes proactive steps towards preserving it for a brighter future.
        </p>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto flex lg:flex-row flex-col justify-center">
          <div class="flex flex-col justify-center text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              # Our First Mission 
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Provide eye-related information to any site visitor. Most people dont have awareness about eye diseases. This credit to one of the most common disease in this era. 
            </p>
          </div>
          <div class="flex flex-wrap text-center-m-2">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <Image
                  alt="team"
                  class="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/beauty.jpg"
                  priority={true}
                  width={300}
                  height={300}
                ></Image>
            </div>
          </div>
        </div>
        <div class="container px-5 py-12 mx-auto flex lg:flex-row flex-col justify-center">
          <div class="flex flex-col justify-center text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              # Our Second Mission 
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Assist self-examination among the people to find out the potential eye diseases through self-test. The result can be inaccurate, yet it can provide some awareness to the potential eye disease.
            </p>
          </div>
          <div class="flex flex-wrap text-center-m-2">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                <Image
                  alt="team"
                  class="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/examine.jpg"
                  priority={true}
                  width={300}
                  height={300}
                ></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about;