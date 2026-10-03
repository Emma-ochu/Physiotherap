import Container from "../components/Container";

const galleryImages = [
  {
    src: "/images/high_resolution_razor_sharp_commercial_interior_photography_matching_the_exact.png",
    alt: "DE-INES interior photography matching the exact clinic setup",
  },
  {
    src: "/images/high_resolution_razor_sharp_commercial_photography_matching_the_exact_setup.png",
    alt: "Commercial photography of the exact DE-INES treatment setup",
  },
  {
    src: "/images/high_resolution_razor_sharp_commercial_photography_matching_the_exact_subject.png",
    alt: "High-resolution clinical subject photography for the DE-INES brand",
  },
  {
    src: "/images/high_resolution_razor_sharp_commercial_photography_of_the_exact_rehabilitation.png",
    alt: "High-resolution rehabilitation room photography matching the exact treatment environment",
  },
];

const Gallery = () => {
  return (
    <section className='bg-slate-50 py-20 md:py-28'>
      <Container>
        <div className='mx-auto max-w-3xl text-center'>
          <p className='text-sm font-bold uppercase tracking-[0.2em] text-blue-700'>
            Our Clinic
          </p>
          <h2 className='mt-4 text-3xl font-bold text-slate-900 md:text-5xl'>
            A Glimpse Inside DE-INES
          </h2>
          <p className='mt-6 text-lg leading-8 text-slate-600'>
            A welcoming, modern environment designed to support recovery,
            movement, and long-term wellbeing.
          </p>
        </div>

        <div className='mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {galleryImages.map((image, index) => (
            <div
              key={`${image.alt}-${index}`}
              className='group aspect-[4/3] overflow-hidden rounded-3xl bg-white shadow-sm md:aspect-[16/10]'
            >
              <img
                src={image.src}
                alt={image.alt}
                className='h-full w-full object-cover transition duration-700 group-hover:scale-105'
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
