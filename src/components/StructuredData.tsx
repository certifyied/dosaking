import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type?: "restaurant" | "organization" | "both";
}

export const StructuredData = ({ type = "both" }: StructuredDataProps) => {
  const baseUrl = "https://dosaking.com";
  const logoUrl = `${baseUrl}/dosaking_logo.png`;

  // Restaurant/LocalBusiness Schema
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${baseUrl}#restaurant`,
    "name": "Dosa King Palace",
    "alternateName": "Dosa King",
    "url": baseUrl,
    "logo": logoUrl,
    "image": logoUrl,
    "description": "Best South Indian restaurant in Ottawa, Canada. Serving authentic dosas, idlis, sambar, and traditional South Indian cuisine.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "93 Holland Avenue",
      "addressLocality": "Ottawa",
      "addressRegion": "Ontario",
      "addressCountry": "CA",
      "postalCode": ""
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "45.4112",
      "longitude": "-75.6981"
    },
    "telephone": "+16137908316",
    "email": "info@dosaking.com",
    "priceRange": "$$",
    "servesCuisine": "South Indian",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "06:00",
        "closes": "23:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "50000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.instagram.com/dosa_king_ottawa"
    ]
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}#organization`,
    "name": "Dosa King Palace",
    "alternateName": "Dosa King",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": logoUrl,
      "width": 200,
      "height": 200
    },
    "image": logoUrl,
    "description": "Dosa King Palace is the best South Indian restaurant in Ottawa, Canada, offering authentic dosas, idlis, sambar, and delicious South Indian cuisine.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "93 Holland Avenue",
      "addressLocality": "Ottawa",
      "addressRegion": "Ontario",
      "addressCountry": "CA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-613-790-8316",
      "contactType": "customer service",
      "email": "info@dosaking.com",
      "areaServed": "CA",
      "availableLanguage": ["en", "ta", "te", "hi"]
    },
    "sameAs": [
      "https://www.instagram.com/dosa_king_ottawa"
    ]
  };

  const schemas = [];
  if (type === "restaurant" || type === "both") {
    schemas.push(restaurantSchema);
  }
  if (type === "organization" || type === "both") {
    schemas.push(organizationSchema);
  }

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
        />
      ))}
    </Helmet>
  );
};
