import { DesignSamples } from "@/lib/DesignSamples";

function References() {
  return (
    <section>
      <div className="container flex flex-col gap-8">
        <div className="mb-8 flex items-center justify-center flex-col relative">
          <h2 className="text-4xl mb-2">Design Samples</h2>
          <p className="before_sub relative text-primary">
            3 Simple Steps to Go
          </p>
        </div>
        <div className="grid grid-col-1 sm:grid-col-2 lg:grid-col-3 xl:grid-col-4">
          {DesignSamples.images.map((image, index) => (
            <article key={index}></article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default References;
