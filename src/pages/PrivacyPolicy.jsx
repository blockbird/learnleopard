import React from 'react';

export const PrivacyPolicy = () => {
  // Calculate the first day of the current month
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = firstDayOfMonth.toLocaleDateString('en-US', options);

  return (
    <div className="container mx-auto px-4 py-16 pt-32 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-accent">Privacy Policy</h1>
      <div className="space-y-4 text-gray-700">
        <p>Effective Date: {formattedDate}</p>
        
        <h2 className="text-xl font-semibold mt-6 text-gray-800">1. Introduction</h2>
        <p>Welcome to Learn Leopard. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at [Insert Contact Email].</p>

        <h2 className="text-xl font-semibold mt-6 text-gray-800">2. Information We Collect</h2>
        <p>We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.</p>
        <p>The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use. The personal information we collect may include the following: [List types of data, e.g., Name, Email Address, Payment Information, etc.]</p>

        <h2 className="text-xl font-semibold mt-6 text-gray-800">3. How We Use Your Information</h2>
        <p>We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
        <p>[Detail the purposes, e.g., To facilitate account creation, To send administrative information, To fulfill and manage your orders, etc.]</p>

        <h2 className="text-xl font-semibold mt-6 text-gray-800">4. Will Your Information Be Shared With Anyone?</h2>
        <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
        <p>[Detail sharing practices, e.g., vendors, consultants, third-party advertisers, legal requirements, etc.]</p>

        {/* Add other relevant sections like Cookies, Data Retention, Security, Your Rights, Contact Info */}

        <h2 className="text-xl font-semibold mt-6 text-gray-800">5. Changes to This Policy</h2>
        <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Effective Date" and the updated version will be effective as soon as it is accessible. </p>
        
        <p className="mt-8">This is a generic template. Please replace the bracketed information and consult with a legal professional to ensure compliance with applicable laws and regulations.</p>
      </div>
    </div>
  );
}; 