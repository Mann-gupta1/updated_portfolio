import Head from 'next/head';

const SEO = ({
  title = "Mann Gupta ",
  description = "Explore Mann Gupta's portfolio showcasing innovative software development projects, AI/ML solutions, and creative technical implementations.",
  image = "/default-image.jpg", // Replace with a valid image path
  url = "https://gmann.vercel.app/",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default SEO;
