function isIPAddress(ip) {
    const parts = ip.split('.');
  
    if (parts.length !== 4) {
        return false;
    }
  
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        const num = Number(part);
  
        if (isNaN(part) || part === '') {
            return false;
        }
  
        if (num < 0 || num > 255) {
            return false;
        }

        if (part !== String(num)) {
            return false;
        }
    }
  
    return true;
}
  
function findRGBA(text) {
    const rgbaPattern = /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0|1|0?\.\d+)\s*\)/;
    const match = text.match(rgbaPattern);

    return match ? match[0] : null;
}

function findHexColor(text) {
    const hashIndex = text.indexOf("#");
  
    if (hashIndex === -1) {
      return null;
    }
  
    const hexPart = text.slice(hashIndex + 1);
  
    if (hexPart.length === 3 || hexPart.length === 6) {
        const isValidHex = hexPart.split('').every(char => {
            const lowerChar = char.toLowerCase();
            return (lowerChar >= '0' && lowerChar <= '9') || (lowerChar >= 'a' && lowerChar <= 'f');
        });
  
        if (isValidHex) {
            return `#${hexPart}`;
        }
    }
  
    return null;
}

function findTags(text, tag) {
    const regex = new RegExp(`<${tag}[^>]*>`, 'gi');
    return text.match(regex) || [];
}

function findPosNum(text) {
    const regex = /\b\d+(\.\d+)?\b/g;
    return text.match(regex)?.map(Number) || [];
}

function findDates(text) {
    const regex = /\b\d{4}-\d{2}-\d{2}\b/g;
    return text.match(regex) || [];
}
