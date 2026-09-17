import { Link } from "react-router-dom";
import Container from "../components/Container";

interface NotFoundProps {
  title?: string;
  message?: string;
}

const NotFound = ({
  title = "Page not found",
  message = "The page you requested could not be found.",
}: NotFoundProps) => (
  <section className='flex min-h-[60vh] items-center py-24'>
    <Container>
      <div className='mx-auto max-w-2xl text-center'>
        <p className='text-sm font-bold uppercase tracking-[0.2em] text-blue-700'>
          404
        </p>
        <h1 className='mt-4 text-4xl font-bold text-slate-900 md:text-6xl'>
          {title}
        </h1>
        <p className='mt-6 text-lg leading-8 text-slate-600'>{message}</p>
        <Link
          to='/'
          className='mt-8 inline-flex rounded-full bg-blue-700 px-7 py-3.5 font-bold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200'
        >
          Return home
        </Link>
      </div>
    </Container>
  </section>
);

export default NotFound;
