import Axios, { AxiosResponse } from "axios";
import useSWR from "swr";

export function useSWRAxios<T> (url: string) {
    const result = useSWR<AxiosResponse<T>>(url, Axios.get);
    return {
        response: result.data,
        error: result.error
    }
}