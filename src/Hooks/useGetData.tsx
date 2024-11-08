import { useEffect, useState } from "react";

const useGetData = (url: string) => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDatas(data?.todos))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return { loading, datas };
};
export default useGetData;
