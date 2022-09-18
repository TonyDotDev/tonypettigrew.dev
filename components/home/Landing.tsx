import Image from "next/future/image";

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center w-full mb-16 h-[calc(100vh-104px)] sm:h-[calc(100vh-132px)]">
      <div className="w-[120px] mb-8">
        <Image
          alt="Tony Pettigrew"
          height={176}
          width={176}
          src="/avatar.jpeg"
          sizes="30vw"
          priority
          className="rounded-full filter grayscale"
        />
      </div>
      <div className="flex flex-col text-center">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
          Tony Pettigrew
        </h1>
        <h2 className="text-gray-700 dark:text-gray-200 mb-4">
          Software Engineer focused on{" "}
          <span className="font-semibold">JavaScript</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Enthusiastically sharing my knowledge and experience in the industry
          through blogs and code snippets.
        </p>
      </div>
    </div>
  );
}
