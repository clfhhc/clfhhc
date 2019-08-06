const projectName = 'clfhhc';
const isProd = process.env.NODE_ENV === 'production';
const prodAssetPrefix = `/${projectName}`;
const serviceWorkerFilename = 'service-worker.js';

module.exports = {
  projectName,
  linkPrefix: isProd ? prodAssetPrefix : '',
  isProd,
  prodAssetPrefix,
  serviceWorkerFilename,
};
