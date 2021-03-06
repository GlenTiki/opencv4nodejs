const fs = require('fs');
const path = require('path');

function resolvePath(filePath, file) {
  if (!filePath) {
    return undefined;
  }
  return (file ? path.resolve(filePath, file) : path.resolve(filePath)).replace(/\\/g, '/');
}

const defaultDir = '/usr/local';
const defaultIncludeDir = `${defaultDir}/include`;
const defaultIncludeDirOpenCV4 = `${defaultIncludeDir}/opencv4`;

function getLibDir() {
  const libPath = resolvePath(process.env.OPENCV_LIB_DIR)
  if (process.platform === 'win32' && !libPath) {
    throw new Error('OPENCV_LIB_DIR is not defined')
  }
  return libPath || `${defaultDir}/lib`;
}

module.exports = {
  resolvePath,
  defaultDir,
  defaultIncludeDir,
  defaultIncludeDirOpenCV4,
  getLibDir
};
