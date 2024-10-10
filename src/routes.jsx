import App from "./App";
import Tasks from "./Tasks/Tasks";
import Gallery from "./Gallery/Gallery";
import Table from "./Table/Table";
import Error from "./Error";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <Tasks />,
        index: true,
      },
      {
        element: <Gallery />,
        path: "gallery",
      },
      {
        element: <Table />,
        path: "table",
      },
      {
        element: <Error />,
        path: "*",
      },
    ],
  },
];
export default routes;
