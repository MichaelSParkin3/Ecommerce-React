export function boolChange(
  filterBools,
  filterToSend,
  addFilterFunc,
  sendFilterFunc
) {
  const filterPromise = () => {
    return new Promise((resolve, reject) => {
      addFilterFunc(filterBools);

      const error = false;

      if (filterBools == undefined || filterToSend == undefined) error = true;

      if (!error) {
        resolve();
      } else {
        reject("ERROR!");
      }
    });
  };
  filterPromise()
    .then(() => {
      sendFilterFunc(filterToSend);
    })
    .catch((err) => console.log(err));
}
