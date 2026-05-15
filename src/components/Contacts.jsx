import { useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Send,
  Camera,
  Music2,
} from "lucide-react";

import { businessInfo } from "../data/content";

export default function Contacts() {
  const [showMap, setShowMap] = useState(false);

  return (
    <section className="page-section">
      <h2 className="section-title">Контакты</h2>

      <div className="glass-card rounded-[26px] p-6">
        {/* Телефон */}
        <div className="flex flex-col gap-5 mb-6">
          <a href="tel:+37379447805" className="flex items-start gap-4">
            <Phone className="blue-icon mt-1" size={28} />

            <div>
              <p className="text-sm text-gray-400 font-medium">
                {" "}
                {businessInfo.name1}
              </p>

              <p className="text-[24px] font-[700]"> {businessInfo.phone1}</p>
            </div>
          </a>

          <a href="tel:+37379927900" className="flex items-start gap-4">
            <Phone className="blue-icon mt-1" size={28} />

            <div>
              <p className="text-sm text-gray-400 font-medium">
                {" "}
                {businessInfo.name2}
              </p>

              <p className="text-[24px] font-[700]"> {businessInfo.phone2}</p>
            </div>
          </a>
        </div>

        {/* Адрес */}
        <div className="flex items-start gap-4 mb-7">
          <MapPin className="text-[#3B93FF] mt-1" size={27} />

          <div>
            <p className="text-white font-medium leading-[1.5]">
              {businessInfo.address}
            </p>
          </div>
        </div>

        {/* Главная CTA */}
        <a href={businessInfo.phoneLink} className="primary-button mb-4">
          <Phone size={20} />
          Позвонить
        </a>

        {/* Мессенджеры */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <a
            href={businessInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="messenger-button whatsapp"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          <a
            href={businessInfo.telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="messenger-button telegram"
          >
            <Send size={18} />
            Telegram
          </a>

          <a href={businessInfo.viberLink} className="messenger-button viber">
            <MessageCircle size={18} />
            Viber
          </a>

          <a
            href={businessInfo.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="messenger-button instagram"
          >
            <Camera size={18} />
            Instagram
          </a>

          <a
            href={businessInfo.tiktokLink}
            target="_blank"
            rel="noopener noreferrer"
            className="messenger-button tiktok col-span-2"
          >
            <Music2 size={18} />
            TikTok
          </a>
        </div>

        {/* Карта */}
        <button onClick={() => setShowMap(!showMap)} className="outline-button">
          <MapPin size={30} />

          {showMap ? "Скрыть карту" : "Открыть карту"}
        </button>

        {/* Карта */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            showMap ? "max-h-[500px] opacity-100 mt-5" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-[22px] overflow-hidden border border-white/10">
            <iframe
              src={businessInfo.mapEmbed}
              width="100%"
              height="320"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
