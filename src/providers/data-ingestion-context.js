import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

import api from './api';

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [filterSource, setFilterSource] = useState(['sgbd', 'files', 'sap', 'streaming']);
  const [filterStatus, setFilterStatus] = useState(['dev', 'prd']);

  const handleToggleFilter = (array, item) => {
    let functionChange = null;

    if (array === filterSource) {
      functionChange = setFilterSource;
    }
    if (array === filterStatus) {
      functionChange = setFilterStatus;
    }

    let newArray = null;
    if (array.includes(item)) {
      newArray = array.filter((i) => i !== item);
      functionChange(newArray);
    } else {
      functionChange((current) => [...current, item]);
    }
  };

  // const handleInsert = () => {};

  // const handleUpdate = () => {};

  const handleCodeReview = (item) => {
    if (!item) {
      return;
    }

    const data = { ...item };
    data.status = 'prd';
    delete data._id;

    const result = api
      .put(`/jobs/${item._id}`, data)
      .then(() => {
        toast.success('Code review realizado.');
        return true;
      })
      .catch((e) => {
        toast.error('Erro ao efetuar code review.');
        console.log(e);
        return false;
      });

    return result;
  };

  const handleDelete = (id, fetchData) => {
    if (!id) {
      return;
    }

    api
      .delete(`/jobs/${id}`)
      .then(() => {
        toast.success('Job removido.');
        fetchData();
      })
      .catch((e) => {
        toast.error('Erro ao remover job.');
        console.log(e);
      });
  };

  const contextData = { filterSource, filterStatus, handleToggleFilter, handleDelete, handleCodeReview };

  return <DataContext.Provider value={contextData}>{children}</DataContext.Provider>;
};

export { DataProvider, DataContext };
