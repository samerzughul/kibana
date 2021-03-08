/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { FunctionComponent, createElement } from 'react';

import { RenderingMetadata } from '../types';
import { Fonts } from './fonts';
import { Styles } from './styles';

interface Props {
  metadata: RenderingMetadata;
}

export const Template: FunctionComponent<Props> = ({
  metadata: {
    uiPublicUrl,
    locale,
    darkMode,
    injectedMetadata,
    i18n,
    bootstrapScriptUrl,
    strictCsp,
  },
}) => {
  const logo = (
    // <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <svg width="185" height="34" viewBox="0 0 185 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M17.0245 0C7.66104 0 0 7.64619 0 16.9915C0 26.3369 7.66104 33.9831 17.0245 33.9831C26.388 33.9831 34.0491 26.3369 34.0491 16.9915C34.0491 7.64619 26.388 0 17.0245 0ZM8.51227 16.9915C8.51227 16.7083 8.51227 16.5667 8.51227 16.2836C8.79601 11.8941 12.4847 8.49577 17.0245 8.49577C17.592 8.49577 18.1595 8.49577 18.727 8.63736C19.0107 8.63736 19.1526 8.77896 19.4364 8.77896C22.9831 9.77013 25.5368 13.0268 25.5368 16.8499C25.5368 19.6819 24.1181 22.2306 21.99 23.7881C21.1388 24.4961 20.0038 24.9209 19.0107 25.2041C18.4433 25.3457 17.7339 25.3457 17.1664 25.3457C13.3359 25.3457 10.2147 22.9386 9.07976 19.5403C8.65414 18.6907 8.51227 17.8411 8.51227 16.9915Z" fill="url(#paint0_linear)"/>
<path d="M28.3742 19.6818C28.3742 21.5226 27.8067 23.0801 26.9555 24.4961C25.3949 27.0448 22.8412 28.744 20.5713 29.3104C14.7546 30.5847 10.6403 28.744 9.07974 25.7705C8.51226 24.9209 8.22852 23.7881 8.22852 22.6553C8.22852 21.8058 8.51226 20.673 8.93787 19.5402C10.0728 22.9385 13.194 25.3457 17.0245 25.3457C17.7339 25.3457 18.3014 25.2041 18.8689 25.2041C20.0038 24.9209 20.9969 24.4961 21.8481 23.7881C23.9762 22.2306 25.3949 19.6818 25.3949 16.8499C25.3949 13.0268 22.8412 9.7701 19.2945 8.77893C19.5782 8.77893 19.7201 8.92053 20.0038 8.92053C25.5368 11.1861 28.3742 14.5844 28.3742 19.6818Z" fill="url(#paint1_linear)"/>
<path d="M26.9555 24.6377C26.6717 24.9209 26.2461 25.2041 25.8205 25.4873C24.5437 26.1953 22.1318 26.1953 19.72 25.4873C19.4363 25.4873 19.1525 25.3457 19.0107 25.2041C20.1456 24.9209 21.1387 24.4961 21.99 23.7881C24.118 22.2306 25.5367 19.6819 25.5367 16.8499C25.5367 13.0268 22.9831 9.77013 19.4363 8.77896C19.1525 8.63736 19.0107 8.63736 18.7269 8.63736C18.1594 8.49576 17.592 8.49576 17.0245 8.49576C12.6265 8.49576 8.93782 11.8941 8.51221 16.2835C8.51221 11.3277 10.2147 7.78778 14.1871 5.80544C14.4708 5.66384 14.6127 5.52225 14.8964 5.52225C19.2944 3.5399 24.6855 5.66384 26.9555 8.63736C31.0697 14.1596 30.786 21.2394 26.9555 24.6377Z" fill="url(#paint2_linear)"/>
<path d="M21.8481 23.7881C21.7062 24.0713 21.4225 24.2129 21.2806 24.3545C20.7131 24.7792 20.1457 25.0624 19.5782 25.3456C15.7476 27.328 12.3427 27.6112 8.93783 25.7704C8.51222 25.4872 8.0866 25.204 7.66099 24.9208C3.6886 22.0889 2.83737 16.2835 4.25608 13.0268C6.80976 7.50452 10.7822 5.23898 14.1871 5.80536C15.1802 5.94696 16.1733 6.37175 17.0245 6.93813C17.592 7.36292 18.1595 7.9293 18.7269 8.77888C18.1595 8.49569 17.592 8.49569 17.0245 8.49569C12.6265 8.49569 8.93783 11.894 8.51222 16.2835C8.51222 16.5667 8.51222 16.7083 8.51222 16.9915C8.51222 17.841 8.65409 18.8322 8.93783 19.5402C10.0728 22.9385 13.194 25.3456 17.0245 25.3456C17.7338 25.3456 18.3013 25.204 18.8688 25.204C20.0038 24.9208 20.9969 24.496 21.8481 23.7881Z" fill="url(#paint3_linear)"/>
<path d="M45.1151 25.2041C43.8382 24.9209 42.8451 24.3545 41.9939 23.7881L42.4195 22.7969C42.987 21.6642 44.2638 21.0978 45.3988 21.5226C45.6825 21.6642 45.8244 21.6642 46.1082 21.8057C47.1013 22.0889 47.9525 22.2305 48.9456 22.2305C49.9387 22.2305 50.648 22.0889 51.2155 21.8057C51.783 21.5226 51.9249 21.0978 51.9249 20.673C51.9249 20.2482 51.6411 19.8234 51.2155 19.5402C50.7899 19.257 49.9387 18.9738 48.52 18.6906C46.9594 18.4074 45.6825 17.9827 44.6894 17.5579C43.8382 17.1331 43.1289 16.5667 42.8451 15.8587C42.4195 15.1507 42.2776 14.4428 42.2776 13.5932C42.2776 12.602 42.5614 11.6108 43.1289 10.7612C43.6963 9.91167 44.5476 9.20369 45.6825 8.7789C46.8175 8.35412 47.9525 8.07092 49.3712 8.07092C50.648 8.07092 51.783 8.21252 52.918 8.63731C54.0529 8.9205 55.046 9.48688 55.6135 10.0533L55.1879 10.9028C54.6204 12.0356 53.3436 12.602 52.0667 12.1772C51.9249 12.1772 51.783 12.0356 51.6411 12.0356C50.7899 11.7524 49.9387 11.6108 49.0874 11.6108C48.2362 11.6108 47.6687 11.7524 47.1013 12.0356C47.1013 12.3188 46.8175 12.7436 46.8175 13.31C46.8175 13.5932 46.9594 13.8764 47.1013 14.018C47.2431 14.1596 47.6687 14.4427 48.0944 14.5843C48.52 14.7259 49.3712 15.0091 50.2224 15.1507C51.783 15.4339 53.0598 15.8587 53.9111 16.4251C54.7623 16.8499 55.4717 17.4163 55.7554 18.1243C56.181 18.6906 56.3229 19.5402 56.3229 20.3898C56.3229 22.0889 55.6135 23.3633 54.3367 24.3545C53.0598 25.3457 51.2155 25.7704 48.8037 25.7704C47.6687 25.7704 46.3919 25.6288 45.1151 25.2041Z" fill="#133459"/>
<path d="M62.5652 24.6377C61.2884 23.9297 60.1534 22.9385 59.4441 21.5226C58.7347 20.2482 58.3091 18.6906 58.3091 16.8499C58.3091 15.1507 58.7347 13.5932 59.4441 12.3188C60.1534 11.0444 61.1465 9.91167 62.5652 9.20369C63.8421 8.49571 65.4027 8.07092 67.247 8.07092C68.3819 8.07092 69.5169 8.21252 70.51 8.63731C71.5031 8.9205 72.3543 9.48688 73.0637 10.0533L72.6381 10.9028C72.2125 12.0356 70.7938 12.602 69.6588 12.1772C68.8076 11.894 68.0982 11.7524 67.247 11.7524C65.8283 11.7524 64.8352 12.1772 64.1258 13.0268C63.4165 13.8764 62.9908 15.1507 62.9908 16.8499C62.9908 18.549 63.4165 19.8234 64.1258 20.8146C64.8352 21.6642 65.9701 22.0889 67.247 22.0889C68.0982 22.0889 68.8076 21.9473 69.6588 21.6642C70.7938 21.2394 72.0706 21.8058 72.6381 22.9385L73.0637 23.7881C72.3543 24.3545 71.5031 24.7793 70.51 25.2041C69.5169 25.4872 68.3819 25.7704 67.247 25.7704C65.5445 25.7704 63.9839 25.3457 62.5652 24.6377Z" fill="#133459"/>
<path d="M88.3858 25.4873L86.8252 21.9474H79.1642L77.7454 25.4873H73.2056L80.441 9.91168C80.8666 8.92051 81.8597 8.35413 82.9947 8.35413C84.1296 8.35413 85.1227 8.92051 85.5483 9.91168L92.7838 25.4873H88.3858ZM80.7247 18.549H85.4065L83.1365 13.1684L80.7247 18.549Z" fill="#133459"/>
<path d="M108.106 8.35413H109.241V25.4873H105.836L98.033 15.7171V22.5137C98.033 24.0713 96.7562 25.4873 95.0537 25.4873H93.7769V8.35413H97.0399L104.843 17.9827V11.6108C104.985 9.77009 106.403 8.35413 108.106 8.35413Z" fill="#133459"/>
<path d="M135.771 8.35413H137.757L131.656 25.4873H128.109L124.563 15.2923L120.732 25.4873H117.185L111.085 8.35413H113.355C114.774 8.35413 116.05 9.2037 116.476 10.6197L119.313 19.257L122.577 9.91168C122.86 9.06211 123.711 8.49572 124.563 8.49572C125.556 8.49572 126.265 9.06211 126.549 9.91168L129.812 19.3986L132.791 10.6197C133.217 9.2037 134.494 8.35413 135.771 8.35413Z" fill="#133459"/>
<path d="M150.951 25.4873L149.39 21.9474H141.871L140.31 25.4873H135.771L143.006 9.91168C143.432 8.92051 144.425 8.35413 145.56 8.35413C146.695 8.35413 147.688 8.92051 148.113 9.91168L155.349 25.4873H150.951ZM143.29 18.549H147.971L145.701 13.1684L143.29 18.549Z" fill="#133459"/>
<path d="M169.394 8.35413H171.806L164.003 25.4873H160.315L152.512 8.35413H155.065C156.342 8.35413 157.477 9.06211 158.045 10.3365L162.159 19.8234L166.273 10.1949C166.841 9.06211 168.118 8.35413 169.394 8.35413Z" fill="#133459"/>
<path d="M172.799 25.4873V8.35413H185V9.48689C185 10.7613 184.007 11.7524 182.73 11.7524H177.197V15.0091H184.575V16.4251C184.575 17.5579 183.582 18.549 182.447 18.549H177.197V22.089H182.73C184.007 22.089 185 23.0801 185 24.3545V25.4873H172.799Z" fill="#133459"/>
</g>
<defs>
<linearGradient id="paint0_linear" x1="0" y1="16.943" x2="33.9518" y2="16.943" gradientUnits="userSpaceOnUse">
<stop stop-color="#6CDC70"/>
<stop offset="1" stop-color="#30AEFF"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="28.1905" y1="12.5591" x2="12.8232" y2="26.1965" gradientUnits="userSpaceOnUse">
<stop stop-color="#247795"/>
<stop offset="1" stop-color="#246593" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="7.84229" y1="3.53027" x2="22.9461" y2="16.9918" gradientUnits="userSpaceOnUse">
<stop stop-color="#2B8972"/>
<stop offset="1" stop-color="#2B8972" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="19.5304" y1="28.4551" x2="8.21604" y2="9.03375" gradientUnits="userSpaceOnUse">
<stop stop-color="#358D83"/>
<stop offset="1" stop-color="#378C84" stop-opacity="0"/>
</linearGradient>
<clipPath id="clip0">
<rect width="185" height="33.8415" fill="white"/>
</clipPath>
</defs>
</svg>
  );
  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width" />
        <title>Scanwave SOC</title>
        <Fonts url={uiPublicUrl} />
        {/* The alternate icon is a fallback for Safari which does not yet support SVG favicons */}
        <link rel="alternate icon" type="image/png" href={`${uiPublicUrl}/favicons/favicon.png`} />
        {/* <link rel="icon" type="image/svg+xml" href={`${uiPublicUrl}/favicons/favicon.svg`} /> */}
        <link rel="icon"  href={`${uiPublicUrl}/favicons/favicon.ico`} />
        
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light dark" />
        <Styles darkMode={darkMode} />

        {/* Inject stylesheets into the <head> before scripts so that KP plugins with bundled styles will override them */}
        <meta name="add-styles-here" />
        <meta name="add-scripts-here" />
      </head>
      <body>
        {createElement('kbn-csp', {
          data: JSON.stringify({ strictCsp }),
        })}
        {createElement('kbn-injected-metadata', { data: JSON.stringify(injectedMetadata) })}
        <div
          className="kbnWelcomeView"
          id="kbn_loading_message"
          style={{ display: 'none' }}
          data-test-subj="kbnLoadingMessage"
        >
          <div className="kbnLoaderWrap">
            {logo}
            <div
              className="kbnWelcomeText"
              data-error-message={i18n('core.ui.welcomeErrorMessage', {
                defaultMessage:
                  'Elastic did not load properly. Check the server output for more information.',
              })}
            >
              {i18n('core.ui.welcomeMessage', { defaultMessage: 'Loading Elastic' })}
            </div>
            <div className="kbnProgress" />
          </div>
        </div>

        <div className="kbnWelcomeView" id="kbn_legacy_browser_error" style={{ display: 'none' }}>
          {logo}

          <h2 className="kbnWelcomeTitle">
            {i18n('core.ui.legacyBrowserTitle', {
              defaultMessage: 'Please upgrade your browser',
            })}
          </h2>
          <div className="kbnWelcomeText">
            {i18n('core.ui.legacyBrowserMessage', {
              defaultMessage:
                'This Elastic installation has strict security requirements enabled that your current browser does not meet.',
            })}
          </div>
        </div>

        <script>
          {`
            // Since this is an unsafe inline script, this code will not run
            // in browsers that support content security policy(CSP). This is
            // intentional as we check for the existence of __kbnCspNotEnforced__ in
            // bootstrap.
            window.__kbnCspNotEnforced__ = true;
          `}
        </script>
        <script src={bootstrapScriptUrl} />
      </body>
    </html>
  );
};
