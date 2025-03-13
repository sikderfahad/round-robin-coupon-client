import React from "react";
import ReactiveButton from "reactive-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Button = ({ state, onClickHandler }) => {
  return (
    <ReactiveButton
      style={{ fontWeight: 700, margin: "12px 0px", cursor: "pointer" }}
      buttonState={state}
      idleText="Claim Your Coupon!"
      loadingText={
        <span>
          <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
          Loading...
        </span>
      }
      successText={
        <span>
          <FontAwesomeIcon icon={faThumbsUp} className="mr-2 animate-thumbs" />
          Done!
        </span>
      }
      errorText="Error"
      animation={true}
      shadow={true}
      rounded={true}
      color="green"
      onClick={onClickHandler}
    />
  );
};

export default Button;
