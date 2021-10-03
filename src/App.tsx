import React, { useState } from 'react';
import { useGetSomeQuery } from './api/api';
import { Site, Test, Summary } from './types';
import './App.css';
import CardList from './CardList/CardList';
import Loader from './Loader/Loader';
import Input from './Input/Input';

function App() {
  const { data: sitesData, isLoading: isSitesLoading, isSuccess: isSitesSuccess } = useGetSomeQuery('/sites');
  const { data: testsData, isLoading: isTestsLoading, isSuccess: isTestsSuccess } = useGetSomeQuery('/tests');
  const [searchQuery, setSearchQuery] = useState('');
  const summaryData:Summary[] = [];

  const getSummary = (sites:Site[], tests:Test[]):Summary[] => {
    const summary = [...tests];
    return summary.map((el) => ({
      ...el,
      url: (sites.find((item) => item.id === el.siteId))?.url || 'useGetSitesQuery',
    }));
  };

  function isTestArray(data: Test[] | Site[]): data is Test[] {
    return (data as Test[]).every((item) => item.name !== undefined);
  }

  function isSiteArray(data: Test[] | Site[]): data is Site[] {
    return (data as Site[]).every((item) => item.url !== undefined);
  }

  if (testsData && sitesData) {
    if (isSiteArray(sitesData) && isTestArray(testsData)) {
      summaryData.push(...getSummary(sitesData, testsData));
    }
  }

  return (
    <div className="App">
      <Input quantity={summaryData.length} setSearchQuery={setSearchQuery} />
      {(isSitesLoading || isTestsLoading) && <Loader />}
      {isTestsSuccess
      && isSitesSuccess
      // eslint-disable-next-line max-len
      && <CardList cardItems={summaryData.filter((o) => o.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))} />}
    </div>
  );
}

export default App;
