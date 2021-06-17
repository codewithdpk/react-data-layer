/* Data layer for data and cache management */

/* basic flags that has been used */
export const FLAGS = {
  DATA_SAVED: "01",
  DATA_EXIST: "02",
  DATA_WIPED: "03",
  DATA_UPDATED: "04",
  DATA_NOT_FOUND: "05",
  FAILED_TO_FETCH: "06",
};

/* save new data */
export const checkData = (dataKey) => {
  /* check of the data is exist */
  const data = JSON.parse(sessionStorage.getItem(dataKey));
  if (data === null || data?.length == 0) {
    return FLAGS.DATA_NOT_FOUND;
  } else {
    return FLAGS.DATA_EXIST;
  }
};

/* fetch data from the cache */
export const fetchData = (dataKey) => {
  /* get the data from localStorage */
  const data = JSON.parse(sessionStorage.getItem(dataKey));

  /* check if it is undefined or empty */
  if (data === undefined || Object.keys(data).length == 0) {
    return FLAGS.DATA_NOT_FOUND;
  } else {
    return data;
  }
};

/* update new data */
export const updateNewData = (requestData, keyData) => {
  /* save data to sessionStorage  */
  sessionStorage.setItem(keyData, JSON.stringify(requestData));
  return FLAGS.DATA_SAVED;
};
