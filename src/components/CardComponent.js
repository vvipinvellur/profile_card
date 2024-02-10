import React, { Fragment } from "react";
import { IconArrowRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function CardComponent({small, icon, name, link}) {

  const navigate = useNavigate()

  console.log(link)

  return (
    <div
    onClick={()=> navigate(link)}
    className={`w-full shadow-sm rounded-xl
    border border-default-100 px-4 py-5
    text-gray-800 cursor-pointer
    hover:border-[#0089f5] hover:text-[#0089f5]
    text-small flex ${small?'justify-center':'justify-between'}`}
    >
      {
        small?
        <div>{icon}</div>:
        <Fragment>
          <div className="flex gap-2 items-center ">{icon} {name}</div>
          <div><IconArrowRight size="18" color="#0089f5"/></div>
        </Fragment>
      }
    </div>
  );
}
