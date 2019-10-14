import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export default connect(
  state => state,
  actionCreators
)(Smurfs);

export function Smurfs({ smurfsData, getSmurfsData }) {
  useEffect(() => {
    getSmurfsData();
  }, []);
  // const searchedData = search
  //   ? population.data.filter(item => search === item["ID Year"].toString())
  //   : population.data;
  console.log(smurfsData);
  return (
    <div className="component">
      <h1>SMURFS</h1>
      {smurfsData
        ? smurfsData.map(item => {
            return (
              <div className="pop-data" key={item["id"]}>
                <p className="para">Name: {item["name"]}</p>
                <p className="para">Age: {item["age"]}</p>
                <p className="para">Height: {item["height"]}</p>
              </div>
            );
          })
        : null}
    </div>
  );
}
