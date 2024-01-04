import Header from 'src/components/layout/Header/Header'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>

      <footer className="bg-white text-gray-800 py-4 rounded-t-lg shadow-md">
        <div className="container mx-auto flex justify-center">
          ChatterOrbit © {new Date().getFullYear()} - All Rights Reserved
        </div>
      </footer>
    </>
  )
}

export default MainLayout
