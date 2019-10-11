import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export default connect(
  state => state,
  actionCreators
)(Form);

export function Form ({ changeInput }) {

  const onChangeHandler = (e) => {
    changeInput(e.target)
   }
  
   const onSubmitHandler = (e) => {
     e.preventDefault();
     alert('submitting')
   }
    return (
      <div>
        <form onSubmit={onSubmitHandler}>
          <label>
            Name:
            <input type="text" name="name" value={state.firstName} onChange={onChangeHandler} />
          </label>

          <label>
            Age:
            <input type="number" name="age" value={state.lastName} onChange={onChangeHandler} />
          </label>

          <label>
            heigth:
            <input type="text" name="height" value={state.email} onChange={onChangeHandler} />
          </label>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  
}