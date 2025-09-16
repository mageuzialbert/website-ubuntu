import Image from "next/image";

export function LogoCloud() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-600 mb-8">
            Backed by
          </h2>
        </div>
        
        <div className="flex justify-center items-center">
          <div className="bg-gray-100 p-8 rounded-2xl">
            <Image
              src="/logos/undp.png"
              alt="UNDP Logo"
              width={200}
              height={100}
              className="opacity-60"
            />
          </div>
        </div>
        
        {/* TODO(ipab): Add more partner logos here */}
      </div>
    </section>
  );
}

