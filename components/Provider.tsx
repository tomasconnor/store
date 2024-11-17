import DataContextProvider from "@/contexts/DataContext";
import type { Provider } from "@/types";

export default function Provider({ children }: Provider) {
  return <DataContextProvider>{children}</DataContextProvider>;
}
