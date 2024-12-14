
 export default class Validacoes {
    static Validacoes(id, option, newValue) {
      if (!id || !option || !newValue) {
        throw new Error("please tens");
      }
  
      if (typeof id !== `number` || typeof option !== `number`) {
        throw new Error("the id or option must be a number");
      }
  
    }


  
    static valideForDelete(id){
      if (!id) {
        throw new Error("Id invalid");
      }
  
      if (typeof id !== `number`) {
        throw new Error("the id must be a number");
      }
    }
  }
  