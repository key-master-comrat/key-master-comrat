import { Link } from "react-router-dom";
import {
  Camera,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
  Send,
} from "lucide-react";

import { businessInfo } from "../data/content";
import Footer from "../components/Footer";

export default function CardPage() {
  return (
    <main className="min-h-screen bg-[#010409] text-white">
      <div
        className="max-w-[430px] mx-auto min-h-screen bg-cover bg-top bg-repeat-y"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      >
        <div className="relative overflow-hidden min-h-screen bg-black/28 px-8 pt-16 pb-10 flex flex-col">
          {/* Декоративный ключ — как на главной */}
          <div className="absolute right-[-135px] top-[-30px] opacity-[0.16] pointer-events-none blur-[0.6px] z-0">
            <img
              src="/key-vector.png"
              alt=""
              className="w-[370px] saturate-90 brightness-95"
            />
          </div>

          {/* Верх визитки */}
          <header className="relative z-10 mb-10">
            <Link to="/" className="block w-fit">
              <img
                src="/hero.png"
                alt="KEY MASTER"
                className="w-[170px] mb-10"
              />
            </Link>

            <h1 className="text-[31px] leading-[1.12] font-[700] tracking-[-0.03em] mb-5 max-w-[310px] uppercase">
              Контакты
            </h1>

            <p className="text-[#d5d7dc] text-[18px] leading-[1.45] font-[500] max-w-[340px]">
              Быстрая связь с мастером: звонок, мессенджеры и адрес на карте.
            </p>
          </header>

          {/* Карточка контактов */}
          <section className="relative z-10 glass-card rounded-[26px] p-6 mb-0">
            <div className="space-y-5 mb-6">
              <div className="flex flex-col gap-5 mb-6">
                <a
                  href={businessInfo.phoneLink1}
                  className="flex items-start gap-4"
                  aria-label={`Позвонить: ${businessInfo.name1}`}
                >
                  <Phone className="blue-icon mt-1 shrink-0" size={28} />

                  <div>
                    <p className="text-sm text-gray-400 font-medium">
                      {businessInfo.name1}
                    </p>

                    <p className="text-[24px] font-[700]">
                      {businessInfo.phone1}
                    </p>
                  </div>
                </a>

                <a
                  href={businessInfo.phoneLink2}
                  className="flex items-start gap-4"
                  aria-label={`Позвонить: ${businessInfo.name2}`}
                >
                  <Phone className="blue-icon mt-1 shrink-0" size={28} />

                  <div>
                    <p className="text-sm text-gray-400 font-medium">
                      {businessInfo.name2}
                    </p>

                    <p className="text-[24px] font-[700]">
                      {businessInfo.phone2}
                    </p>
                  </div>
                </a>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="blue-icon mt-1 shrink-0" size={27} />

                <div>
                  <p className="text-sm text-white/55 font-medium mb-1">
                    Адрес
                  </p>

                  <p className="text-[16px] leading-[1.45] font-[400]">
                    {businessInfo.address}
                  </p>
                </div>
              </div>
            </div>

            <a href={businessInfo.phoneLink} className="primary-button mb-4">
              <Phone size={21} />
              Позвонить
            </a>

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
                target={
                  businessInfo.telegramLink === "#" ? undefined : "_blank"
                }
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

              <a
                href={businessInfo.viberLink}
                className="messenger-button viber"
              >
                <MessageCircle size={18} />
                Viber
              </a>

              <a
                href={businessInfo.instagramLink}
                target={
                  businessInfo.instagramLink === "#" ? undefined : "_blank"
                }
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
          </section>
          <div className="relative z-10 mt-10">
            <Link to="/" className="outline-button">
              Перейти на главную
            </Link>
          </div>

          <div className="relative z-10 mt-10">
            <Footer className="pt-0 pb-12" />
          </div>
        </div>
      </div>
    </main>
  );
}
