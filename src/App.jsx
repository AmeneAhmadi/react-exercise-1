import Part4 from "./components/Part4";
import Loader from "./components/loader/Loader";
import { useState } from "react";
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoading = () => {
    setIsLoading(false);
  };

  return <>{isLoading ? <Loader onFinish={handleLoading} /> : <Part4 />}</>;
}
