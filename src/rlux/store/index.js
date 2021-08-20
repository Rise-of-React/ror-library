function store() {
  return;
}

function mappingStoreType(type) {
  const Type = 'Boolean' || 'Counter' || 'List' || 'Map' || 'Set' || 'Value';

  switch (type) {
    case 'Boolean':
    case 'Counter':
    case 'List':
    case 'Map':
    case 'Set':
    case 'Value':
    default:
      return null;
  }
}

class Store {}
