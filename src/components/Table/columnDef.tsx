import { ColumnDef } from "@tanstack/react-table";

export type Subscribe = {
  number: number;
  newspaper_name: string;
  rss_category: string;
  hour: number;
  minute: number;
};

export const columns: ColumnDef<Subscribe>[] = [
  {
    accessorKey: "number",
    header: "No.",
  },
  {
    accessorKey: "newspaper_name",
    header: "Newspaper",
  },
  {
    accessorKey: "rss_category",
    header: "Category",
  },
  {
    accessorKey: "hour",
    header: "Hour",
  },
  {
    accessorKey: "minute",
    header: "Minute",
  },
];
