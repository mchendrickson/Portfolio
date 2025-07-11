import { ReportHandler } from 'web-vitals';

/**
 * Configures and initializes Core Web Vitals performance monitoring.
 * 
 * This function dynamically imports the web-vitals library and sets up
 * monitoring for all Core Web Vitals metrics. It uses dynamic imports
 * to avoid bundling the web-vitals library in production builds,
 * improving initial bundle size.
 * 
 * The function monitors:
 * - CLS (Cumulative Layout Shift): Measures visual stability
 * - FID (First Input Delay): Measures interactivity
 * - FCP (First Contentful Paint): Measures perceived loading speed
 * - LCP (Largest Contentful Paint): Measures perceived loading speed
 * - TTFB (Time to First Byte): Measures server response time
 * 
 * @param {ReportHandler} onPerfEntry - Callback function that receives performance metrics
 * @returns {void} No return value
 */
const reportWebVitals = (onPerfEntry: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
