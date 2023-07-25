import DoughnutGraph from '../components/DoughnutGraph';
import Image from 'next/image';

const disease = () => {
  return (
    <>
    <section class="body-font">
      <div class="container px-5 py-18 mx-auto">
        <div class="flex w-full mb-20 justify-center text-center items-center flex-wrap lg:flex-nowrap ">
          <div className="md:w-8/12 ">
            <DoughnutGraph />
          </div>

          <p class="h-6/12 lg:w-6/12 w-full text-lg">
            Blindness is tragic wherever it strikes. For many in the developing world, it condemns them to a life of poverty with little chance to live independently. As much as 90 percent of the global burden of eye disease is shouldered by developing countries, where treatable diseases often go undiagnosed. About 39 million people around the world are blind and a further 246 million are unable to see properly, according to the WHO.{' '}
            <p className="pt-10">
            To help combat visual impairment and eye disease globally, as well as in the U.S., the National Eye Institute (NEI) at the NIH supports a wide range of research studies. The NEI recently developed a new strategic plan to guide its activities in international research and global health. Its goals include establishing a full-time office devoted to the issue, fostering a sustainable research environment globally, expanding collaborations to advance vision research and supporting partnerships that add scientific value to NEI programs. In addition, the NEI intends to develop scientific capacity in the U.S. through training and mentoring to meet global health challenges and support vision research in the future.
            </p>
          </p>
        </div>
        <div class="flex flex-wrap text-center m-6">
          <div class="xl:w-1/2 md:w-1/2 p-6">
            <div class="bg-gray-100 p-6 rounded-lg border-2 border-red-300 h-full">
              <Image
                className="rounded-lg lg:w-full object-cover object-center mb-6"
                width={500}
                height={300}
                src="/cataracts.jpg"
                priority={true}
              />
              <h2 class="text-lg text-gray-900 title-font mb-4 font-bold pt-3">
                Cataracts vision
              </h2>
              <p class="leading-relaxed text-base">
              For people who have cataracts, seeing through cloudy lenses is a bit like looking through a frosty or fogged-up window. Clouded vision caused by cataracts can make it more difficult to read, drive a car (especially at night) or see the expression on a friend's face.
              </p>
              <p class="leading-relaxed text-base">
              Most cataracts develop slowly and don't disturb your eyesight early on. But with time, cataracts will eventually interfere with your vision.At first, stronger lighting and eyeglasses can help you deal with cataracts. But if impaired vision interferes with your usual activities, you might need cataract surgery. Fortunately, cataract surgery is generally a safe, effective procedure.
              </p>
            </div>
          </div>
          <div class="xl:w-1/2 md:w-1/2 p-6">
            <div class="bg-gray-100 p-6 rounded-lg border-2 border-red-300 h-full">
              <Image
                className="rounded-lg lg:w-full object-cover object-center mb-6"
                width={500}
                height={300}
                src="/glucoma.jpg"
                priority={true}
              />
   
              <h2 class="text-lg text-gray-900 title-font mb-4 font-bold pt-3">
                Glaucoma vision
              </h2>
              <p class="leading-relaxed text-base">
              Glaucoma is a group of eye conditions that damage the optic nerve. The optic nerve sends visual information from your eye to your brain and is vital for good vision. Damage to the optic nerve is often related to high pressure in your eye. But glaucoma can happen even with normal eye pressure.Glaucoma can occur at any age but is more common in older adults. It is one of the leading causes of blindness for people over the age of 60.
              </p>
              <p class="leading-relaxed text-base">
              Many forms of glaucoma have no warning signs. The effect is so gradual that you may not notice a change in vision until the condition is in its later stages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="text-justify px-5 py-6">
      <h1 className="text-center mt-10 font-bold text-3xl underline">
        Testimonies
      </h1>
      <p className="mt-5">
        Welcome to the eye remedy, a website dedicated to sharing the inspiring journey of eye disease patients. This platform aims to create awareness, offer support, and celebrate the courage of those who have faced the challenges of eye-related conditions. Here are few testinomies from patients
      </p>
      <p>
        <b>Testimony 1</b>
      </p>
      <p>
        "From the very beginning, our daughter Emma's journey with eye care has been nothing short of extraordinary. Dr. Johnson's attentive and compassionate approach made us feel like we were in the best hands. When Emma was diagnosed with amblyopia, or 'lazy eye,' Dr. Johnson carefully crafted a personalized treatment plan that included vision therapy and patching. Watching Emma's determination to overcome this challenge, along with Dr. Johnson's unwavering support, brought tears of joy to our eyes. Today, Emma's eyes shine with confidence as she embraces every opportunity, and we will forever be grateful to Dr. Johnson for guiding our little champion to a future filled with clarity and hope. Thank you for changing our daughter's life for the better." - The Smith Family
      </p>

      <p className="mt-5">
        Welcome to the eye remedy, a website dedicated to sharing the inspiring journey of eye disease patients. This platform aims to create awareness, offer support, and celebrate the courage of those who have faced the challenges of eye-related conditions. Here are few testinomies from patients
      </p>
      <p>
        <b>Testimony 2</b>
      </p>
      <p>
        "Our family will forever be indebted to Dr. Patel for the profound impact she has had on our son, Jacob's life. Jacob was born with a rare eye condition that left us feeling overwhelmed and anxious about his future. From the moment we met Dr. Patel, her genuine warmth and expertise put us at ease. She approached Jacob's case with utmost dedication, going above and beyond to explore every possible treatment option. Through numerous surgeries and therapies, Dr. Patel's skillful hands and unwavering commitment guided Jacob towards a world of light and color. Today, Jacob thrives as a happy and confident young boy, and we owe it all to Dr. Patel's brilliance as an eye care specialist. Our gratitude knows no bounds, and we will forever cherish the gift of sight she bestowed upon our beloved son." - The Johnson Family
      </p>
    </div>
</>
  );
};

export default disease;