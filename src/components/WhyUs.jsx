import { BadgeCheck, Clock, Settings, ShieldCheck } from "lucide-react";
import { benefits } from "../data/content";

const icons = [Clock, ShieldCheck, Settings, BadgeCheck];

export default function WhyUs() {
  return (
    <section className="page-section">
      <h2 className="section-title">Почему обращаются</h2>

      <div className="space-y-3">
        {benefits.map((benefit, index) => {
          const Icon = icons[index];

          return (
            <div
              key={index}
              className="glass-card rounded-[18px] px-5 py-4 text-[15px] font-bold flex items-center gap-4"
            >
              <Icon className="blue-icon shrink-0" size={25} />
              <span>{benefit}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}