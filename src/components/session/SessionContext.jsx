import React, { createContext, useState } from 'react';

// const SwContext = createContext();  // 첫번째 전역 변수
// const AdminnoContext = createContext(); // 두번째 전역 변수
const sessionContext = createContext();

const GlobalProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState(false);
  const [userNo, setUserNo] = useState(0);  // 두번째 전역 변수용 state 생성
  const [userName, setUserName] = useState('');

  const [masterLogin, setMasterLogin] = useState(false);      // 첫번째 전역 변수용 state 생성
  const [masterNo, setMasterNo] = useState(0);  // 두번째 전역 변수용 state 생성
  const [masterName, setMasterName] = useState('');
  
  return (
    // <SwContext.Provider value={{ sw, setSw }}>        {/* 첫번째 전역 변수 */}
    //   <AdminnoContext.Provider value={{ employeeno, setEmployeeno }}>   {/* 첫번째 전역 변수 */}
    //     {children}
    //   </AdminnoContext.Provider>      
    // </SwContext.Provider>
    <sessionContext.Provider value={{ userLogin, setUserLogin, userNo, setUserNo, userName, setUserName,
        masterLogin, setMasterLogin, masterNo, setMasterNo, masterName, setMasterName}}>
      {children}
    </sessionContext.Provider>
  );
};

export { sessionContext, GlobalProvider };
