import CameraRankingTable from "~/components/ScratchCameraRankingTable";
import prisma from "~/lib/db";

export const metadata = {
  title: "DXOMark Benchmark",
};

export default async function Page() {
  const ranking = await getData();

  return (
    <main className="flex-1">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="mt-4 bg-card p-4 rounded-lg lg:w-3/5 m-auto text-center">
            <h1 className="lg:text-3xl font-semibold text-blue-600">Bandingkan 2 Hape, <br /> Pilih Hape yang mau dibandingkan</h1>
          </div>
        </div>

        <div className="flex lg:w-4/5 m-auto">
          <CameraRankingTable ranking={ranking} />
          <CameraRankingTable ranking={ranking} />
        </div>
      </div>
    </main>
  );
}


async function getData() {
  const res = await prisma.smartphones.findMany({
    where: {
      dxomarkScore: {
        not: null,
      },
      photo: {
        not: "NaN",
      },
      video: {
        not: "NaN",
      },
      bokeh: {
        not: "NaN",
      },
      preview: {
        not: "NaN",
      },
      zoom: {
        not: "NaN",
      },
    },
    orderBy: {
      dxomarkScore: "desc",
    },
  });

  return res;
}
