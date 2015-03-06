module.exports = function(Model, config) {
  var conf = config['clever-workflow'].WorkflowStepsModel;

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
    statusType: {
      type          : Model.Types.ENUM,
      values        : conf.default.statusType.values,
      allowNull     : false,
      default       : conf.default.statusType.default
    },
    data: {
      type          : Model.Types.TEXT,
      allowNull     : true,
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
    position: {
      type          : Number,
      allowNull     : false
    },
    toJSON: function () {
      var json = this._super.apply(this, arguments);
      json.data = JSON.parse( json.data );
      return json;
    }
  });
};
