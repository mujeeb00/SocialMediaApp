import React from 'react'
import Accountsetting from './Accountsetting'
import Settingcard from './Settingcard'

const SettingMain = () => {
    const data = [
        {
          label: 'First name',
          value: 'Sam',
        },
        {
          label: 'Last name',
          value: 'Lanson',
        },
        {
          label: 'Additional name',
          value: '',
        },
        {
          label: 'User name',
          value: '@samlanson',
        },
        {
          label: 'Birthday',
          value: '12/12/1990',
        },
        {
          label: 'Phone number',
          value: '(678) 324-1251',
        },
        {
          label: 'Email',
          value: 'sam@webestica.com',
        },
        {
          label: 'Overview',
          value: 'Interested has all Devonshire difficulty gay assistance joy. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.',
        },
      ];
  return (
    <div className="main" style={{backgroundColor:'#191A1F'}}>
    <div className='container'>
      <div className="row">
        <div className="col-3 ms-1 mt-4 ">
            <Settingcard/>
        </div>

        <div className="col-8 mt-4">
            <Accountsetting data={data}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SettingMain
