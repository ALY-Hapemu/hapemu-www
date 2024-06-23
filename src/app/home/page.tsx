import SideNav from "~/components/Nav";

export default function Page() {
  return (
    <div className="bg-gradient-to-br from-blue-200 to-blue-500 min-h-screen">
      <SideNav />

      <div id="home" className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center text-white lg:pb-12 md:py-32 md:px-10 lg:px-32">
        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl">
          Hapemu, tujuan akhirmu dalam mencari hape
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl">
          Rata-Rata orang menghabiskan waktu lebih dari 2 minggu untuk mencari
          hape yang terbaik baginya, kami membantu kamu untuk mendapat
          jawabannya dalam 5 menit
        </p>
        <div className="flex flex-wrap justify-center">
          <a
            id="button"
            href="/quiz"
            className="bg-blue-600 px-8 py-3 m-2 text-lg font-semibold rounded"
          >
            Cari Hapemu
          </a>
        </div>
        <img src="/Merek_Smartphone.svg" alt="Merek Hape" />
      </div>
    </div>
  );
}
