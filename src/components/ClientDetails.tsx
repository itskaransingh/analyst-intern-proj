import React, { ReactNode } from "react";

type Props = {
  u: any;
};



const ClientDetails = ({ u }: Props) => {
  const address = Object.entries(u.address);
  const client = Object.entries(u);
  const company = Object.entries(u.company);
  console.log(client);

  const ignoreterms = ['address','company','id','geo']

  return (
    <div className="p-5 border border-base-100">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col ">
          <div className="font-semibold">Description</div>
          <div className="p-2 text-primary-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            ab nam ex libero ad labore totam distinctio dignissimos! Facere
            minus itaque debitis impedit in beatae error optio voluptas cum
            quae.
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-semibold">Company</div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-2">
            {company.map(([key, val]) => (
              <div className="flex flex-col pt-2">
                <div className="">{key}</div>
                <div className="text-lg text-primary-content">{val as ReactNode}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-semibold">Client</div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-2">
            {client.filter((u)=>{
               return  !ignoreterms.includes(u[0])
            }).map(([key, val]) => (
              <div className="flex flex-col pt-2">
                <div className="">{key}</div>
                <div className="text-lg text-primary-content">{val as ReactNode}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-semibold">Address</div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  p-2">
            {address.filter((a)=>{
               return  !ignoreterms.includes(a[0])
            }).map(([key, val]) => (
              <div className="flex flex-col pt-2">
                <div className="">{key}</div>
                <div className="text-lg text-primary-content">{val as ReactNode}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
