import { ReactNode } from "react";

const DashboardLayout = ({
  children,
  notifications,
  analytics,
  dashboard,
}: {
  children: ReactNode;
  notifications: ReactNode;
  analytics: ReactNode;
  dashboard: ReactNode;
}) => {
  return (
    <>
      <div className="grid p-4 text-black grid-cols-1 min-h-screen gap-4">
        <div className="w-full bg-blue-100 p-4 rounded-lg">{notifications}</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full bg-green-100 p-4 rounded-lg">{analytics}</div>
          <div className="w-full bg-purple-100 p-4 rounded-lg">{dashboard}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
