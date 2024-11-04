import CompanyCarousel from "@/components/CompanyCarousel";
import CustomButton from "@/components/CustomButton";
import FAQS from "@/components/FAQS";
import FeataureBox from "@/components/FeataureBox";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="w-full py-6 flex flex-col justify-center items-center gap-10">
      <section className="w-full flex flex-col justify-center items-center gap-10 mt-10 lg:mt-20">
        <h1 className="text-7xl max-md:text-5xl w-[95%] font-bold text-center text-gradient">
          Manage your product effortlessly with
          <span className="text-gradient-2 "> 𝓟𝓵𝓪𝓷𝓲𝓼𝓽𝓻𝔂</span>
        </h1>
        <p className="dark:text-slate-300 w-full text-center">
          Planistry is a product management tool that helps you manage your
          products easily
        </p>
        <div className="flex gap-4">
          <CustomButton varient="purple">
            <Link href="/onboarding" className="flex items-center">
              Get Started <ChevronRight size={18} />
            </Link>
          </CustomButton>
          <Link
            href="/about"
            varient="plain"
            className="py-2 bg-white dark:bg-transparent"
          >
            Learn More
          </Link>
        </div>
      </section>
      <section className="flex flex-col py-10 bg-gray-50 dark:bg-black w-full mt-10 gap-10">
        <h3 className="w-full text-center text-2xl font-semibold">
          Key Features
        </h3>
        <div
          id="features"
          className="flex gap-20 justify-center items-center max-md:flex-col max-md:gap-5"
        >
          <FeataureBox />
          <FeataureBox />
          <FeataureBox />
        </div>
      </section>
      <section className="flex flex-col mt-10 gap-10 w-full py-10">
        <h3 className="w-full text-center text-2xl font-semibold">
          Trusted By Industry Leaders
        </h3>
        <div id="features" className="flex gap-20 max-md:flex-col max-md:gap-5">
          <CompanyCarousel />
        </div>
      </section>
      <section className="flex bg-gray-50 dark:bg-black flex-col mt-10 gap-10 w-full py-10">
        <h3 className="w-full text-center text-2xl font-semibold">
          Frequently Asked Questions
        </h3>
        <div id="faqs" className="px-10">
          <FAQS />
        </div>
      </section>
    </div>
  );
}

export default page;
