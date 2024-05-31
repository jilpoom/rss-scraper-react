import { useEffect, useState } from "react";
import { requestNewsPapers } from "@/lib/services/newspapers/newspapers.ts";
import NewsCard from "@/components/Card/newsCard.tsx";

type Newspaper = {
  id: number;
  name: string;
  create_at: string;
};

const News = () => {
  const [newspaperList, setNewspaperList] = useState<Newspaper[]>([]);

  useEffect(() => {
    const getNewspapers = async () => {
      const newspapers = await requestNewsPapers();
      setNewspaperList(newspapers);
    };

    getNewspapers();
  }, []);

  return (
    <div className="flex justify-center h-[560px] items-center gap-10">
      {newspaperList.map((newspaper) => (
        <NewsCard
          key={newspaper.id}
          newspaper_id={newspaper.id}
          newspaper_name={newspaper.name}
        />
      ))}
    </div>
  );
};

export default News;
