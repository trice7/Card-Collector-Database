import { useState, useEffect } from 'react';
import getAllSets from '../../api/setData';
import SetCard from '../../components/SetCard';

const SetPage = () => {
  const [icon, setIcon] = useState([]);

  useEffect(() => {
    getAllSets().then((data) => {
      setIcon(data[0]);
    });
  }, []);

  return (
    <div>
      {icon.map((set) => (
        <SetCard key={set.id} obj={set} />
      ))}
    </div>
  );
};

// className="d-flex flex-wrap"

export default SetPage;
