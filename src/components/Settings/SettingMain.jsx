import React from 'react';
import AccountSetting from './Accountsetting';
import SettingCard from './Settingcard'
import '../Settings/Setting.css';
import Navhead from '../Home/Navhead';

const SettingMain = () => {
  const title = {
    name: 'Account Setting',
    description:
      'He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to.',
  };
  
  const inputs = [
    {
      name: 'firstName',
      label: 'First name',
      value: '',
      type: 'text',
      colClass: 'col-sm-6 col-lg-4',
    },
    {
      name: 'lastName',
      label: 'Last name',
      value: 'Lanson',
      type: 'text',
      colClass: 'col-sm-6 col-lg-4',
    },
    {
      name: 'additionalName',
      label: 'Additional name',
      value: '',
      colClass: 'col-sm-6 col-lg-4',
    },
    {
      name: 'userName',
      label: 'User name',
      value: '@samlanson',
      colClass: 'col-sm-6',
    },
    {
      name: 'birthday',
      label: 'Birthday',
      value: '12/12/1990',
      colClass: 'col-lg-6',
    },
    {
      name: 'phoneNumber',
      label: 'Phone number',
      value: '(678) 324-1251',
      colClass: 'col-sm-6',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      value: 'sam@webestica.com',
      colClass: 'col-sm-6',
    },
    {
      name: 'overview',
      label: 'Overview',
      value: 'Interested has all Devonshire difficulty gay assistance joy. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.',
      type: 'textarea',
      rows: 4,
    },
  ];

  const handleSubmit = (values) => {
    console.log(values);
    console.log('Form submitted');
    // Perform any additional processing or API calls here
  };
  
  return (
    <div className="bg-dark containerSetting">
      <div className="row">
        <div className="col-12">
          <Navhead />
        </div>
      </div>
      <div className="bg-dark container-fluid">
        <div className="row">
          <div className="col-lg-3 d-none d-lg-block mt-5 mb-5">
            <SettingCard />
          </div>
          <div className="col-12 col-lg-8 col-md-12 ms-md-4 mt-5">
            <AccountSetting inputs={inputs} title={title} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingMain;
