import { useEffect, useState } from "react";
import {
  requestRssByNewsPaper,
  requestScrap,
} from "@/lib/services/newspapers/newspapers.ts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Skeleton,
} from "@/components/ui";
import { Link } from "react-router-dom";

type RssData = {
  title: string;
  link: string;
  description: string;
};

type Rss = {
  id: number;
  url: string;
  category: string;
  newspaper_id: number;
  create_at: string;
};

const NewsCard = ({
  newspaper_id,
  newspaper_name,
}: {
  newspaper_id: number;
  newspaper_name: string;
}) => {
  const [loading, setLoading] = useState(false);
  const [rssList, setRssList] = useState<Rss[]>([]);
  const [rssDataList, setRssDataList] = useState<RssData[]>([]);
  const [selectRss, setSelectRss] = useState<Rss>({
    id: 0,
    url: "",
    category: "",
    newspaper_id: 0,
    create_at: "",
  });

  useEffect(() => {
    const getRssList = async (newspaper_id: number) => {
      try {
        setLoading(true);

        const rssList = await requestRssByNewsPaper(newspaper_id);
        const rssDataList = (await requestScrap(rssList[0].id)).item;

        setRssList(rssList);
        setRssDataList(rssDataList);
        setSelectRss(rssList[0]);
      } catch (e) {
        console.error(e.message);
      } finally {
        setLoading(false);
      }
    };

    getRssList(newspaper_id);
  }, [newspaper_id]);

  useEffect(() => {
    const getRssData = async (rss_id: number) => {
      try {
        setLoading(true);
        const rssDataList = (await requestScrap(rss_id)).item;
        setRssDataList(rssDataList);
      } catch (e) {
        console.error(e.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectRss.id !== 0) {
      getRssData(+selectRss.id);
    }
  }, [selectRss]);

  if (loading) {
    //TODO: Skeleton 작성
    return (
      <>
        <Skeleton className="h-2/3 w-96" />
      </>
    );
  }

  return (
    <>
      <Card className="h-2/3 w-96">
        <CardHeader>
          <CardTitle>{newspaper_name}</CardTitle>
          <CardDescription>
            <Select
              onValueChange={(value) => {
                setSelectRss(rssList.filter((rss) => rss.id === +value)[0]);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={selectRss.category} />
              </SelectTrigger>
              <SelectContent>
                {rssList.map((rss) => (
                  <SelectItem key={rss.id} value={rss.id + ""}>
                    {rss.category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col">
          {rssDataList.slice(0, 3).map((rssData, index) => (
            <div
              key={index}
              className="mb-4 gird grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0 border gap-2 h-20"
            >
              <Link target="_blank" rel="external" to={rssData.link}>
                <div className="space-y-1">
                  <p className="text-sm leading-none font-semibold hover:underline">
                    {rssData.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {rssData.description.length < 25
                      ? rssData.description
                      : rssData.description.substring(0, 22) + "..."}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default NewsCard;
