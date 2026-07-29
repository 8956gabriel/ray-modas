import AdminNav from "@/components/AdminNav";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-ivory">
      <AdminNav />
      <div className="flex-1 p-8 md:p-10">{children}</div>
    </div>
  );
}
