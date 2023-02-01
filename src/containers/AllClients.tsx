import { useEffect, useState } from "react";
import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import {Loader,Client, PagignBtn} from "../components";

type Props = {
  users: [];
  loading: boolean;
  err: any;
};

const AllClients = ({}) => {
  const [page, setPage] = useState(1);

  const getClients = async (pageno:number) => {
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/users?_page=${pageno}&_limit=3`
    );
    return data;
  };

  const queryClient = new QueryClient();

  useEffect(() => {
    if (page < Math.round(data?.count / page)) {
      //prefetch next page
      const nextpage = page + 1;
      queryClient.prefetchQuery(["clients", nextpage], () =>
        getClients(nextpage)
      );
    }
  }, [page]);

  const { data, isLoading, error,isError } = useQuery(["clients", page], () =>
    getClients(page),{keepPreviousData:true}
  );

  console.log(data);

  if(isError){
    return (
      <div>
        ups we have an Error: {`${error}`}
      </div>
    )
  }

  return (
    <div className="flex flex-col min-w-screen overflow-hidden  gap-10 items-center p-5">
      {isLoading ? (
      <Loader message="Loading ..." />
      ) : (
        <>
          <div className="flex w-full flex-col gap-5">
            {data?.map((u: any) => (
              <Client u={u} />
            ))}
          </div>
          {/* // pagignation */}
          <PagignBtn page={page} setPage={setPage} />
        </>
      )}
    </div>
  );
};

export default AllClients;
