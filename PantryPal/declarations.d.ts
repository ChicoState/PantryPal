/* 
 * File: declarations.d.ts
 * Description: This file contains the declarations for the typescript compiler
 * This is necessary for the compiler to recognize the file types of the images
 * in the Images folder
 */

declare module '*.jpg' {
  const value: any;
  export = value;
}