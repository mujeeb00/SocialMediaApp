import React from 'react';
import './Setting.css'

const Accountsetting = (props) => {
  const { firstName, lastName, additionalName, userName, birthday, phoneNumber, email, overview } = props;

  return (
    <div className="card mb-4 main_container text-light">
      <div className="card-header border-0 pb-0">
        <h1 className="h5 card-title">Account Settings</h1>
        <p className="mb-0">
          He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy.
          Unaffected at ye of compliment alteration to.
        </p>
      </div>
      <div className="card-body ">
        <form className="row g-3">
          <div className="col-sm-6 col-lg-4">
            <label className="form-label">First name</label>
            <input type="text" className="form-control innercontainer text-light" placeholder="" value={firstName} />
          </div>
          <div className="col-sm-6 col-lg-4">
            <label className="form-label">Last name</label>
            <input type="text" className="form-control innercontainer text-light" placeholder="" value={lastName} />
          </div>
          <div className="col-sm-6 col-lg-4">
            <label className="form-label">Additional name</label>
            <input type="text" className="form-control innercontainer text-light" placeholder="" value={additionalName} />
          </div>
          <div className="col-sm-6">
            <label className="form-label">User name</label>
            <input type="text" className="form-control innercontainer text-light" placeholder="" value={userName} />
          </div>
          <div className="col-lg-6">
            <label className="form-label">Birthday</label>
            <input type="text" className="form-control flatpickr flatpickr-input innercontainer text-light" value={birthday} readOnly="readonly" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input text-light" type="checkbox" value="" id="allowChecked" checked />
              <label className="form-check-label" htmlFor="allowChecked">
                Allow anyone to add you to their team
              </label>
            </div>
          </div>
          <div className="col-sm-6">
            <label className="form-label">Phone number</label>
            <input type="text" className="form-control innercontainer text-light" placeholder="" value={phoneNumber} />
            <a className="btn btn-sm btn-dashed rounded mt-2" href="#!">
              <i className="bi bi-plus-circle-dotted me-1" />
              Add new phone number
            </a>
          </div>
          <div className="col-sm-6">
            <label className="form-label">Email</label>
            <input type="text" className="form-control innercontainer text-light" placeholder="" value={email} />
            <a className="btn btn-sm btn-dashed rounded mt-2" href="#!">
              <i className="bi bi-plus-circle-dotted me-1" />
              Add new email address
            </a>
          </div>
          <div className="col-12">
            <label className="form-label">Overview</label>
            <textarea className="form-control innercontainer text-light" rows="4" placeholder="Description (Required)" value={overview} />
            <small>Character limit: 300</small>
          </div>
          <div className="col-12 text-end">
            <button type="submit" className="btn btn-sm btn-primary mb-0">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Accountsetting;
