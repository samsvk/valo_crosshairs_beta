import * as React from "react";
import { getCrosshairs, getCrosshairBySearch } from "../Data/Api/actions";
import useRender from "../Utils/useRender";
import Crosshair from "./Crosshair";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../Utils/Utils";
import { Paginate } from "./Paginate";
import Header from "../Components/Header";

export default () => {
  const Navigate = useNavigate();
  const query = useQuery();
  const page = query.get("page") || 1;
  const search = query.get("search");
  const [currentPage, setCurrentPage] = React.useState();
  const [crosshairs, setCrosshairs] = React.useState([]);

  React.useEffect(() => {
    if (search) {
      getCrosshairBySearch(search).then((res) => {
        setCrosshairs(res);
      });
      return;
    }

    if (page) {
      getCrosshairs(page).then((res) => {
        setCrosshairs(res);
        setCurrentPage(page);
        if (page > res.numberOfPages) {
          return Navigate("/");
        }
      });
      return;
    }
  }, [page, search]);

  useRender("App");
  return (
    <div className="container">
      <Header />
      <div className="crosshair__grid">
        {crosshairs?.data?.map((crosshair, index) => (
          <Crosshair key={index} crosshair={crosshair} />
        ))}
      </div>

      <Paginate
        numberOfPages={crosshairs.numberOfPages}
        currentPage={currentPage || crosshairs.currentPage}
        setCurrentPage={setCurrentPage}
        page={page}
      />
    </div>
  );
};
