import React, { useState } from "react";
import ClientDetails from "./ClientDetails";

type Props = {
  u: any;
};

const Client = ({ u }: Props) => {

const [showdetails, setShowdetails] = useState(false)

  const basicdetails = [
    {
      title: "Company Name",
      indata: u.company.name,
    },
    {
      title: "Client",
      indata: u.name,
    },
    {
      title: "Contact",
      indata: u.email,
    },
    {
      title: "City",
      indata: u.address.city,
    },
   
  ];



  return (
    <div className="bg-base-300 w-full hover:shadow-xl hover:border-primary hover:border rounded-md">
      <div className="flex flex-col py-4 px-5 gap-2">
        <div className="flex lg:flex-row flex-col gap-3 lg:px-3 lg:py-10 justify-between  lg:items-center">
          {basicdetails.map((bd) => (
            <div className="flex flex-col">
              <h3 className="text-base ">{bd.title}</h3>
              <p className="text-primary-content text-lg">{bd.indata}</p>
            </div>
          ))}
          <button onClick={()=> setShowdetails((x)=> !x)} className="btn  btn-primary">
                {showdetails? "Hide Details" : "Show Details"}
          </button>
        </div>
        {
          showdetails &&  <ClientDetails u={u} />
        }
      </div>
    </div>
  );
};

export default Client;
