import React from 'react';

export const TermsOfService = () => {
  // Calculate the first day of the current month
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = firstDayOfMonth.toLocaleDateString('en-US', options);

  return (
    <div className="container mx-auto px-4 py-16 pt-32 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-accent">Terms of Service</h1>
      <div className="space-y-4 text-gray-700">
        <p>Last Updated: {formattedDate}</p>
        
        <h2 className="text-xl font-semibold mt-6 text-gray-800">1. Agreement to Terms</h2>
        <p>By using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>

        <h2 className="text-xl font-semibold mt-6 text-gray-800">2. Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on Learn Leopard's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul className="list-disc list-inside ml-4">
          <li>modify or copy the materials;</li>
          <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>attempt to decompile or reverse engineer any software contained on Learn Leopard's website;</li>
          <li>remove any copyright or other proprietary notations from the materials; or</li>
          <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
        <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Learn Leopard at any time.</p>

        <h2 className="text-xl font-semibold mt-6 text-gray-800">3. Disclaimer</h2>
        <p>The materials on Learn Leopard's website are provided on an 'as is' basis. Learn Leopard makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

        <h2 className="text-xl font-semibold mt-6 text-gray-800">4. Limitations</h2>
        <p>In no event shall Learn Leopard or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Learn Leopard's website, even if Learn Leopard or a Learn Leopard authorized representative has been notified orally or in writing of the possibility of such damage.</p>
        
        <h2 className="text-xl font-semibold mt-6 text-gray-800">5. Modifications</h2>
        <p>Learn Leopard may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>

        <h2 className="text-xl font-semibold mt-6 text-gray-800">6. Governing Law</h2>
        <p>These terms and conditions are governed by and construed in accordance with the laws of [Insert Jurisdiction] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        
        <p className="mt-8">This is a generic template. Please replace the bracketed information and consult with a legal professional to ensure compliance with applicable laws and regulations.</p>
      </div>
    </div>
  );
}; 