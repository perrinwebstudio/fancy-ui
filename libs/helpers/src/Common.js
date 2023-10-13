import { useIntl } from 'react-intl';

export const getBreakPointsValue = (valueSet, breakpoint) => {
  if (typeof valueSet === 'number') return valueSet;
  switch (breakpoint) {
    case 'xs':
      return valueSet.xs;
    case 'sm':
      return valueSet.sm || valueSet.xs;
    case 'md':
      return valueSet.md || valueSet.sm || valueSet.xs;
    case 'lg':
      return valueSet.lg || valueSet.md || valueSet.sm || valueSet.xs;
    default:
      return (
        valueSet.xl || valueSet.lg || valueSet.md || valueSet.sm || valueSet.xs
      );
  }
};

export const isEmpty = (obj) => {
  for (let key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

export const getFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  let k = 1024,
    dm = 2,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const multiPropsFilter = (products, filters, stringKey = 'title') => {
  const filterKeys = Object.keys(filters);
  return products.filter((product) => {
    return filterKeys.every((key) => {
      if (filters[key].length === 0) return true;
      // Loops again if product[key] is an array (for material attribute).
      if (Array.isArray(product[key])) {
        return product[key].some((keyEle) => filters[key].includes(keyEle));
      }
      if (filters[key]?.start || filters[key]?.end) {
        if (key === 'mrp') {
          return (
            product[key] >= filters[key].start &&
            product[key] < filters[key].end
          );
        } else {
          const start = new Date(filters[key].start).getTime();
          const end = new Date(filters[key].end).getTime();
          const productDate = new Date(product[key]).getTime();

          return productDate >= start && productDate <= end;
        }
      }
      if (key === stringKey) {
        return product[key].toLowerCase().includes(filters[key].toLowerCase());
      }
      return filters[key].includes(product[key]);
    });
  });
};

// 'intl' service singleton reference
let intl;

export function IntlGlobalProvider({ children }) {
  intl = useIntl();
  // Keep the 'intl' service reference
  return children;
}

export const appIntl = () => {
  return intl;
};

export const generateRandomUniqueNumber = () => {
  const numbers = [];
  const number = Math.floor(Math.random() * 100000000);

  if (numbers.includes(number)) {
    return generateRandomUniqueNumber();
  } else {
    return number;
  }
};

export const getCardBrand = (cardNumber) => {
  const numStr = cardNumber.toString();
  if (!numStr) return 'Invalid number';

  // Removing any spaces or dashes in the card number
  const sanitizedNum = numStr.replace(/[\s-]/g, '');

  // Checking if the input is a number
  if (isNaN(sanitizedNum)) return 'Invalid number';

  // Detecting card brand
  if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(sanitizedNum)) {
      return 'Visa';
  } else if (/^5[1-5][0-9]{14}$/.test(sanitizedNum)) {
      return 'MasterCard';
  } else if (/^3[47][0-9]{13}$/.test(sanitizedNum)) {
      return 'American Express';
  } else if (/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(sanitizedNum)) {
      return 'Discover';
  } else {
      return 'Unknown brand';
  }
}

export const capitalizeFirstLetter = (string) => {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getProgress = (value, total) => {
  if (!total) return 0;
  return Math.round(((value || 0) / total) * 100);
}