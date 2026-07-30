"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Send } from "lucide-react";
import { services, site, waLink } from "@/lib/data";
import { EASE } from "@/lib/motion";
import { WhatsAppIcon } from "@/components/icons";

const initial = { name: "", phone: "", service: "", date: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const update =
    (key: keyof typeof initial) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hello! I'd like to book an appointment.`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.service ? `Service: ${form.service}` : "",
      form.date ? `Preferred date: ${form.date}` : "",
      form.message ? `Details: ${form.message}` : "",
    ]
      .filter((l, i) => l !== "" || i === 1)
      .join("\n");
    window.open(waLink(lines), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-henna/30 bg-mocha/40 p-10 text-center"
          >
            <svg viewBox="0 0 52 52" className="h-16 w-16">
              <motion.circle
                cx="26"
                cy="26"
                r="24"
                fill="none"
                stroke="#f7ebab"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.7, ease: EASE }}
              />
              <motion.path
                d="M15 27 L23 34 L38 19"
                fill="none"
                stroke="#f7ebab"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
              />
            </svg>
            <h3 className="mt-6 font-serif text-3xl text-cream">
              Almost there!
            </h3>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-sand">
              Your booking details have been prepared in WhatsApp — just press
              send there and we&apos;ll get back to you shortly. You can also
              call us directly at {site.phones[0]}.
            </p>
            <button
              onClick={() => {
                setForm(initial);
                setSent(false);
              }}
              className="btn-outline mt-8 !px-6 !py-3 text-[11px]"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: EASE }}
            onSubmit={handleSubmit}
            className="space-y-7"
          >
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="field-label">
                  Your name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Priya Sharma"
                  value={form.name}
                  onChange={update("name")}
                  className="field"
                />
              </div>
              <div>
                <label htmlFor="phone" className="field-label">
                  Phone number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  pattern="[0-9+ -]{7,15}"
                  placeholder="+91 98xxxxxx58"
                  value={form.phone}
                  onChange={update("phone")}
                  className="field"
                />
              </div>
            </div>

            <div className="grid gap-7 sm:grid-cols-2">
              <div className="relative">
                <label htmlFor="service" className="field-label">
                  Service
                </label>
                <select
                  id="service"
                  value={form.service}
                  onChange={update("service")}
                  className="field cursor-pointer appearance-none"
                >
                  <option value="" className="bg-coal">
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title} className="bg-coal">
                      {s.title}
                    </option>
                  ))}
                  <option value="Other" className="bg-coal">
                    Other
                  </option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-1 bottom-4 h-4 w-4 text-sand" />
              </div>
              <div>
                <label htmlFor="date" className="field-label">
                  Preferred date
                </label>
                <input
                  id="date"
                  type="date"
                  value={form.date}
                  onChange={update("date")}
                  className="field cursor-pointer [color-scheme:dark]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="field-label">
                Tell us about your occasion
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Wedding on 14th Dec — bridal mehndi for me and party mehndi for 8 family members…"
                value={form.message}
                onChange={update("message")}
                className="field resize-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="btn-solid"
              >
                <Send className="h-4 w-4" />
                Send via WhatsApp
              </motion.button>
              <p className="flex items-center gap-2 text-[13px] text-sand">
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                Opens WhatsApp with your details pre-filled
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
