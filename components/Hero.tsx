import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-full px-300 text-center text-blue-300 desktop:container tablet:px-500 desktop:px-800 desktop:text-left">
      <div className="flex h-full w-full flex-col items-center py-300 tablet:py-1600 desktop:flex-row desktop:justify-between desktop:pt-[0]">
        <div>
          <h1 className="font-barlowCondensed text-preset-8 uppercase tracking-[2.3px] tablet:text-preset-5">
            So, you want to travel to
            <span className="mt-300 block font-bellefair text-[80px] text-white tablet:text-preset-1">
              space
            </span>
          </h1>
          <p className="mt-300 max-w-[327px] font-barlow text-[0.9375rem] leading-[1.8] tablet:max-w-[512px] tablet:text-[1rem]">
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </div>
        <Link
          href="/destination"
          className="btn mt-500 tablet:mt-[66px] desktop:mt-[0]"
        >
          Explore
        </Link>
      </div>
    </div>
  );
}
