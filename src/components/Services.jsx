import { Car, KeyRound, LockOpen, RadioTower, RotateCcw } from "lucide-react";
import { services } from "../data/content";

const icons = [KeyRound, LockOpen, Car, RotateCcw, RadioTower];

export default function Services() {
  return (
    <section className="page-section">
      <div className="glass-card w-full rounded-[26px] p-8">
        <h2 className="section-title mb-6">Услуги</h2>

        <div className="space-y-4">
          {services.map((service, index) => {
            const Icon = icons[index];

            return (
              <div
                key={index}
                className="grid grid-cols-[34px_1fr] items-center gap-5"
              >
                <Icon
                  size={34}
                  strokeWidth={2.1}
                  className="blue-icon shrink-0"
                />

                <p className="text-[17px] font-medium leading-snug">
                  {service}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
