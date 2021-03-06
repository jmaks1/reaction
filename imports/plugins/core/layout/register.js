import Reaction from "/imports/plugins/core/core/server/Reaction";

Reaction.registerPackage({
  label: "Layout",
  name: "reaction-layout",
  icon: "fa fa-object-group",
  autoEnable: true,
  settings: {
    name: "Layout"
  },
  registry: [{
    provides: ["dashboard"],
    label: "Layout",
    description: "Layout utilities",
    icon: "fa fa-object-group",
    priority: 1,
    container: "appearance"
  }]
});
