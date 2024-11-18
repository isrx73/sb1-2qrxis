import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface JoinRequestPopupProps {
  teamName: string;
  onClose: () => void;
}

export default function JoinRequestPopup({ teamName, onClose }: JoinRequestPopupProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Join Request Sent!</h3>
          <p className="text-gray-600 mb-6">
            Your request to join "{teamName}" has been sent. The team leader will contact you soon.
          </p>
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}