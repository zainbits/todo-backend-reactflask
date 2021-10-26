import "../stylesheets/Popup.css";

export const Popup = ({ trigger, children }) => {

    

  return trigger ? (
    <div className="block__popup">
      {children}
    </div>
  ) : (
    ""
  );
};
