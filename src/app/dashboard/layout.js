import DashboardLayout from "@/components/layout/DashboardLayout/DashboardLayout";


const dashboardLayout = ({children}) => {
    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    );
};

export default dashboardLayout;