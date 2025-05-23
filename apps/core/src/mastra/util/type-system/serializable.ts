// https://github.com/cdklabs/decdk/tree/v2.0.0-pre.602/src/type-system

import * as reflect from 'jsii-reflect';
import { isConstruct } from './construct.js';
import { isEnum, isEnumLikeClass } from './enums.js';
import { allStaticFactoryMethods } from './factories.js';
import { allImplementationsOfType } from './implements.js';

export function isSerializableInterface(
  type: reflect.Type | undefined,
  errorPrefix?: string,
  checkStack: string[] = [],
): type is reflect.InterfaceType {
  if (!type || !(type instanceof reflect.InterfaceType)) {
    return false;
  }

  // Do not check cyclic types, if they are not serializable they will fail elsewhere
  if (checkStack.includes(type.fqn)) {
    return true;
  }
  checkStack.push(type.fqn);

  if (type.allMethods.length > 0) {
    return false;
  }

  return type.allProperties.every(
    p => isSerializableTypeReference(p.type, errorPrefix, checkStack) || isConstruct(p.type) || p.optional,
  );
}

// Must only have properties, all of which are scalars,
// lists or isSerializableInterface types.
function isSerializableTypeReference(
  type: reflect.TypeReference,
  errorPrefix: string | undefined,
  checkStack: string[],
): boolean {
  if (type.primitive) {
    return true;
  }

  if (type.arrayOfType) {
    return isSerializableTypeReference(type.arrayOfType, errorPrefix, checkStack);
  }

  if (type.mapOfType) {
    return isSerializableTypeReference(type.mapOfType, errorPrefix, checkStack);
  }

  if (type.type) {
    return isSerializableType(type.type, errorPrefix, checkStack);
  }

  if (type.unionOfTypes) {
    return type.unionOfTypes.some(x => isSerializableTypeReference(x, errorPrefix, checkStack));
  }

  return false;
}

function isSerializableType(type: reflect.Type, errorPrefix: string | undefined, checkStack: string[]): boolean {
  // if this is a construct class, we can represent it as a "Ref"
  if (isConstruct(type)) {
    return true;
  }

  if (isEnum(type)) {
    return true;
  }

  if (isSerializableInterface(type, errorPrefix, checkStack)) {
    return true;
  }

  // if this is a class that looks like an enum, we can represent it
  if (isEnumLikeClass(type)) {
    return true;
  }

  if (allImplementationsOfType(type).length > 0) {
    return true;
  }

  if (allStaticFactoryMethods(type).length > 0) {
    return true;
  }

  if (errorPrefix) {
    console.error(errorPrefix, `${type} is not serializable`);
  }

  return false;
}
