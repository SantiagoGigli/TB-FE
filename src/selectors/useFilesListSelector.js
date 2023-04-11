import { useSelector } from "react-redux";

export const useFilesListSelector = () => {
  const {
    list = [],
    error = undefined,
    isLoading = false,
  } = useSelector((state) => state?.files);

  return {
    data: list,
    error,
    isLoading,
  };
};
