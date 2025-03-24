'use client';

import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useState, useEffect } from 'react';

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      analytics,
      marketing,
      essential: true,
      timestamp: new Date().toISOString()
    }));
    setOpen(false);
  };

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      analytics: true,
      marketing: true,
      essential: true,
      timestamp: new Date().toISOString()
    }));
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed bottom-0 left-0 right-0 max-w-2xl mx-auto mb-4 p-6 bg-[#111] border border-pink-500/20 rounded-lg shadow-lg z-50">
          <Dialog.Title className="text-xl font-bold text-white mb-4">
            Cookie Preferences
          </Dialog.Title>
          <Dialog.Description className="text-gray-300 mb-6">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. Please select your preferences below.
          </Dialog.Description>

          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-4">
              <Checkbox.Root
                checked
                disabled
                className="w-5 h-5 rounded border border-pink-500/50 bg-pink-500/20 flex items-center justify-center"
              >
                <Checkbox.Indicator>
                  <Check className="w-4 h-4 text-pink-500" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <div>
                <p className="font-medium text-white">Essential Cookies</p>
                <p className="text-sm text-gray-400">Required for the website to function properly</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Checkbox.Root
                id="analytics"
                checked={analytics}
                onCheckedChange={(checked) => setAnalytics(checked as boolean)}
                className="w-5 h-5 rounded border border-teal-500/50 bg-teal-500/20 flex items-center justify-center"
              >
                <Checkbox.Indicator>
                  <Check className="w-4 h-4 text-teal-500" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <div>
                <p className="font-medium text-white">Analytics Cookies</p>
                <p className="text-sm text-gray-400">Help us understand how visitors interact with our website</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Checkbox.Root
                id="marketing"
                checked={marketing}
                onCheckedChange={(checked) => setMarketing(checked as boolean)}
                className="w-5 h-5 rounded border border-pink-500/50 bg-pink-500/20 flex items-center justify-center"
              >
                <Checkbox.Indicator>
                  <Check className="w-4 h-4 text-pink-500" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <div>
                <p className="font-medium text-white">Marketing Cookies</p>
                <p className="text-sm text-gray-400">Used to deliver more relevant advertisements</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              variant="outline"
              onClick={handleAccept}
              className="border-pink-500/20 hover:border-pink-500/40 text-white"
            >
              Save Preferences
            </Button>
            <Button
              onClick={handleAcceptAll}
              className="bg-pink-500 hover:bg-pink-600 text-white"
            >
              Accept All
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
} 