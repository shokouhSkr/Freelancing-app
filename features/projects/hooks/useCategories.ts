import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../services/categoryService";

export const useCategories = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategory,
  });

  // {_id, title, enTitle,...}
  const { categories = [] } = data || {};

  // {value, label}
  const newCategories = categories.map((item: any) => ({
    label: item.title,
    value: item._id,
    // englishTitle: item.englishTitle,
  }));

  const transformedCategories = categories.map((item: any) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { isLoading, categories, transformedCategories };
};
