import Counter from "@/islands/Counter.tsx";
import PageLayout from "@/components/PageLayout.tsx";

export default function LandingPage() {
  return (
    <PageLayout header="Landing Page">
      <Counter start={1} />
    </PageLayout>
  );
}
