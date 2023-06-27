import React from 'react'
import Accountsetting from './Accountsetting'
import Settingcard from './Settingcard'
import '../Settings/Setting.css'
import Navhead from '../Home/Navhead'

const SettingMain = () => {

  const title = {
    name: 'Account Setting',
    description:
      'He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to.',
  };

  
  const inputs = [
    {
      label: 'First name',
      value: 'Sam',
      colClass: 'col-sm-6 col-lg-4',
    },
    {
      label: 'Last name',
      value: 'Lanson',
      colClass: 'col-sm-6 col-lg-4',
    },
    {
      label: 'Additional name',
      value: '',
      colClass: 'col-sm-6 col-lg-4',
    },
    {
      label: 'User name',
      value: '@samlanson',
      colClass: 'col-sm-6',
    },
    {
      label: 'Birthday',
      value: '12/12/1990',
      colClass: 'col-lg-6',
    },
    {
      label: 'Phone number',
      value: '(678) 324-1251',
      colClass: 'col-sm-6',
    },
    {
      label: 'Email',
      value: 'sam@webestica.com',
      colClass: 'col-sm-6',
    },
    {
      label: 'Overview',
      value: 'Interested has all Devonshire difficulty gay assistance joy. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.',
      type: 'textarea',
      rows: 4,
    },
  ];
  
  return (
    
   <div className="bg-dark containerSetting" >
    <div className="row">
    <div className="col-12">
            <Navhead/>
        </div>
    </div>
    <div className="bg-dark container-fluid">
      <div className="row">
        <div className="col-lg-3 d-none d-lg-block mt-5 mb-5">
          <Settingcard />
        </div>
        <div className="col-12 col-lg-8 col-md-12 ms-md-4 mt-5 mb-5">
          <Accountsetting inputs={inputs} title={title}/>
        </div>
      </div>
    </div>
 
 </div>

  )
}

export default SettingMain
