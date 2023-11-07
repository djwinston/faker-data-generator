export const getDateBlocks = (start:Date, end:Date, maxDays:number) => {
  const result = [];  
  const s = new Date(start);

  while (s < end) {    
    const e = new Date(s.getFullYear(), s.getMonth(), s.getDate() + maxDays);    
    result.push({from:new Date(s), to: e <= end? e : new Date(end)});        
    s.setDate(s.getDate() + maxDays + 1);
  }
  return result;
};
