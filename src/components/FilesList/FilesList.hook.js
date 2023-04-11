import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchFilesList } from "../../store/slices/files";
import { useFilesListSelector } from "../../selectors/useFilesListSelector";

export const useFetchFilesList = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useFilesListSelector();
  useEffect(() => {
    dispatch(fetchFilesList());
  }, [dispatch]);

  return {
    data,
    isLoading,
    error,
  };
};
