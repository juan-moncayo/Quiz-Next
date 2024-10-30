import Image from "next/image";

export default function Component() {
  return (
    <main className="min-h-screen grid place-items-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <section className="relative bg-black/90 text-white rounded-3xl transition-all duration-300 ease-in-out md:rounded-[20px] lg:rounded-[15px] xl:rounded-[10px] 2xl:rounded-[5px]">
        <article className="hidden lg:block lg:w-[600px] lg:min-h-[300px]">
          <figure className="absolute -left-24 top-1/2 transform -translate-y-1/2 w-[240px] h-[240px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/Chica.png"
              alt="Profile photo"
              width={240}
              height={240}
              className="h-full w-full object-cover hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
            />
          </figure>
          <section className="ml-[180px] p-8 flex flex-col justify-center space-y-4">
            <header className="space-y-2">
              <h2 className="text-2xl font-serif">Jess Wilson</h2>
              <p className="text-gray-400">UX Engineer</p>
            </header>
            <p className="text-sm text-gray-400">
              Empowering users through captivating interfaces, turning ideas into pixel-perfect realities.
            </p>
            <nav className="grid grid-cols-2 gap-4">
              <button className="rounded-full border border-white/20 bg-transparent py-2 px-4 text-white hover:bg-white/10">
                Profile
              </button>
              <button className="rounded-full bg-white py-2 px-4 text-black hover:bg-white/90">
                Follow
              </button>
            </nav>
          </section>
        </article>

        <article className="hidden md:block lg:hidden w-[400px] transition-all duration-300 ease-in-out">
          <figure className="relative">
            <section className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 w-[320px] transition-all duration-300 ease-in-out">
              <Image
                src="/Chica.png"
                alt="Profile photo"
                width={320}
                height={200}
                className="w-full object-cover rounded-xl shadow-xl hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
              />
            </section>
            <section className="pt-[160px] p-6 space-y-4">
              <header className="space-y-2">
                <h2 className="text-2xl font-serif">Jess Wilson</h2>
                <p className="text-gray-400">UX Engineer</p>
              </header>
              <p className="text-sm text-gray-400">
                Empowering users through captivating interfaces, turning ideas into pixel-perfect realities.
              </p>
              <nav className="grid grid-cols-2 gap-4">
                <button className="rounded-full border border-white/20 bg-transparent py-2 px-4 text-white hover:bg-white/10">
                  Profile
                </button>
                <button className="rounded-full bg-white py-2 px-4 text-black hover:bg-white/90">
                  Follow
                </button>
              </nav>
            </section>
          </figure>
        </article>

        <article className="md:hidden w-[320px] transition-all duration-300 ease-in-out rounded-full">
          <figure className="relative">
            <section className="-mt-16 mb-4">
              <figure className="relative w-48 h-48 mx-auto overflow-hidden rounded-full shadow-xl transition-all duration-300 ease-in-out">
                <Image
                  src="/Chica.png"
                  alt="Profile photo"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
                />
              </figure>
            </section>
            <section className="p-6 space-y-4 text-center">
              <header className="space-y-2">
                <h2 className="text-2xl font-serif">Jess Wilson</h2>
                <p className="text-gray-400">UX Engineer</p>
              </header>
              <p className="text-sm text-gray-400">
                Empowering users through captivating interfaces, turning ideas into pixel-perfect realities.
              </p>
              <nav className="grid grid-cols-2 gap-4">
                <button className="rounded-full border border-white/20 bg-transparent py-2 px-4 text-white hover:bg-white/10">
                  Profile
                </button>
                <button className="rounded-full bg-white py-2 px-4 text-black hover:bg-white/90">
                  Follow
                </button>
              </nav>
            </section>
          </figure>
        </article>
      </section>
    </main>
  );
}
