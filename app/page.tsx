import DashboardCard from "@/components/dashboard/DashboardCard";
import { Newspaper } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between gap-5 mb-5"></div>
      <DashboardCard
        title="Posts"
        count={100}
        icon={<Newspaper className="text-slate-500" size={72} />}
      ></DashboardCard>
    </>
  );
}
