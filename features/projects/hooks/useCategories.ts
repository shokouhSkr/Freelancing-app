import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../services/categoryService";

export const useCategories = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategory,
  });

  // {_id, title, enTitle,...}
  const { categories: rawCategories = [] } = data || {};

  // {value, label}
  const categories = rawCategories.map((item: any) => {
    label: item.title;
    value: item._id;
  });

  const transformedCategories = rawCategories.map((item: any) => {
    label: item.title;
    value: item.englishTitle;
  });

  return { isLoading, categories, transformedCategories };
};
