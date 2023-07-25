
import Image from 'next/image';
import Link from 'next/link';

const info = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-6 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <h1 className="pt-10 pb-10 text-red-500 font-bold text-3xl">
            Eye Info
          </h1>
          <div class="flex flex-col sm:flex-row mt-8">
            <div class="sm:w-1/2 text-center sm:pr-8 sm:py-8">
              <div class="inline-flex items-center justify-center">
                <Image
                  className="rounded-lg rounded-t-3xl"
                  width={800}
                  height={600}
                  src="/eye.gif"
                  priority={true}
                />
              </div>
              <div className="pt-3">
                Structure of eye
              </div>
            </div>
            <div class="sm:w-1/2 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p class="leading-relaxed text-lg mb-4 text-center">
              The eye is made up of three coats, which enclose the optically clear aqueous humour, lens, and vitreous body. The outermost coat consists of the cornea and the sclera; the middle coat contains the main blood supply to the eye and consists, from the back forward, of the choroid, the ciliary body, and the iris. The innermost layer is the retina, lying on the choroid and receiving most of its nourishment from the vessels within the choroid, the remainder of its nourishment being derived from the retinal vessels that lie on its surface and are visible in the ophthalmoscope. The ciliary body and iris have a very thin covering, the ciliary epithelium and posterior epithelium of the iris, which is continuous with the retina.              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container px-5 py-5 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="flex flex-col sm:flex-row mt-8">
            <div class="sm:w-1/2 text-center sm:pr-8 sm:py-8">
              <div class="inline-flex items-center justify-center">
                <Image
                  className="rounded-lg rounded-t-3xl"
                  width={600}
                  height={600}
                  src="/test.gif"
                  priority={true}
                />
              </div>
              <div className="pt-3">
                Amsler test
              </div>
            </div>
            <div class="sm:w-1/2 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p class="leading-relaxed text-lg mb-4 text-left">
              Amsler grid test to help detect early signs of retinal disease such as macular degeneration.
              </p>
              <p class="leading-relaxed text-lg mb-4 text-left">
              How to use an Amsler grid:
              <ul>
                <li>
                  1. Hold the grid at a comfortable reading distance (generally, about 12-14 inches away). Wear your reading glasses if you normally use them.
                </li>
                <li>
                  2. Cover one eye and focus on the black dot in the middle of the grid.
                </li>
                <li>
                  3. Cover the other eye and repeat the test. If the lines appear to be wavy, dim, irregular, or fuzzy, schedule an eye exam immediately.
                </li>
              </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default info;