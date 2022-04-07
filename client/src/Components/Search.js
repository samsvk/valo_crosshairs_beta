import * as React from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default () => {
  const inputRef = React.useRef();
  const Navigate = useNavigate();

  function handleCancel() {
    Navigate(`/`);
    inputRef.current.value = "";
  }

  return (
    <>
      <form
        className="search__container"
        onSubmit={(e) => {
          e.preventDefault();
          return Navigate(`/?search=${inputRef.current.value}`);
        }}
      >
        <input
          ref={inputRef}
          className="search__container__input"
          placeholder="Search by player name..."
        />
        {inputRef?.current?.value?.length > 1 && (
          <span
            className="search__container__close"
            onClick={() => handleCancel()}
          >
            <IoClose style={{ verticalAlign: "middle" }} />
          </span>
        )}
        <button className="search__container__button" type="submit">
          <IoSearch />
        </button>
      </form>
    </>
  );
};
