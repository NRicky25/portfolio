import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="lg:max-w-7xl mx-auto">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
            className={`
            ${i === 0 ? "lg:col-span-1 md:col-span-4" : ""}
            ${i === 1 ? "lg:col-span-2 lg:row-span-2 md:col-span-2" : ""} 
            ${i === 2 ? "lg:col-span-1 lg:row-span-2  md:col-span-2" : ""} 
            ${i === 3 ? "lg:col-span-1 lg:row-span-2 md:col-span-2" : ""} 
            ${i === 4 ? "lg:col-span-2 md:col-span-2" : ""}
            ${i === 5 ? "lg:col-span-1 md:col-span-4" : ""} `}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
