import React from "react";
import servicesData from "../data/ServicesData";
import ServicePage from "@/components/ServicePage";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}


const Service = ({ params }) => {
  const { slug } = params;

  const service = servicesData.find((service) => service.slug === slug);

 

  return (
    <ServicePage
      title={service.title}
      description={service.description}
      imageUrl={service.imageUrl}
    />
  );
};

export default Service;
