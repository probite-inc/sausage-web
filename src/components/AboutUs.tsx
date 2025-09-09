function AboutUs() {
  return (
    <div className=" relative flex flex-col items-center justify-start pt-12 w-full min-h-[calc(50vh-100px)] sm:min-h-[calc(100vh-100px)] bg-[url(/image/aboutus-background.svg)] dark:bg-[url(/image/aboutus-background-dark.svg)] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60 z-0">
        <h2 className="text-lg md:text-2xl lg:text-6xl text-white text-center space-y-9 dark:bg-black/70 p-3 rounded-2xl">
          درباره ما
          <p className="text-white text-sm md:text-base text-center mt-9">
            پروبایت با پشتوانه یک سال تجربه، تلاش می‌کند تا با حفظ اصالت خانگی و
            استفاده از مواد طبیعی، سوسیس و کالباسی سالم و باکیفیت به مشتریان
            ارائه دهد. ما به سلامت و رضایت شما متعهد هستیم
          </p>
        </h2>
      </div>
    </div>
  );
}
export default AboutUs;
