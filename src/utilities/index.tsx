const capitalize = (str: string): string => {
  return str.at(0)?.toUpperCase() + str.slice(1);
};

export {capitalize};
