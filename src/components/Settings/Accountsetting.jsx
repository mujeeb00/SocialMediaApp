import React from 'react';

const Accountsetting = ({ inputs,title}) => {
  return (
    <div className='mainContainer rounded'>
      <h4 className='text-light mb-4'>{title.name}</h4>
      <p className='text-secondary'>
        {title.description}
      </p>
      <div className="card-body">
        <form className="row">
          {inputs.map((input, index) => (
            <div className={input.colClass} key={index}>
              <label className="form-label label ">{input.label}</label>
              {input.type === 'textarea' ? (
                <textarea
                  className="form-control text-secondary bg-dark border-0"
                  rows={input.rows}
                  placeholder={input.placeholder}
                  defaultValue={input.value}
                />
              ) : (
                <input
                  type={input.type}
                  className="form-control bg-dark border-0"
                  placeholder={input.placeholder}
                  defaultValue={input.value}
                />
              )}
              {input.helperText && <small className="text-secondary">{input.helperText}</small>}
            </div>
          ))}
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
