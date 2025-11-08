"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ProjectCard({
  title,
  des,
  img,
  iconLists,
  link,
}: {
  title: string;
  des: string;
  img: string;
  iconLists?: string[];
  link: string;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="10"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
	    {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="5"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
	    {des}
        </CardItem>
        <CardItem
          translateZ="5"
          className="w-full mt-4"
        >
          <img
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-center items-center mt-20">
	  <a href={link}>
	      <CardItem
		translateZ={5}
		translateX={5}
		as="button"
		className="cursor-pointer px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
	      >
		View Live Demo
	      </CardItem>
	    </a>
        </div>
      </CardBody>
    </CardContainer>
  );
}

