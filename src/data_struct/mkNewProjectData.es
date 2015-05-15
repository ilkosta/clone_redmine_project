var cloneObj      = require('../cloneObj.js');

var mkNewProjectData = (srcPrj, newName) => {
  let prog = cloneObj(srcPrj, (i) => {
    return -1 === [
      "id",
      "parent",
      "homepage",
      "trackers",
      "issue_categories",
      "enabled_modules",
      "created_on",
      "updated_on"
    ].indexOf(i);
  });

  prog.name = newName;
  // prog.identifier = urlify(newName).replace(/-/g,"_");
  prog.identifier = "pippo";
  
  if (srcPrj.parent && typeof srcPrj.parent === "object")
    prog.parent_id = srcPrj.parent.id;

  prog.tracker_ids = srcPrj.trackers.map(t => {
    return t.id;
  });
  prog.enabled_module_names = srcPrj.enabled_modules.map(m => {
    return m.name;
  });
  
  return prog;
};

module.exports = mkNewProjectData;
