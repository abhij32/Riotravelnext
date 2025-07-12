"use client";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";
import { PhoneIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useCallback } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function ImagesSliderHero() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handlePhoneChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, ""); // Only allow digits
      if (value.length <= 10) {
        setPhoneNumber(value);
        setIsValid(value.length === 10);
      }
    },
    []
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid) {
      console.log("Form submitted with phone number:", phoneNumber);
    }
  };

  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const words = "Flee with Glee";

  return (
    <>
      {/* Mobile view */}
      <div className="md:hidden h-[40rem] flex flex-col justify-center items-center">
        {/* <div className="z-50 flex flex-col justify-center items-center"> */}
        <motion.h1
          className="font-bold text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#4764ff] to-[#6b84ff] py-0 [-webkit-text-stroke:_1px_#152788]"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          RIO TRAVELS INDIA
        </motion.h1>
        <TextGenerateEffect
          words={words}
          className="text-center font-bold text-xl bg-clip-text text-transparent text-gray-800 "
        />
        <div className="px-4 py-2 w-full mx-auto relative z-20 mt-4">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div className="relative">
              <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <Input
                type="tel"
                placeholder="Enter your mobile number"
                value={phoneNumber}
                onChange={handlePhoneChange}
                className="pl-10 bg-white/90 border-gray-200 text-black placeholder:text-gray-500"
                maxLength={10}
                required
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={!isValid}
              className={`w-full transition-colors duration-200 ${
                isValid
                  ? "bg-white text-black hover:bg-blue-600 hover:text-white"
                  : "bg-white text-black cursor-not-allowed opacity-70"
              }`}
            >
              Book Now
            </Button>
          </form>
        </div>
      </div>

      {/* Desktop view with animations and images */}
      <div className="hidden md:block">
        <ImagesSlider className="h-[40rem]" images={images}>
          <div className="z-50 flex flex-col justify-center items-center">
            <motion.h1
              className="font-bold text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-[#4764ff] to-[#6b84ff] py-4 [-webkit-text-stroke:_2px_#152788]"
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              RIO TRAVELS INDIA
            </motion.h1>
            <TextGenerateEffect
              words={words}
              className="text-center font-bold text-4xl bg-clip-text text-transparent text-gray-300"
            />
            <div className="px-4 py-2 w-full mx-auto relative z-20 mt-4">
              <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto space-y-4"
              >
                <div className="relative">
                  <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <Input
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    className="pl-10 bg-white/90 border-gray-200 text-black placeholder:text-gray-500"
                    maxLength={10}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={!isValid}
                  className={`w-full transition-colors duration-200 ${
                    isValid
                      ? "bg-white text-black hover:bg-blue-600 hover:text-white"
                      : "bg-white text-black cursor-not-allowed opacity-70"
                  }`}
                >
                  Book Now
                </Button>
              </form>
            </div>
          </div>
        </ImagesSlider>
      </div>
    </>
  );
}
