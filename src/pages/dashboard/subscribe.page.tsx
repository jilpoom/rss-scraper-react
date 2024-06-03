import { useEffect, useState } from "react";
import { requestSubscribesById } from "@/lib/services/subscribes/subscribes.ts";
import { useRecoilState } from "recoil";
import { userState } from "@/states/recoil-states.ts";
import { columns, Subscribe } from "@/components/Table/columnDef.tsx";
import SubscribeTable from "@/components/Table/subscribeTable.tsx";

const SubscribePage = () => {
  const [user] = useRecoilState(userState);
  const [loading, setLoading] = useState<boolean>(false);
  const [subscribes, setSubscribes] = useState<Subscribe[]>([]);

  useEffect(() => {
    const getSubscribes = async () => {
      let subscribes: Subscribe[];
      if (user.sub) {
        setLoading(true);

        subscribes = (await requestSubscribesById(user.sub)).map(
          (subscribe, index: number) => {
            const { cron, ...rest } = subscribe;

            const timer = cron.split(" ");

            return {
              number: index + 1,
              newspaper_name: "0000",
              rss_category: rest.rss_id,
              hour: +timer[1],
              minute: +timer[0],
            };
          },
        );

        setSubscribes(subscribes);
        setLoading(false);
      }
    };

    getSubscribes();
  }, []);

  return (
    <div>
      <SubscribeTable columns={columns} data={subscribes} />
    </div>
  );
};

export default SubscribePage;
