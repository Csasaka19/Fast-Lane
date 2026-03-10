"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import ContactForm from "@/components/ui/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sky-500 dark:text-sky-400 font-semibold text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-6 tracking-tight">
              Let&apos;s Talk!
            </h1>
            <p className="text-lg text-gray-600 dark:text-slate-300">
              We&apos;d love to work on your project, your brand, or company.
              Tell us about your goals and we&apos;ll make them our own. Just
              get in touch below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Book a Free Strategy Session
              </h2>
              <ContactForm />
            </motion.div>

            {/* Location & Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-sky-500 dark:text-sky-400 font-semibold text-sm uppercase tracking-wider">
                  Location
                </span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1 mb-6">
                  Where to Find Us
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sky-50 dark:bg-sky-900/30 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-sky-500" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Address
                      </p>
                      <p className="text-gray-600 dark:text-slate-300 text-sm">
                        {siteConfig.address.street}
                        <br />
                        {siteConfig.address.city}, {siteConfig.address.country}
                        <br />
                        {siteConfig.address.postBox}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sky-50 dark:bg-sky-900/30 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-sky-500" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Email
                      </p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sky-500 hover:text-sky-600 text-sm"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sky-50 dark:bg-sky-900/30 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-sky-500" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Phone
                      </p>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-sky-500 hover:text-sky-600 text-sm"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sky-50 dark:bg-sky-900/30 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-sky-500" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Business Hours
                      </p>
                      <p className="text-gray-600 dark:text-slate-300 text-sm">
                        Mon - Fri: 8:00 AM - 6:00 PM (EAT)
                        <br />
                        Sat: 9:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 dark:bg-slate-800 rounded-2xl h-64 flex items-center justify-center border border-gray-200 dark:border-slate-700">
                {/*
                  ACTION REQUIRED: Embed a Google Map here
                  Replace this div with an iframe from Google Maps embed
                  Or use @react-google-maps/api for an interactive map
                */}
                <div className="text-center text-gray-400 dark:text-slate-500">
                  <MapPin className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm">
                    Map embed placeholder
                    <br />
                    <span className="text-xs">
                      Replace with Google Maps iframe
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
