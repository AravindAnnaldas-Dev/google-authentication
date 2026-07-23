import { useQuery } from "@tanstack/react-query";
import { getUsersList } from "../api/users";

export const useUsersList = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: getUsersList,
  });
