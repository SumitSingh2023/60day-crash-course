function customIncludes(arr, searchElement, fromIndex = 0) {
    if (!Array.isArray(arr)) {
      throw new TypeError("Input is not an arr");
    }
    
    const len = arr.length;
    const startIndex = fromIndex >= 0 ? fromIndex : Math.max(0, len + fromIndex);
  
    for (let i = startIndex; i < len; i++) {
      if (arr[i] === searchElement) {
        return true;
      }
    }
  
    return false;
  }
  
  const numbers = [2,4,6,5,8,10,23];
  console.log(customIncludes(numbers, 23, 5)); 
  