import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
};

export default function SEO({ title, description, canonical }: SEOProps) {
  const baseUrl = "https://honeyhivemontessorihouse.com";
  const url = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta
        property="og:image"
        content={`${baseUrl}/honey-hive-preview.png`}
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`${baseUrl}/honey-hive-preview.png`}
      />
    </Helmet>
  );
}
