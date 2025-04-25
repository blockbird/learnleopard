import React from 'react';

export const CookiesPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-16 pt-32 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-accent">Cookies Policy</h1>
      <div className="space-y-4 text-gray-700">
        <p>Last Updated: [Insert Date]</p>
        
        <h2 className="text-xl font-semibold mt-6 text-gray-800">1. What Are Cookies?</h2>
        <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>

        <h2 className="text-xl font-semibold mt-6 text-gray-800">2. How We Use Cookies</h2>
        <p>We use cookies for several purposes, including:</p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>Essential Cookies:</strong> These are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.</li>
          <li><strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</li>
          <li><strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.</li>
          <li><strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-gray-800">3. Your Choices Regarding Cookies</h2>
        <p>You can control and/or delete cookies as you wish – for details, see aboutcookies.org. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.</p>
        <p>You may also be able to manage your cookie preferences through our website's cookie consent tool [If applicable, provide details].</p>

        <h2 className="text-xl font-semibold mt-6 text-gray-800">4. Changes to This Cookie Policy</h2>
        <p>We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.</p>

        <p className="mt-8">This is a generic template. Please replace the bracketed information and ensure it accurately reflects your website's cookie usage. Consult with a legal professional if necessary.</p>
      </div>
    </div>
  );
}; 