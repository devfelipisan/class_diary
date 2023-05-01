import useSWR from "swr";

export const UseGet = <Data = any>(
  endpoint: string,
  fetcher = async (endpoint: string, option?: RequestInit | undefined) => {
    const response = await fetch(endpoint, option);
    if (!response.ok) {
      const error = new Error("An error occurred while fetching the data.");
      throw error;
    }
    const data = await response.json();
    return data;
  }
) => {
  const { data, error, mutate } = useSWR<Data>(endpoint, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
