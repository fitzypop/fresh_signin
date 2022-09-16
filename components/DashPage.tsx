import PageLayout from "@/components/PageLayout.tsx";

interface DashProps {
  user?: Record<string, unknown>;
}
export default function DashPage(_props: DashProps) {
  return <PageLayout header="Dashboard"></PageLayout>;
}
