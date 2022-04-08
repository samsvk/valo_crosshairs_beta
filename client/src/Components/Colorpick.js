import * as React from "react";

export default () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="color">
      <div className="color__selector">
        <ul>
          <li className="color__selector__item white"></li>
          <li className="color__selector__item green"></li>
          <li className="color__selector__item yellowgreen"></li>
          <li className="color__selector__item greenyellow"> </li>
          <li className="color__selector__item yellow"></li>
          <li className="color__selector__item cyan"></li>
          <li className="color__selector__item pink"></li>
          <li className="color__selector__item red"></li>
        </ul>
      </div>
      <div className="color__picker"></div>
    </div>
  );
};
