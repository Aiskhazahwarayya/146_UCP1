module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define("Tentrem", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tipe_kamar: {
      type: DataTypes.STRING,
      allowNull: false
    },
    kapasitas_tamu: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lantai: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fasilitas: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tanggal_pesan: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    tableName: "hotel",
    freezeTableName: true,
    timestamps: true,
  });
  return Test;
};
