import Container from "../components/Container";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import {
  BRANCH_OFFICE,
  EMAIL,
  HEAD_OFFICE,
  PHONE_DISPLAY,
  PHONE_NUMBER,
  WHATSAPP_BOOK,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from "../lib/whatsapp";

const MAPS_QUERY = HEAD_OFFICE;
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`;
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;

const contactInfo = [
  { title: "Head Office", value: HEAD_OFFICE, href: MAPS_LINK, icon: MapPin },
  {
    title: "Branch Office",
    value: BRANCH_OFFICE,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRANCH_OFFICE)}`,
    icon: MapPin,
  },
  {
    title: "Call Us",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_NUMBER}`,
    icon: Phone,
  },
  {
    title: "WhatsApp",
    value: WHATSAPP_DISPLAY,
    href: WHATSAPP_BOOK,
    icon: MessageCircle,
  },
  { title: "Email", value: EMAIL, href: `mailto:${EMAIL}`, icon: Mail },
];

const Contact = () => {
  return (
    <section
      id='contact'
      aria-labelledby='contact-heading'
      className='bg-slate-50 py-20 md:py-28'
    >
      <Container>
        <div className='mx-auto max-w-3xl text-center'>
          <span className='text-sm font-bold uppercase tracking-[0.2em] text-blue-700'>
            Contact Us
          </span>
          <h2
            id='contact-heading'
            className='mt-4 text-3xl font-bold text-slate-900 md:text-5xl'
          >
            Book Your Appointment Today
          </h2>
          <p className='mt-5 text-base leading-7 text-slate-600 md:text-lg md:leading-8'>
            Ready to begin your recovery journey? Contact DE-INES Physiotherapy
            & Sports Injury Consult to book an appointment, inquire about our
            services, or enroll in our Home Care Assistant Training program.
          </p>
        </div>

        <div className='mt-12 grid min-w-0 gap-8 lg:grid-cols-2 lg:gap-10'>
          <div className='min-w-0 space-y-4' aria-label='DE-INES contact details'>
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const isExternal = item.href.startsWith("http");
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className='block rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-200'
                >
                  <div className='flex items-start gap-5 p-6'>
                    <div
                      className='flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700'
                      aria-hidden='true'
                    >
                      <Icon className='h-7 w-7' />
                    </div>
                    <div className='min-w-0 flex-1'>
                      <h3 className='font-semibold text-slate-900'>
                        {item.title}
                      </h3>
                      <p className='mt-1 break-words leading-7 text-slate-600 [overflow-wrap:anywhere]'>
                        {item.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <form
            id='contact-form'
            aria-label='Contact DE-INES Physiotherapy on WhatsApp'
            className='min-w-0 scroll-mt-32 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8'
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const whatsappMessage = encodeURIComponent(
                `Hello, I would like to book an appointment at DE-INES Physiotherapy.\n\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\n\nMessage:\n${data.get("message")}`,
              );
              window.open(
                `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`,
                "_blank",
                "noopener,noreferrer",
              );
            }}
          >
            <div className='mb-8'>
              <h3 className='text-2xl font-bold text-slate-900'>
                Send Us a Message
              </h3>
              <p className='mt-2 text-slate-600'>
                Fill in your details and continue the conversation on WhatsApp.
              </p>
            </div>
            <div className='grid gap-5'>
              <label className='grid gap-2 text-sm font-semibold text-slate-700'>
                Full Name
                <input
                  name='name'
                  type='text'
                  autoComplete='name'
                  placeholder='Full Name'
                  required
                  className='rounded-xl border border-slate-200 px-5 py-4 font-normal text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                />
              </label>
              <label className='grid gap-2 text-sm font-semibold text-slate-700'>
                Phone Number
                <input
                  name='phone'
                  type='tel'
                  autoComplete='tel'
                  placeholder='Phone Number'
                  required
                  className='rounded-xl border border-slate-200 px-5 py-4 font-normal text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                />
              </label>
              <label className='grid gap-2 text-sm font-semibold text-slate-700'>
                How can we help?
                <textarea
                  name='message'
                  rows={5}
                  placeholder='Tell us how we can help...'
                  required
                  className='rounded-xl border border-slate-200 px-5 py-4 font-normal text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                />
              </label>
              <button
                type='submit'
                className='rounded-xl bg-blue-700 py-4 font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200'
              >
                Send Message on WhatsApp
              </button>
            </div>
          </form>
        </div>

        <div className='mt-12 overflow-hidden rounded-3xl border border-slate-200 shadow-sm md:mt-16'>
          <div className='border-b border-slate-200 bg-white px-6 py-5'>
            <h3 className='text-lg font-semibold text-slate-900'>
              Find Our Head Office
            </h3>
            <p className='mt-1 text-sm leading-6 text-slate-500'>
              {HEAD_OFFICE}
            </p>
          </div>
          <div className='relative aspect-[16/9] w-full bg-slate-100 sm:aspect-[21/9]'>
            <iframe
              title='DE-INES Physiotherapy Head Office location'
              src={MAPS_EMBED}
              className='absolute inset-0 h-full w-full border-0'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              allowFullScreen
            />
          </div>
          <div className='bg-white px-6 py-4 text-center'>
            <a
              href={MAPS_LINK}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200'
            >
              <MapPin className='h-4 w-4' aria-hidden='true' />
              Open Head Office in Google Maps
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
