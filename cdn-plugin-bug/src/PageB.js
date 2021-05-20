import React, { useState } from  'react';
import ReactDOM from 'react-dom';
function PageB() {
  const [ip, setIP] =useState('')
  import('axios').then(module=>{
    module.default.get('https://hanma.alibaba-inc.com/oapi/util/get_internal_ip').then(res=>{
      console.log(res)
      setIP(res.data.data.ip)
    })
  })
  return (
    <div className="PageB">
      PageB
      ip: {ip}
    
    </div>
  );
}

export default PageB;
