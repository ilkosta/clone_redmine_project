var findByProjectName = (projectName) => {
  return (projects) => {
    let found = projects.projects.filter(p => {
      return p.name === projectName;
    });
    if (found.length === 0) return found;
    else if (found.length === 1) return found[0];
    else return found;
  };
};

module.exports = findByProjectName;
