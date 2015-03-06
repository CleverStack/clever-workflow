module.exports = function(Model, config) {
  var conf = config['clever-workflow'].WorkflowModel;

  return Model.extend(
  {
    timeStampable   : true
  },
  {
    id: {
      type          : Number,
      primaryKey    : true,
      autoIncrement : true
    },
    name: {
      type          : String,
      allowNull     : false
    },
    type: {
      type          : Model.Types.ENUM,
      values        : conf.default.type.values,
      default       : conf.default.type.default,
      allowNull     : false
    },
    active: {
      type          : Boolean,
      allowNull     : false,
      default       : true
    },
    defaultWorkflow: {
      type          : Boolean,
      allowNull     : false,
      default       : false
    },
    swfDomain: {
      type          : String,
      default       : null
    },
    swfVersion: {
      type          : Number,
      allowNull     : false,
      default       : 1
    },
    swfRegistrationCompleted: {
      type          : Boolean,
      allowNull     : false,
      default       : false
    },
    swfRegistrationAttempts: {
      type          : Number,
      allowNull     : false,
      default       : 0
    },
    templateWorkflowId: {
      type          : Number,
      default       : 0
    },
    isEditable: {
      type          : Boolean,
      allowNull     : false,
      default       : true
    }
  });
};
