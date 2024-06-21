
import {  Amount_data } from "../components/amount/amount";
import { Category } from "../components/category/category";
import { BarChart } from "../components/chart/chart";
import { Datatable } from "../components/datatable/datatable";
import { Home } from "../components/home/home"
import { Navbar } from "../components/navbar/navbar"
import "./layout.scss"
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),

  },
  {
    path: "data",
    element: (
      <Datatable />
    )
  },
  {
    path: "sales",
    element: (
      <>
      <Amount_data />
      
      </>
    )
  },
  {
    path: "Statistics",
    element: (
      
      <BarChart/>
    )
  },
  

]);
function App() {


  return (
    <div className="layout">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
