const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emosi)=>{
  try{
    const perasaan = (await promiseTheaterIXX()).concat(
      await promiseTheaterVGC()
    );
    return perasaan.filter((funct)=> funct.hasil === emosi).length;
  }catch(err){
    console.error(err);
  }

};

module.exports = {
  promiseOutput,
};
