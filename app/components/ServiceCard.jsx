"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
      {/* Service Image Background */}
      {image && (
        <motion.div
          className="service-card-image-wrapper"
          animate={{ scale: isHovered ? 1.1 : 1.0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src={image} alt={title} className="service-card-image" />
        </motion.div>
      )}

      {/* Dark Overlay */}
      <motion.div
        className="service-card-overlay"
        animate={{ opacity: isHovered ? 0.45 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content Container */}
      <div className="service-card-content">
        {/* Icon and Number - Default State */}
        <motion.div
          className="service-card-header"
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="service-icon-premium">
            <Icon size={22} />
          </div>
          <p className="service-card-number">{String(index + 1).padStart(2, "0")}</p>
        </motion.div>

        {/* Title - Always Visible */}
        <motion.h3
          className="service-card-title"
          animate={{ color: isHovered ? "#ffffff" : "inherit" }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        {/* Description - Hover State with Fade-Up */}
        <motion.div
          className="service-card-description-wrapper"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
            pointerEvents: isHovered ? "auto" : "none",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <p className="service-card-description">{description}</p>
        </motion.div>

        {/* Learn More Button - Default/Hover Toggle */}
        <motion.div
          className="service-card-cta"
          animate={{
            opacity: isHovered ? 0 : 1,
            pointerEvents: isHovered ? "none" : "auto",
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="card-link">Learn more <ArrowUpRight size={15} /></span>
        </motion.div>
      </div>
    </motion.article>
  );
}
