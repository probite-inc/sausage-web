export default function Footer() {
  return (
    <div
      id="contact"
      className="bg-[#6E6E6E] text-white w-full flex flex-col items-center py-6 gap-4"
    >
      {/* phone */}
      <div className="bg-[url(/image/Union.svg)] bg-no-repeat w-6 h-6">
        <div className="text-sm mt-1">+989332930229</div>
      </div>

      {/* location*/}
      <div className="bg-[url(/image/Group.svg)] w-6 h-6">
        <div className="text-sm mt-1">location</div>
      </div>

      {/* insta */}
      <div className="bg-[url(/image/icon8-instagram-1.svg)] w-6 h-6">
        instagram
      </div>
    </div>
  );
}
