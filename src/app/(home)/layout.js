import Layout from "@/components/layout/Layout";
const layout = ({ children }) => {
  return (
    <Layout>
      <div className="container mx-auto">{children}</div>
    </Layout>
  );
};

export default layout;
