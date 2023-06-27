import React from 'react'
import Navhead from '../Home/Navhead';
import Sidecard from '../Home/Sidecard';
import Accountsetting from '../Settings/Accountsetting'

const Createpage = () => {
    const title={
        name:'Create a page',
        description:''
    }
    const inputs = [
        {
          label: 'Page name',
          value: 'Webistica',
          colClass: 'col-sm-6 col-lg-12',
        },
        {
          label: 'Display name',
          value: 'Webistica',
          colClass: 'col-sm-6 col-lg-4',
        },
        {
          label: 'Email',
          value: '',
          colClass: 'col-sm-6 col-lg-4',
        },
        {
          label: 'Category(required)',
          value: '@samlanson',
          colClass: 'col-sm-6 col-lg-4',
        },
        {
          label: 'Website URL',
          value: '12/12/1990',
          colClass: 'col-lg-6',
        },
        {
          label: 'Phone number',
          value: '(678) 324-1251',
          colClass: 'col-sm-6',
        },
        {
          label: 'About Page',
          value: '',
          type: 'textarea',
          rows: 4,
        },
      ];
      
  return (
    <div className='bg-dark'>
      <div className='row'>
        <div className="col-12">
          <Navhead/>
        </div>
      </div>
      <div className="container">
      <div className="row">
        <div className="col-xl-3 col-0 d-none d-xxs-block d-xl-block mt-4">
          <Sidecard />
        </div>
        <div className="col-xxl-9 col-lg-7 col-xl-8 col-sm-10 mt-5">
          <Accountsetting inputs={inputs} title={title} />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Createpage
