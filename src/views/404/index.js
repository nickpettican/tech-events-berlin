import React from "react";
import "./styles.css";
import SearchAppBar from "../../components/SearchAppBar";

/**
 * 404 component is the 404 page displayed when the
 * user queries for a non-existent page
 */
export default () => {
  return (
    <div>
      <SearchAppBar />
      <div className="NotFound">
        <h3>Pages? Where we're going we don't need pages...</h3>
      </div>
    </div>
  );
};
