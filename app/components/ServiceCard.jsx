"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ServiceCard({ title, description, Icon, index, image }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className="service-card-premium"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.04 }}
    >
      {image && (
        <motion.div
          className="service-card-image-wrapper"
          animate={{ scale: isHovered ? 1.08 : 1.0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src={image} alt={title} className="service-card-image" />
        </motion.div>
      )}

      <motion.div
        className="service-card-overlay"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="service-card-content">
        <motion.div
          className="service-card-header"
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="service-icon-premium">
            <Icon size={22} />
          </div>
        </motion.div>

        <div className="service-card-copy">
          <motion.h3
            className="service-card-title"
            animate={{ color: isHovered ? "#ffffff" : "#0b1f3a" }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>

          <motion.div
            className="service-card-description-wrapper"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 14 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <p className="service-card-description">{description}</p>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
