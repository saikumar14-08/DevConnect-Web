import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400 mb-6">
            For any inquiries, reach out to us at:
          </p>
          <div className="space-y-3">
            <p className="flex items-center justify-center gap-2 text-lg">
              📧{" "}
              <a
                href="mailto:saikumar9808@gmail.com"
                className="text-blue-400 hover:underline"
              >
                support@devconnekt.com
              </a>
            </p>
            <p className="flex items-center justify-center gap-2 text-lg">
              📞{" "}
              <a
                href="tel:+1234567890"
                className="text-blue-400 hover:underline"
              >
                +1234567890
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
