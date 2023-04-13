import React, { useState, useEffect } from 'react';

export const useinifiniteScroll = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const [offset, setOffset] = useState(page * limit);

  useEffect(() => {
    setOffset(page * limit);
  }, [page, limit]);

  const handlePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleLimit = (value: number) => {
    setLimit(value);
  };
  return { handlePage, handleLimit, page, limit, offset };
};
