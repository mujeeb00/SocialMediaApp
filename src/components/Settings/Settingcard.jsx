import './Setting.css';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillBellFill } from 'react-icons/bs';

const Settingcard = () => {
  return (
    <div className="card-bodySetting rounded">
      <ul className="nav nav-tabs flex-column border rounded p-2" role="tablist">
        <li className="nav-item pt-3" role="presentation">
          <a className="nav-link d-flex mb-0" href="#nav-setting-tab-2" data-bs-toggle="tab" aria-selected="false" tabIndex="-1" role="tab">
            <FaUserAlt />
            <span className="ms-2">Account</span>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link d-flex mb-0" href="#nav-setting-tab-2" data-bs-toggle="tab" aria-selected="false" tabIndex="-1" role="tab">
            <BsFillBellFill />
            <span className="ms-2">Notification</span>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link d-flex mb-0" href="#nav-setting-tab-3" data-bs-toggle="tab" aria-selected="false" tabIndex="-1" role="tab">
            <BsFillBellFill />
            <span className="ms-2">Privacy and safety</span>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link d-flex mb-0" href="#nav-setting-tab-4" data-bs-toggle="tab" aria-selected="false" tabIndex="-1" role="tab">
            <BsFillBellFill />
            <span className="ms-2">Communications</span>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link d-flex mb-0" href="#nav-setting-tab-5" data-bs-toggle="tab" aria-selected="false" tabIndex="-1" role="tab">
            <BsFillBellFill />
            <span className="ms-2">Messaging</span>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link d-flex mb-0" href="#nav-setting-tab-6" data-bs-toggle="tab" aria-selected="false" tabIndex="-1" role="tab">
            <BsFillBellFill />
            <span className="ms-2">Close account</span>
          </a>
        </li>
        <li className="nav-item d-flex" role="presentation">
          <hr />
          <a className="nav-link text-center container me-4" href="#nav-setting-tab-6" data-bs-toggle="tab" aria-selected="false" tabIndex="-1" role="tab">
            View profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Settingcard;