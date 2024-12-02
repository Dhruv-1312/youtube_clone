import { AppContext } from "./context/ContextApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHeader from "./layouts/PageHeader";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import CategoryPills from "./components/CategoryPills";
import { categories } from "./data/home";
import { useState } from "react";
import { SidebarProvider } from "./context/SidebarContext";
import { Sidebar } from "./layouts/SideBar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  return (
    <AppContext>
      <BrowserRouter>
       <SidebarProvider >
       <div className="max-h-screen flex flex-col">
          <PageHeader />
          <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
            <Sidebar />
            <div className="overflow-x-hidden px-8 pb-4">
              <div className="sticky top-0 bg-white z-10 pb-4">
                <CategoryPills
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelect={setSelectedCategory}
                />
              </div>
              <div>
                <Routes>
                  <Route path="/" element={<Feed />} />
                  <Route
                    path="/searchResult/:searchQuery"
                    element={<SearchResult />}
                  />
                  <Route path="/video/:id" element={<VideoDetails />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
       </SidebarProvider>
      </BrowserRouter>
    </AppContext>
  )
}

export default App

