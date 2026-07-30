"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ title, description, Icon, index, image }) {
  return (
    <motion.article
      className="service-card-premium"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ y: -8 }}
    >
      {image && (
        <div className="service-card-image-wrapper">
          <Image src={image} alt={title} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" className="service-card-image" />
        </div>
      )}

      <div className="service-card-content">
        <div className="service-card-header">
          <div className="service-icon-premium">
            <Icon size={22} />
          </div>
        </div>

        <div className="service-card-copy">
          <h3 className="service-card-title">{title}</h3>
          <p className="service-card-description">{description}</p>
          <a className="service-card-link" href="#contact">Learn More <ArrowRight size={16} /></a>
        </div>
      </div>
    </motion.article>
  );
}
