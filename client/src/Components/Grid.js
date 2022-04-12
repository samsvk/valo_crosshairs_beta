import * as React from "react";
import { getCrosshairs, getCrosshairBySearch } from "../Data/Api/actions";
import Crosshair from "./Crosshair";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../Utils/Utils";
import { Paginate } from "./Paginate";
import Header from "../Components/Header";
import useRender from "../Utils/useRender";
import useLocalStorage from "../Utils/useLocalstorage";

export default () => {
  const Navigate = useNavigate();
  const query = useQuery();
  const page = query.get("page") || 1;
  const search = query.get("search");
  const [currentPage, setCurrentPage] = React.useState();
  const [crosshairs, setCrosshairs] = React.useState([]);
  const [liked, setLiked] = useLocalStorage("liked", []);

  const likeCrosshair = React.useCallback((id) => {
    setLiked((prevLiked) => {
      return [...prevLiked, id];
    });
  }, []);

  const removeLiked = React.useCallback((id) => {
    setLiked((prevLiked) => {
      return prevLiked.filter((l) => l !== id);
    });
  }, []);

  React.useEffect(() => {
    if (search) {
      getCrosshairBySearch(search).then((res) => {
        setCrosshairs(res);
      });
      return;
    }

    if (page) {
      getCrosshairs(page).then((res) => {
        if (page > res.numberOfPages) Navigate("/");
        setCrosshairs(res);
        setCurrentPage(page);
      });
      return;
    }
  }, [page, search]);

  return (
    <div className="container">
      <Header />
      <Crosshairs
        crosshairs={crosshairs}
        likeCrosshair={likeCrosshair}
        removeLiked={removeLiked}
      />
      <Paginate
        numberOfPages={crosshairs.numberOfPages}
        currentPage={currentPage || crosshairs.currentPage}
        setCurrentPage={setCurrentPage}
        page={page}
      />
    </div>
  );
};

const Crosshairs = React.memo(
  ({ crosshairs, search, likeCrosshair, removeLiked }) => {
    return crosshairs?.data?.length > 0 ? (
      <>
        <div className="crosshair__grid">
          {crosshairs?.data?.map((crosshair, index) => {
            return (
              <Crosshair
                key={index}
                crosshair={crosshair}
                likeCrosshair={likeCrosshair}
                removeLiked={removeLiked}
              />
            );
          })}
        </div>
      </>
    ) : (
      <div className="noresults">
        No results found using filter:{" "}
        {search?.charAt(0).toUpperCase() + search?.slice(1)}
      </div>
    );
  }
);
