export const convertCsvToObjectArray = (csvData:string) => {
    const rows = csvData.trim().split('\n');
    const headers = rows[0].split(',');
    const data = rows.slice(1);

    const objectArray = data.map((row) => {
      const values = row.split(',');
      return headers.reduce((obj:any, header, index) => {
        obj[header] = values[index];
        return obj;
      }, {});
    });

    return objectArray
  };

  export const removeLastComma = (str:string) => {
    if (str.length > 0 && str.charAt(str.length - 1) === ',') {
      return str.slice(0, -1);
    } else {
      return str;
    }
  };

  export const getLastCharNumber=(str:string) =>{
    const lastChar = str.charAt(str.length - 1);
    const lastCharNum = parseInt(lastChar, 10);
  
    if (isNaN(lastCharNum)) {
      return null; // Return null if the last character is not a number
    } else {
      return lastCharNum;
    }
  }