import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import axiosInstance from "./axios";

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

const postFetcher = (url: string, { arg }: { arg: any }) =>
  axiosInstance.post(url, arg).then((res) => res.data);

export const baseResource = {
  useGet: (url: string | boolean) =>
    useSWR(typeof url === "string" ? url : false, fetcher),
  usePost: (url: string | boolean) =>
    useSWRMutation(typeof url === "string" ? url : false, postFetcher),
};
