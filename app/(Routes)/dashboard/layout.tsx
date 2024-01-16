import SideBar from '@/app/Components/Sidebar';
import Header from '@/app/Components/Header';
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>
        <div className="grid grid-cols-6 min-h-screen gap-5">
          <section className="col-span-1">
            <SideBar />
          </section>
          <section className="col-span-5">{children}</section>
        </div>
      </main>
    </>
  );
};

export default RootLayout;
