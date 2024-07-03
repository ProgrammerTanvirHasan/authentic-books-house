
const getDataFromStorage=(type)=>{
    const storageKey =type=== 'read'?'readBook':'wishList';
    const storedData=localStorage.getItem(storageKey);
    if(storedData){
        return JSON.parse(storedData);
    }
    return [];
}

const saveCardToStorage=(currentId,type)=>{
    const storageKey =type=== 'read'?'readBook':'wishList';
   const remainData=getDataFromStorage(type);
   const exists = remainData.includes(currentId);
   if(!exists){
    remainData.push(currentId);
   }
   localStorage.setItem(storageKey,JSON.stringify(remainData));
}

export {getDataFromStorage,saveCardToStorage};



