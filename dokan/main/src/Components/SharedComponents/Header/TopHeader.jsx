import React from "react";
import { TbPhoneRinging } from "react-icons/tb";
import { SiWhatsapp } from "react-icons/si";

const TopHeader = () => {
  return (
    <div className="bg-[#F8F8FB] py-2 text-[#818181]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Main Flex Row */}
        <div className="flex justify-between items-center">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">+
              <TbPhoneRinging />
              <p className="text-[12px]">01478523699</p>
            </div>

            <div className="flex items-center gap-1">
              <SiWhatsapp />
              <p className="text-[12px]">95201478536</p>
            </div>
          </div>

          {/* CENTER SIDE */}
          <div>
            <p className="text-[12px] font-medium text-center">
              World's fastest online shopping
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4 text-[12px]">
            <p className="hover:text-black cursor-pointer">Help?</p>
            <p className="hover:text-black cursor-pointer">Track Order</p>
            <p className="hover:text-black cursor-pointer">Contact Us</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TopHeader;
