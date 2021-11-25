import React, { useEffect, useState } from 'react';
import style from './Dashboard.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import Slider from '../../components/Slider/Slider';
import ApplicationCard from '../../components/ApplicationCard/ApplicationCard';

function Dashboard() {

  const [dataObject, setDataObject] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [chosenBCAP3, setChosenBCAP3] = useState('');
  const [spendLimit, setSpendLimit] = useState(0);

  useEffect(() => {
      (async () => {
          try {
              const data = await (await fetch('//localhost:8080/data')).json()
              setDataObject(data);
              setDataLoading(false);
          } catch (e) {
              // TODO: handle error here, setErrorMessage or somehting
          }
      })();
  }, []);

  // @ts-ignore
  const filterBCAP3 = () => {
      // @ts-ignore
      return dataObject.filter(obj => obj.BCAP3 === chosenBCAP3 && obj.spend <= spendLimit).map(obj => <ApplicationCard {...obj} />);
  }

  return (
    dataLoading ? <h1>Loading...</h1> : <div className={style.container}>
        <div>
            <Navigation data={dataObject} onSelect={setChosenBCAP3} />
            {/*
                // @ts-ignore */}
            <Slider data={dataObject} onChange={setSpendLimit} />
            <div>Limit: {spendLimit}</div>
        </div>
        <div className={style.cards}>{filterBCAP3()}</div>
    </div>
  );
}

export default Dashboard;
