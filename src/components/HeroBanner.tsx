const HeroBanner = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:h-[301px] pr-0 justify-center items-start">
      {/* Hero Left */}
      <div className="w-full lg:flex-1 lg:h-[300px] flex-shrink-0 bg-[#004D6D]">
        <div className="w-full lg:w-[456px] lg:h-[194px] flex-shrink-0 py-[53px] px-[57px]">
          <p className="w-full lg:w-[439.011px] ld:h-[92px] flex-shrink-0 text-white font-poppins text-[30px] not-italic font-semibold leading-normal capitalize">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="w-full lg:w-[449.103px] lg:h-[86px] flex-shrink-0 text-white font-poppins text-[26px] not-italic font-normal leading-normal capitalize">
            Lorem ipsum dolor sit amet consectetur. Viverr scelerisqu.
          </p>
        </div>
      </div>
      {/* Hero Right */}
      <div className="lg:flex-1 w-full h-[225px] lg:h-[300px] flex-shrink-0 bg-[url('../assets/images/hero-banner.png')] bg-cover bg-no-repeat"></div>
    </section>
  );
};

export default HeroBanner;
