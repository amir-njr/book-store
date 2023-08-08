import Layout from "@/components/layout/Layout";


export default function Home({children}) {
  return (
    <main>
      <Layout>
        {children}
      </Layout>
    </main>
  )
}
