import PageHero from "../components/PageHero";

interface NotFoundProps {
  title?: string;
  message?: string;
}

const NotFound = ({
  title = "Page not found",
  message = "The page you requested could not be found.",
}: NotFoundProps) => (
  <PageHero
    eyebrow='404 — Page Not Found'
    title={title}
    description={message}
    actions={[{ label: "Return Home", to: "/" }]}
  />
);

export default NotFound;
