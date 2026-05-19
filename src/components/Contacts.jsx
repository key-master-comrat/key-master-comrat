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
  return (
    <section className="page-section">
      <h2 className="section-title">Контакты</h2>

      <div className="glass-card rounded-[26px] p-6">
        {/* Телефоны */}
        <div className="flex flex-col gap-5 mb-6">
          <a
            href={businessInfo.phoneLink1}
            className="flex items-center gap-5"
            aria-label={`Позвонить: ${businessInfo.name1}`}
          >
            <Phone className="blue-icon shrink-0" size={28} />

            <div>
              <p className="text-sm text-gray-400 font-medium mb-1">
                {businessInfo.name1}
              </p>

              <p className="text-[24px] font-[700] leading-none">
                {businessInfo.phone1}
              </p>
            </div>
          </a>

          <a
            href={businessInfo.phoneLink2}
            className="flex items-center gap-5"
            aria-label={`Позвонить: ${businessInfo.name2}`}
          >
            <Phone className="blue-icon shrink-0" size={28} />

            <div>
              <p className="text-sm text-gray-400 font-medium mb-1">
                {businessInfo.name2}
              </p>

              <p className="text-[24px] font-[700] leading-none">
                {businessInfo.phone2}
              </p>
            </div>
          </a>
        </div>

        {/* Адрес */}
        <div className="flex items-center gap-5 mb-7">
          <MapPin className="blue-icon shrink-0" size={27} />

          <div>
            <p className="text-white font-medium leading-[1.5]">
              {businessInfo.address}
            </p>
          </div>
        </div>

        {/* Главная CTA — ведёт к Максиму */}
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
            target={businessInfo.telegramLink === "#" ? undefined : "_blank"}
            rel={
              businessInfo.telegramLink === "#"
                ? undefined
                : "noopener noreferrer"
            }
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
            target={businessInfo.instagramLink === "#" ? undefined : "_blank"}
            rel={
              businessInfo.instagramLink === "#"
                ? undefined
                : "noopener noreferrer"
            }
            className="messenger-button instagram"
          >
            <Camera size={18} />
            Instagram
          </a>

          <a
            href={businessInfo.tiktokLink}
            target={businessInfo.tiktokLink === "#" ? undefined : "_blank"}
            rel={
              businessInfo.tiktokLink === "#"
                ? undefined
                : "noopener noreferrer"
            }
            className="messenger-button tiktok col-span-2"
          >
            <Music2 size={18} />
            TikTok
          </a>
        </div>

        {/* Статичная карта */}
        <div className="mt-5 rounded-[22px] overflow-hidden border border-white/10">
          <iframe
            title="KEY MASTER location"
            src={businessInfo.mapEmbed}
            width="100%"
            height="320"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
