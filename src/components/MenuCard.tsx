import { motion } from "framer-motion";

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
}

export const MenuCard = ({ name, description, price, image, tag }: MenuCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {tag && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
              {tag}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <span className="text-primary font-bold text-lg whitespace-nowrap">
            {price}
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-1 ring-primary/30" />
    </motion.div>
  );
};
