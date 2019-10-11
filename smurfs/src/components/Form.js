import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export default connect(
  state => state,
  actionCreators
)(Form);

export function Form({ form, changeInput, postFormData }) {
  const onChangeHandler = e => {
    changeInput(e.target);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    postFormData(form)
  };
  return (
    <div>
      <form className= 'form' onSubmit={onSubmitHandler}>
        <label className='form-data'>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onChangeHandler}
            id="form-id-1"
          />
        </label >

        <label className='form-data'>
          Age:
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={onChangeHandler}
            className="form-data-mid"
          />
        </label >

        <label className='form-data'>
          heigth:
          <input
            type="text"
            name="height"
            value={form.height}
            onChange={onChangeHandler}
            id="form-id"
          />
        </label>
        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
    </div>
  );
}
