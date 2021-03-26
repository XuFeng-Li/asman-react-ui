import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.scss';
import ARList from "./components/asman_list";

function App() {

  const nums = [...Array(200).keys()].map((_,index)=>index.toString());
  console.log(nums);
  return (
    <div
      className={styles.index}
    >
      <ARList
        lists={nums}
        renderItem={(item) => {
          return (
              <li
                key={item.toString()}
                className={styles.li}
                onClick={()=>{
                  alert(item.toString());
                }}
              >
                <div
                  className={styles.liSubCon}
                >
                  {item}
                </div>
              </li>
          );
        }}
      />
    </div>
  );
}

export default App;
