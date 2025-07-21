import dotsYellow from "../../assets/dots-yellow.svg";
import whyChooseUs from "../../assets/why-choose-us-img.jpg";
import support from "../../assets/support.svg";
import truck from "../../assets/truck.svg";
import bag from "../../assets/bag.svg";
import returnSvg from "../../assets/return.svg";
import person1 from '../../assets/person_1.jpg'
import person2 from '../../assets/person_2.jpg'
import person3 from '../../assets/person_3.jpg'
import person4 from '../../assets/person_4.jpg'
import Testimonials from '../Testimonials'
function About() {
  return (
    <>
    <div className="mt-24 md:px-28 px-2">
      <div className="md:grid md:grid-cols-2 flex flex-col justify-between">
        <div className="px-2">
          <h1 className="font-normal text-3xl">Why choose use</h1>
          <p className="mt-4 text-[#6c757d] text-sm">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <div className="grid grid-cols-2 gap-2 py-4 mt-4">
            <div className="gap-2">
              <div className="relative inline-block">
                <img src={truck} alt="" className="relative z-10" />
                <span className="bg-[#3b5d5033] w-8 h-8 absolute left-10 -translate-x-5 top-3 rounded-full inline-block z-0"></span>
              </div>

              <h3 className="text-xs mb-1">Fast & Free Shipping</h3>
              <p className="text-[#6c757d] text-xs pr-14">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="gap-2">
              <div className="relative inline-block">
                <img src={bag} alt="" className="relative z-10" />
                <span className="bg-[#3b5d5033] w-8 h-8 absolute left-10 -translate-x-5 top-3 rounded-full inline-block z-0"></span>
              </div>
              <h3 className="text-xs mb-1">Easy to Shop</h3>
              <p className="text-[#6c757d] text-xs pr-14">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 py-4">
            <div className="gap-2">
              <div className="relative inline-block">
                <img src={support} alt="" className="relative z-10" />
                <span className="bg-[#3b5d5033] w-8 h-8 absolute left-10 -translate-x-5 top-3 rounded-full inline-block z-0"></span>
              </div>
              <h3 className="text-xs mb-1">24/7 Support</h3>
              <p className="text-[#6c757d] text-xs pr-14">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="gap-2">
              <div className="relative inline-block">
                <img src={returnSvg} alt="" className="relative z-10" />
                <span className="bg-[#3b5d5033] w-8 h-8 absolute left-10 -translate-x-5 top-3 rounded-full inline-block z-0"></span>
              </div>
              <h3 className="text-xs mb-1">Hassle Free Returns</h3>
              <p className="text-[#6c757d] text-xs pr-14">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img className="absolute md:left-6 -left-20 md:-top-8 h-48 w-52" src={dotsYellow} alt="" />
          <img
            className="absolute md:left-28 md:top-auto top-20 md:-bottom-36 rounded-2xl w-md"
            src={whyChooseUs}
            alt=""
          />
        </div>
      </div>
    </div>
    <div className="mt-96 px-2 md:px-16">
        <div className="flex justify-center">
          <h1 className="text-4xl md:mt-0 mt-80">Our Team</h1>
        </div>
        <div className="md:flex md:flex-row flex flex-col pt-14 md:gap-0 gap-10">
          <div>
            <img src={person1} alt="person1" className="md:w-64 w-full" />
            <h2 className="text-3xl underline font-normal pt-8">Lawson Arnold</h2>
            <p className="text-gray-600 pt-2">CEO, Founder, Atty.</p>
            <p className="pt-5 text-gray-600">Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="pt-5 font-semibold underline">Learn More</p>
          </div>
          <div>
            <img src={person2} alt="person1" className="md:w-64 w-full" />
            <h2 className="text-3xl underline font-normal pt-8">Jeremy Walker</h2>
            <p className="text-gray-600 pt-2">CEO, Founder, Atty.</p>
            <p className="pt-5 text-gray-600">Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="pt-5 font-semibold underline">Learn More</p>
          </div>
          <div>
            <img src={person3} alt="person1" className="md:w-64 w-full" />
            <h2 className="text-3xl underline font-normal pt-8">Patrik White</h2>
            <p className="text-gray-600 pt-2">CEO, Founder, Atty.</p>
            <p className="pt-5 text-gray-600">Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="pt-5 font-semibold underline">Learn More</p>
          </div>
          <div>
            <img src={person4} alt="person1" className="md:w-64 w-full" />
            <h2 className="text-3xl underline font-normal pt-8">Kathryn Ryan</h2>
            <p className="text-gray-600 pt-2">CEO, Founder, Atty.</p>
            <p className="pt-5 text-gray-600">Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p className="pt-5 font-semibold underline">Learn More</p>
          </div>
        </div>
    </div>
    <Testimonials/>
    </>
  );
}

export default About;
